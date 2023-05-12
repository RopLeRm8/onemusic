import { createContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useLoadFonts } from "../hooks/useLoadFonts";
import IdPage from "../pages/IdPage";
import Landing from "../pages/Landing";

export const MainContext = createContext();

export default function RouteProvider() {
  const loadFonts = useLoadFonts();
  useEffect(() => {
    loadFonts;
  }, [loadFonts]);
  return (
    <MainContext.Provider
      value={{ colors: ["#15E78F", "white"], fonts: ["Montserrat"] }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/id" element={<IdPage />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}
