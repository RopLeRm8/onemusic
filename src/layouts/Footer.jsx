import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import tele from "../assets/Footer/tele.png";
import vk from "../assets/Footer/vk.png";
import yt from "../assets/Footer/yt.png";
import logo from "../assets/Global/logo.svg";
import { MainContext } from "../providers/RouteProvider";

export default function Footer() {
  const MainContextVal = useContext(MainContext);
  const firstColor = MainContextVal.colors[0];
  const secondColor = MainContextVal.colors[1];
  const font = MainContextVal.fonts[0];
  const infoLinks = [
    {
      label: "О проекте",
      link: "",
    },
    {
      label: "Реферальная система",
      link: "",
    },
    {
      label: "Работа у нас",
      link: "",
    },
    {
      label: "Сведения о проекте",
      link: "",
    },
    {
      label: "Правовая информация",
      link: "",
    },
  ];
  const communityLinks = [
    {
      label: "Артисты",
      link: "",
    },
    {
      label: "Разработчики",
      link: "",
    },
    {
      label: "Инвесторы",
      link: "",
    },
  ];
  const otherLinks = [
    {
      label: "Поддержка",
      link: "",
    },
    {
      label: "Приложения",
      link: "",
    },
    {
      label: "Веб Плеер",
      link: "",
    },
  ];
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      sx={{
        background: "black",
        minWidth: "100%",
        maxWidth: "100%",
        py: 5,
      }}
    >
      <Box sx={{ display: "block" }}>
        <img src={logo} style={{ maxWidth: "80%" }} alt="" />
        <Box sx={{ display: "flex", my: 2 }}>
          <IconButton sx={{ "&:hover": { background: firstColor } }}>
            <img src={vk} alt="" />
          </IconButton>
          <IconButton sx={{ "&:hover": { background: firstColor } }}>
            <img src={yt} alt="" />
          </IconButton>
          <IconButton sx={{ "&:hover": { background: firstColor } }}>
            <img src={tele} alt="" />
          </IconButton>
        </Box>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 600,
            fontSize: "70%",
            opacity: 0.5,
          }}
        >
          Сеть проектов
        </Typography>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 600,
            fontSize: "70%",
            opacity: 0.5,
            mb: 2.5,
          }}
        >
          Premium Подписка
        </Typography>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 600,
            fontSize: "70%",
          }}
        >
          music@one.ru
        </Typography>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 600,
            fontSize: "70%",
            opacity: 0.5,
            mb: 2,
          }}
        >
          По вопросам
        </Typography>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 500,
            fontSize: "80%",
            opacity: 0.5,
            mb: { xs: 3, md: 0 },
          }}
        >
          © ONERU MUSIC, 2023
        </Typography>
      </Box>
      <Box sx={{ display: "block" }}>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 700,
            fontSize: "100%",
            mb: 2.5,
          }}
        >
          Информация
        </Typography>
        {infoLinks.map((link) => (
          <a
            href={link.link}
            key={link.name}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 600,
                fontSize: "80%",
                opacity: 0.5,
                mb: 2.2,
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              {link.label}
            </Typography>
          </a>
        ))}
      </Box>
      <Box sx={{ display: "block" }}>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 700,
            fontSize: "100%",
            mb: 2,
          }}
        >
          Сообщества
        </Typography>
        {communityLinks.map((link) => (
          <a
            href={link.link}
            key={link.name}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 600,
                fontSize: "80%",
                opacity: 0.5,
                mb: 2.2,
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              {link.label}
            </Typography>
          </a>
        ))}
      </Box>
      <Box sx={{ display: "block" }}>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 700,
            fontSize: "100%",
            mb: 2,
          }}
        >
          Ссылки
        </Typography>
        {otherLinks.map((link) => (
          <a
            href={link.link}
            key={link.name}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 600,
                fontSize: "80%",
                opacity: 0.5,
                mb: 2.2,
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              {link.label}
            </Typography>
          </a>
        ))}
      </Box>
    </Grid>
  );
}
