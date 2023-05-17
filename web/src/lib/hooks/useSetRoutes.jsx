import { Box } from "@mui/material";
import { lazy, Suspense } from "react";

const Landing = lazy(() => import("../../pages/Landing"));
const IdPage = lazy(() => import("../../pages/IdPage"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage"));
export default function useSetRoutes() {
  const fallbackElement = <Box style={{ color: "white" }}>Loading...</Box>;

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
      path: "*",
      navigate: "/",
    },
  ];

  return routesList;
}
