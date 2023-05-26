import { Box, Button, Typography } from "@mui/material";
import { useGetGlobalValues } from "../../../hooks/useDataHandling";
export default function LandingFooter({ text }) {
  const { firstColor, font } = useGetGlobalValues();
  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        justifyContent: { xs: "center", md: "space-evenly" },
        alignItems: "center",
        maxWidth: "100%",
        background: firstColor,
        py: 4,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "block",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: font,
            color: "black",
            fontSize: "180%",
            fontWeight: 800,
            maxWidth: { md: "65%" },
            flexGrow: 0,
            flexShrink: 1,
            mx: "auto",
          }}
        >
          БЕСПЛАТНО
        </Typography>
        <Typography
          sx={{
            fontFamily: font,
            color: "black",
            fontSize: "80%",
            fontWeight: 600,
            maxWidth: { md: "65%" },
            flexGrow: 0,
            flexShrink: 1,
            mx: "auto",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          с момента открытия по 15.07
        </Typography>
      </Box>
      <Box
        sx={{
          display: "block",
        }}
      >
        <Typography
          sx={{
            fontFamily: font,
            color: "black",
            fontSize: "150%",
            fontWeight: 600,
          }}
        >
          В честь запуска сервиса
        </Typography>
        <Typography
          sx={{
            fontFamily: font,
            color: "black",
            fontSize: "70%",
            fontWeight: 500,
          }}
        >
          Успей зарегистрироваться и получить
        </Typography>
        <Typography
          sx={{
            fontFamily: font,
            color: "black",
            fontSize: "70%",
            fontWeight: 500,
          }}
        >
          бесплатную подписку на 3 месяца
        </Typography>
      </Box>
      <Button
        sx={{
          fontFamily: font,
          color: "black",
          fontSize: "70%",
          fontWeight: 600,
          textTransform: "none",
          border: "1px solid black",
          p: 3,
          mt: { xs: 1, md: 0 },
          "&:hover": {
            color: firstColor,
            background: "black",
          },
        }}
      >
        {text}
      </Button>
    </Box>
  );
}
