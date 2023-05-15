import { createContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useLoadFonts } from "../lib/hooks/useLoadFonts";
import useSetPageBlack from "../lib/hooks/useSetPageBlack";
import IdPage from "../pages/IdPage";
import Landing from "../pages/Landing";
import ProfilePage from "../pages/ProfilePage";

export const MainContext = createContext();

export default function RouteProvider() {
  useSetPageBlack();
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
          <Route path="/auth" element={<IdPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}
