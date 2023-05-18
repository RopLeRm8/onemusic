import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import { useCallback } from "react";
import redirectIcon from "../../../../assets/Landing/redirect.svg";
import useGetGlobalValues from "../../../hooks/useGetGlobalValues";
import useRedirect from "../../../hooks/useRedirect";
import GradientCircle from "../../customElements/GradientCircle";
export default function LandingFirst() {
  const { firstColor, secondColor, font } = useGetGlobalValues();
  const redirect = useRedirect();
  const handleRedirectToID = useCallback(() => {
    redirect("/auth");
  }, [redirect]);
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
          maxWidth: { md: "67.5%" },
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
            display: { xs: "none", md: "flex" },
          }}
        >
          Первые 3 месяца будут бесплатны
        </Typography>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
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
          maxWidth: "67%",
          mx: "auto",
          my: 5,
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
          maxWidth: "69%",
          mx: "auto",
          my: 5,
          minWidth: "25%",
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
            px: { xs: 5, md: 3 },
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
          onClick={handleRedirectToID}
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
    </>
  );
}
