import { Box } from "@mui/material";
import { createContext, useContext } from "react";
import FirstBox from "../lib/ui/components/IdPage/FirstBox";
import SecondBox from "../lib/ui/components/IdPage/SecondBox";
import "../css/pageBack.css";
import useGetIdPriorities from "../lib/hooks/useGetIdPriorities";
import Centered from "../lib/ui/layouts/Centered";
import { MainContext } from "../providers/RouteProvider";

export const IdContext = createContext({});

export default function IdPage() {
  const MainContextVal = useContext(MainContext);
  const firstColor = MainContextVal.colors[0];
  const secondColor = MainContextVal.colors[1];
  const font = MainContextVal.fonts[0];
  const BORDERINITIALCOLOR = "255,255,255";
  const priorities = useGetIdPriorities();

  return (
    <Centered style={{ minWidth: "45%", maxWidth: { xs: "75%", md: "45%" } }}>
      <Box
        sx={{
          border: `2px rgba(${BORDERINITIALCOLOR}, 0.1) solid`,
          display: { xs: "block", md: "flex" },
          minHeight: "30rem",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <IdContext.Provider
          value={{
            font: font,
            firstColor: firstColor,
            secondColor: secondColor,
            BORDERINITIALCOLOR: BORDERINITIALCOLOR,
            priorities: priorities,
          }}
        >
          <FirstBox />
          <SecondBox />
        </IdContext.Provider>
      </Box>
    </Centered>
  );
}
