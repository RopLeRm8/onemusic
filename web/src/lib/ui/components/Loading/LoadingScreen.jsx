import { LinearProgress, Typography } from "@mui/material";
import { useGetGlobalValues } from "../../../hooks/useDataHandling";
import Centered from "../../layouts/Centered";

export default function LoadingScreen() {
  const { font, firstColor, secondColor } = useGetGlobalValues();
  const BACKCOLOR = "rgba(255, 255, 255, 0.2)";
  return (
    <Centered>
      <Typography
        sx={{ fontFamily: font, color: secondColor, fontWeight: 600, mb: 1 }}
      >
        Подгружаем некоторые данные...
      </Typography>
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
