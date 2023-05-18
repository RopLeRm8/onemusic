import { Avatar, Box, Typography } from "@mui/material";
import logo from "../../../../assets/Profile/biglogo.svg";
import useGetProfilePageValues from "../../../hooks/useGetProfilePageValues";

export default function UpperInfo() {
  const { font, secondColor } = useGetProfilePageValues();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="" />

        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 700,
            fontSize: "200%",
          }}
        >
          ID
        </Typography>
      </Box>
      <Avatar />
    </Box>
  );
}
