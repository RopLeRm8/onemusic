import { lazy, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/pageBack.css";
import LoadingScreen from "../ui/components/Loading/LoadingScreen";

const Landing = lazy(() => import("../../pages/Landing"));
const IdPage = lazy(() => import("../../pages/IdPage"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage"));
const ErrorPage = lazy(() => import("../../pages/ErrorPage"));

export function useSetPageBlack() {
  useEffect(() => {
    document.body.classList.add("pageBack");
    return () => {
      document.body.classList.remove("pageBack");
    };
  }, []);
}

export function useRedirect() {
  const navigate = useNavigate();
  const redirect = (page) => navigate(page);
  return redirect;
}
export function useSetRoutes() {
  const fallbackElement = <LoadingScreen />;

  const withSuspense = (Component) => (
    <Suspense fallback={fallbackElement}>
      <Component />
    </Suspense>
  );

  const routesList = [
    {
      path: "/",
      element: withSuspense(Landing),
    },
    {
      path: "/auth",
      element: withSuspense(IdPage),
    },
    {
      path: "/profile",
      element: withSuspense(ProfilePage),
    },
    {
      path: "/404",
      element: withSuspense(ErrorPage),
    },
    {
      path: "*",
      navigate: "/404",
    },
  ];

  return routesList;
}
