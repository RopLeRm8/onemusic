import { createContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useLoadFonts } from "../lib/hooks/useLoadFonts";
import { useSetPageBlack, useSetRoutes } from "../lib/hooks/useRoutingHandlers";
import Scrollbar from "../lib/ui/layouts/Scrollbar";
export const MainContext = createContext({
  colors: ["#15E78F", "white"],
  fonts: ["Montserrat"],
});

export default function RouteProvider() {
  useSetPageBlack();
  useLoadFonts();
  const routesList = useSetRoutes();
  return (
    <MainContext.Provider
      value={{ colors: ["#15E78F", "white"], fonts: ["Montserrat"] }}
    >
      <Scrollbar />
      <BrowserRouter>
        <Routes>
          {routesList.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element ?? <Navigate to={route.navigate} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}
