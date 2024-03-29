import { Box, Grid, IconButton, Typography } from "@mui/material";
import tele from "../../../assets/Footer/tele.png";
import vk from "../../../assets/Footer/vk.png";
import yt from "../../../assets/Footer/yt.png";
import logo from "../../../assets/Global/logo.svg";
import {
  useGetFooterLinks,
  useGetGlobalValues,
} from "../../hooks/useDataHandling";

export default function Footer() {
  const { secondColor, font } = useGetGlobalValues();
  const { infoLinks, communityLinks, otherLinks } = useGetFooterLinks();
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
        <img
          src={logo}
          style={{ maxWidth: "80%", userSelect: "none" }}
          alt=""
        />
        <Box sx={{ display: "flex", my: 2 }}>
          <IconButton
            sx={{
              pl: 0,
              "& img": {
                opacity: 0.8,
              },
              "&:hover": {
                "& img": {
                  opacity: 1,
                },
              },
            }}
          >
            <img src={vk} alt="" />
          </IconButton>
          <IconButton
            sx={{
              "& img": {
                opacity: 0.8,
              },
              "&:hover": {
                "& img": {
                  opacity: 1,
                },
              },
            }}
          >
            <img src={yt} alt="" />
          </IconButton>
          <IconButton
            sx={{
              "& img": {
                opacity: 0.8,
              },
              "&:hover": {
                "& img": {
                  opacity: 1,
                },
              },
            }}
          >
            <img src={tele} alt="" />
          </IconButton>
        </Box>
        <a href="" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 600,
              fontSize: "70%",
              opacity: 0.5,
              transition: "all .1s ease-out",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            Сеть проектов
          </Typography>
        </a>
        <a href="" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 600,
              fontSize: "70%",
              opacity: 0.5,
              mb: 2.5,
              transition: "all .1s ease-out",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            Premium Подписка
          </Typography>
        </a>
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
            fontWeight: 500,
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
          © ONE.RU 2023
        </Typography>
      </Box>
      <Box sx={{ display: "block" }}>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 700,
            fontSize: "80%",
            mb: 2.5,
          }}
        >
          Информация
        </Typography>
        {infoLinks.map((link, index) => (
          <a
            href={link.link}
            key={`info-link-${index}`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 500,
                fontSize: "80%",
                opacity: 0.5,
                mb: 2.2,
                transition: "all .1s ease-out",
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
            fontSize: "80%",
            mb: 2,
          }}
        >
          Сообщества
        </Typography>
        {communityLinks.map((link, index) => (
          <a
            href={link.link}
            key={`info-link-${index}`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 500,
                fontSize: "80%",
                opacity: 0.5,
                mb: 2.2,
                transition: "all .1s ease-out",
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
            fontSize: "80%",
            mb: 2,
          }}
        >
          Ссылки
        </Typography>
        {otherLinks.map((link, index) => (
          <a
            href={link.link}
            key={`info-link-${index}`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 500,
                fontSize: "80%",
                opacity: 0.5,
                mb: 2.2,
                transition: "all .1s ease-out",
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
