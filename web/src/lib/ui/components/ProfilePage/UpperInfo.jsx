import { Avatar, Box, Typography } from "@mui/material";
import { useContext } from "react";
import logo from "../../../../assets/Profile/biglogo.svg";
import { ProfilePageContext } from "../../../../pages/ProfilePage";

export default function UpperInfo() {
  const ProfilePageContextVal = useContext(ProfilePageContext);
  const font = ProfilePageContextVal.font;
  const secondColor = ProfilePageContextVal.secondColor;
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
