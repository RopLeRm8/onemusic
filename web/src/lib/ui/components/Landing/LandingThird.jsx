import { Box, Button, Grid, Typography } from "@mui/material";
// import appleLogo from "../../../../assets/Landing/apple.png";
// import googlePlay from "../../../../assets/Landing/googleplay.png";
import useGetGlobalValues from "../../../hooks/useGetGlobalValues";

export default function LandingThird() {
  const { firstColor, secondColor, font } = useGetGlobalValues();

  return (
    <Grid container sx={{ mt: 7 }} direction="column" alignItems="center">
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            fontFamily: font,
            color: firstColor,
            fontWeight: 700,
            fontSize: { xs: "150%", md: "170%" },
            mr: 1,
          }}
        >
          Скачивайте
        </Typography>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 700,
            fontSize: { xs: "150%", md: "170%" },
          }}
        >
          приложение
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: font,
          color: secondColor,
          fontWeight: 600,
          fontSize: "100%",
          mb: 3,
        }}
      >
        Чтобы положить трек в карман
      </Typography>
      <Box sx={{ display: "flex", mb: 2 }}>
        <Button
          sx={{
            border: `2px solid ${firstColor}`,
            borderRadius: "4px",
            py: 2,
            px: 2,
            mr: { xs: 1, md: 3 },
            "&:hover": {
              background: firstColor,
              color: "black",
              "& .MuiTypography-root": {
                color: "black",
              },
            },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 500,
                fontSize: "80%",
                textTransform: "none",
                mr: 0.5,
              }}
            >
              Загрузите в
            </Typography>
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 600,
                fontSize: "80%",
                textTransform: "none",
                textAlign: "start",
              }}
            >
              AppStore
            </Typography>
          </Box>
        </Button>
        <Button
          sx={{
            border: `2px solid ${firstColor}`,
            borderRadius: "4px",
            px: 2,
            colors: secondColor,
            "&:hover": {
              background: firstColor,
              color: "black",
              "& .MuiTypography-root": {
                color: "black",
              },
            },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 500,
                fontSize: "80%",
                textTransform: "none",
                mr: 0.5,
              }}
            >
              Доступно в
            </Typography>
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 600,
                fontSize: "80%",
                textTransform: "none",
              }}
            >
              Google Play
            </Typography>
          </Box>
        </Button>
      </Box>
      <Button
        sx={{
          fontFamily: font,
          color: "black",
          fontSize: "100%",
          fontWeight: 600,
          textTransform: "none",
          border: "1px solid black",
          background: firstColor,
          py: 1,
          px: 5,
          mb: 1,
          "&:hover": {
            color: firstColor,
            background: "black",
          },
        }}
      >
        3 месяца бесплатно
      </Button>
      <Typography
        sx={{
          fontFamily: font,
          color: secondColor,
          fontWeight: 600,
          fontSize: "80%",
          textTransform: "none",
          mb: 8,
        }}
      >
        Далее 149₽ в месяц
      </Typography>
    </Grid>
  );
}
