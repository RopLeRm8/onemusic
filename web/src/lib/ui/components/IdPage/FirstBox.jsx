import { Box, Typography } from "@mui/material";
import logo from "../../../../assets/ID/logo.svg";
import useGetIdPageValues from "../../../hooks/useGetIdPageValues";

export default function FirstBox() {
  const firstBoxBackground = "#0d0d0d";
  const { font, firstColor, secondColor, priorities } = useGetIdPageValues();
  const MOREABOUTID = "";
  return (
    <Box
      sx={{
        background: firstBoxBackground,
        px: 3,
        py: 2.5,
        pr: { md: 3, xl: 0 },
        width: { xs: "auto", md: "70%" },
      }}
    >
      <img src={logo} alt="" />
      <Typography
        sx={{
          fontFamily: font,
          color: secondColor,
          fontWeight: 600,
          fontSize: "150%",
          my: 3,
        }}
      >
        Вход в аккаунт
      </Typography>
      <Box sx={{ display: "block" }}>
        {priorities.map((prio) => (
          <Box
            sx={{ display: "flex", alignItems: "center", mt: 3.5 }}
            key={prio.label}
          >
            <img src={prio.picture} alt="" />
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 400,
                fontSize: "90%",
                maxWidth: "100%",
                opacity: 0.3,
                ml: 2,
              }}
            >
              {prio.label}
            </Typography>
          </Box>
        ))}
      </Box>
      <a href={MOREABOUTID}>
        <Typography
          sx={{
            fontFamily: font,
            color: firstColor,
            fontWeight: 500,
            fontSize: "60%",
            position: "absolute",
            top: { md: "93%" },
            maxWidth: "40%",
            display: { xs: "none", md: "flex" },
            transition: "0.2s all ease-in-out",
            "&:hover": {
              color: secondColor,
            },
          }}
        >
          Подробнее о ONE.RU ID
        </Typography>
      </a>
    </Box>
  );
}
