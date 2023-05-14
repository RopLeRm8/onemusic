import { Box } from "@mui/material";
import { createContext, useContext, useEffect } from "react";
import ProfileProperties from "../components/ProfilePage/ProfileProperties";
import UpperInfo from "../components/ProfilePage/UpperInfo";
import "../css/pageBack.css";
import { MainContext } from "../providers/RouteProvider";
export const ProfilePageContext = createContext();
export default function ProfilePage() {
  const MainContextVal = useContext(MainContext);
  const firstColor = MainContextVal.colors[0];
  const secondColor = MainContextVal.colors[1];
  const font = MainContextVal.fonts[0];
  useEffect(() => {
    document.body.classList.add("pageBack");
    return () => {
      document.body.classList.add("pageBack");
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "70%", sm: "50%" },
        height: "38rem",
        mx: "auto",
        flexDirection: "column",
        gap: "7rem",
      }}
    >
      <ProfilePageContext.Provider
        value={{ font: font, firstColor: firstColor, secondColor: secondColor }}
      >
        <UpperInfo />
        <ProfileProperties />
      </ProfilePageContext.Provider>
    </Box>
  );
}
