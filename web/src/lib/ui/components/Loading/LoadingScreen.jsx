import { LinearProgress } from "@mui/material";
import { useGetGlobalValues } from "../../../hooks/useDataHandling";
import Centered from "../../layouts/Centered";

export default function LoadingScreen() {
  const { firstColor } = useGetGlobalValues();
  const BACKCOLOR = "rgba(255, 255, 255, 0.2)";
  return (
    <Centered style={{ minWidth: "40%" }}>
      Custom Loading
      <LinearProgress
        sx={{
          background: BACKCOLOR,
          height: 4,
          "& .MuiLinearProgress-bar": {
            backgroundColor: firstColor,
          },
        }}
      />
    </Centered>
  );
}
