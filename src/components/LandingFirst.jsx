import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/material";
import { useContext } from "react";
import redirectIcon from "../assets/Landing/redirect.svg";
import { MainContext } from "../providers/RouteProvider";
export default function LandingFirst() {
  const MainContextVal = useContext(MainContext);
  const firstColor = MainContextVal.colors[0];
  const secondColor = MainContextVal.colors[1];
  const font = MainContextVal.fonts[0];

  const GradientCircle = styled("div")({
    width: "7.5px",
    height: "6px",
    marginRight: "0.7rem",
    borderRadius: "50%",
    backgroundImage: "linear-gradient(to bottom, #15E78F, #0E4FF1)",
  });
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="flex-start"
        direction={{ xs: "column", md: "row" }}
        sx={{
          mt: { xs: 5, md: 10 },
          mb: 5,
          maxWidth: { md: "67%" },
          flexGrow: 0,
          flexShrink: 1,
          mx: "auto",
        }}
      >
        <Button
          variant="contained"
          endIcon={<img src={redirectIcon} alt="" />}
          sx={{
            fontFamily: font,
            background: "#0E4FF1",
            textTransform: "none",
            borderRadius: "1.2rem",
            fontSize: "75%",
            fontWeight: 600,
          }}
        >
          Первый продукт от ONE.RU
        </Button>
        <Typography
          fontFamily={font}
          sx={{
            fontSize: "100%",
            color: secondColor,
            mx: { md: 1 },
            fontWeight: 600,
          }}
        >
          Первые 3 месяца будут бесплатны
        </Typography>
        <Box sx={{ display: "block" }}>
          <Typography
            fontFamily={font}
            sx={{ fontSize: "50%", color: secondColor, fontWeight: 600 }}
          >
            ПЕРВЫМ
          </Typography>
          <Typography
            fontFamily={font}
            sx={{ fontSize: "50%", color: secondColor, fontWeight: 600 }}
          >
            БЕСПЛАТНАЯ
          </Typography>
          <Typography
            fontFamily={font}
            sx={{ fontSize: "50%", color: secondColor, fontWeight: 600 }}
          >
            ПОДПИСКА
          </Typography>
        </Box>
      </Grid>
      {/* Green white texts */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          maxWidth: "67%",
          flexGrow: 0,
          flexShrink: 1,
          mx: "auto",
        }}
      >
        <Box sx={{ display: "block" }}>
          <Typography
            fontFamily={font}
            sx={{
              fontSize: "200%",
              color: firstColor,
              fontWeight: 700,
              mb: -1,
            }}
          >
            Множество треков
          </Typography>
          <Typography
            fontFamily={font}
            sx={{ fontSize: "200%", color: secondColor, fontWeight: 700 }}
          >
            у тебя в кармане
          </Typography>
        </Box>
      </Box>
      {/* List */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          maxWidth: "69%",
          flexGrow: 0,
          flexShrink: 1,
          mx: "auto",
          my: 5,
        }}
      >
        <List dense>
          <ListItem>
            <GradientCircle />
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 600,
                fontSize: "80%",
              }}
            >
              Высокое качество звука
            </Typography>
          </ListItem>
          <ListItem>
            <Box sx={{ display: "block" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <GradientCircle />
                <Typography
                  sx={{
                    fontFamily: font,
                    color: secondColor,
                    fontWeight: 600,
                    fontSize: "80%",
                  }}
                >
                  Возможность перелистывать
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: font,
                  color: secondColor,
                  fontWeight: 600,
                  fontSize: "80%",
                  ml: "1.2rem",
                }}
              >
                треки одним свайпом
              </Typography>
            </Box>
          </ListItem>
          <ListItem>
            <Box sx={{ display: "block" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <GradientCircle />
                <Typography
                  sx={{
                    fontFamily: font,
                    color: secondColor,
                    fontWeight: 600,
                    fontSize: "80%",
                  }}
                >
                  Большой выбор треков
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: font,
                  color: secondColor,
                  fontWeight: 600,
                  fontSize: "80%",
                  ml: "1.2rem",
                }}
              >
                и удобство прослушивания
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Box>
      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          maxWidth: "67%",
          flexGrow: 0,
          flexShrink: 1,
          mx: "auto",
          mb: 5,
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontFamily: font,
            fontWeight: 700,
            textTransform: "none",
            mr: "30px",
            px: 3,
            borderRadius: "3px",
            color: "black",
            background: firstColor,
            fontSize: "90%",
            border: `2px solid ${firstColor}`,
            "&:hover": {
              color: secondColor,
              background: "transparent",
            },
          }}
        >
          Подписаться
        </Button>
        <Button
          variant="contained"
          sx={{
            fontFamily: font,
            fontWeight: 600,
            textTransform: "none",
            px: 5,
            borderRadius: "3px",
            color: secondColor,
            background: "transparent",
            border: `2px solid ${firstColor}`,
            "&:hover": {
              color: "black",
              background: firstColor,
            },
          }}
        >
          Скачать
        </Button>
      </Box>
      {/* First footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          background: firstColor,
          py: 4,
        }}
      >
        <Box sx={{ display: "block", textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: font,
              color: "black",
              fontSize: "180%",
              fontWeight: 800,
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
            }}
          >
            с момента открытия по 15.07
          </Typography>
        </Box>
        <Box
          sx={{
            display: "block",
            mx: -11,
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
            "&:hover": {
              color: firstColor,
              background: "black",
            },
          }}
        >
          Условия акции
        </Button>
      </Box>
    </>
  );
}
