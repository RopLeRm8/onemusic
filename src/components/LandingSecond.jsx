import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { useContext } from "react";
import stepsImg from "../assets/Landing/steps.png";
import { MainContext } from "../providers/RouteProvider";
export default function LandingSecond() {
  const MainContextVal = useContext(MainContext);
  const firstColor = MainContextVal.colors[0];
  const secondColor = MainContextVal.colors[1];
  const font = MainContextVal.fonts[0];
  const steps = [
    "Установите приложение с нашего сайта или площадок",
    "Зарегистрируйтесь в нашей системе",
    "Выберите любимые хиты или исполнителей",
    "Наслаждайтесь любимой музыкой и треками",
  ];
  return (
    <>
      <Box
        sx={{
          display: "block",
          justifyContent: "flex-start",
          maxWidth: "67%",
          flexGrow: 0,
          flexShrink: 1,
          mx: "auto",
          my: 5,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              fontFamily: font,
              color: firstColor,
              mr: 1,
              fontWeight: 700,
              fontSize: "150%",
            }}
          >
            Факинг
          </Typography>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 700,
              fontSize: "150%",
            }}
          >
            тайтл
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 600,
            fontSize: "80%",
            whiteSpace: "pre-line",
            width: { xs: "100%", md: "50%" },
            mb: 1,
          }}
        >
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более менее осмысленного
        </Typography>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 600,
            fontSize: "80%",
            whiteSpace: "pre-line",
            width: { xs: "100%", md: "45%" },
          }}
        >
          текста рыбы на русском языке, а начинающему оратору отточить навык
          публичных выступлений в домашних условиях. При создании генератора мы
          использовали небезизвестный универсальный.
        </Typography>
        <Box sx={{ mt: 10, mb: -2 }}>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontFamily: font,
                color: firstColor,
                fontWeight: 700,
                fontSize: "230%",
                mr: 1.5,
              }}
            >
              Наши достоинства
            </Typography>
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 700,
                fontSize: "230%",
              }}
            >
              среди
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 700,
              fontSize: "230%",
            }}
          >
            остальных подобных сервисов
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          maxWidth: "67%",
          flexGrow: 0,
          flexShrink: 1,
          mx: "auto",
          mb: 5,
        }}
      >
        <Box sx={{ display: "block", mr: 3.5, mb: 3.5 }}>
          <Box
            sx={{
              background: "#222324",
              minWidth: { xs: "90%", md: "100%" },
              maxWidth: { xs: "90%", md: "100%" },
              minHeight: "300px",
              maxHeight: "300px",
              borderRadius: "3px",
            }}
          ></Box>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 600,
              fontSize: "180%",
              mt: 3,
            }}
          >
            Высокое качество
          </Typography>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 500,
              fontSize: "80%",
            }}
          >
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного
          </Typography>
        </Box>
        <Box sx={{ display: "block", mr: 3.5, mb: 3.5 }}>
          <Box
            sx={{
              background: "#222324",
              minWidth: { xs: "90%", md: "100%" },
              maxWidth: { xs: "90%", md: "100%" },
              minHeight: "300px",
              maxHeight: "300px",
              borderRadius: "3px",
            }}
          ></Box>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 600,
              fontSize: "180%",
              mt: 3,
            }}
          >
            Большой выбор
          </Typography>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 500,
              fontSize: "80%",
            }}
          >
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного
          </Typography>
        </Box>
        <Box sx={{ display: "block" }}>
          <Box
            sx={{
              background: "#222324",
              minWidth: { xs: "90%", md: "100%" },
              maxWidth: { xs: "90%", md: "100%" },
              minHeight: "300px",
              maxHeight: "300px",
              borderRadius: "3px",
            }}
          ></Box>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 600,
              fontSize: "180%",
              mt: 3,
            }}
          >
            Слушай свайпом
          </Typography>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 500,
              fontSize: "80%",
            }}
          >
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "block",
          justifyContent: "flex-start",
          maxWidth: "67%",
          flexGrow: 0,
          flexShrink: 1,
          mx: "auto",
        }}
      >
        <Button
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 500,
            fontSize: "80%",
            textTransform: "none",
            px: 6,
            py: 1,
            background: "transparent",
            border: `1px solid ${secondColor}`,
            borderRadius: "87px",
            mb: 2.5,
          }}
        >
          Приложение
        </Button>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", mb: -1 }}>
            <Typography
              sx={{
                fontFamily: font,
                color: firstColor,
                fontWeight: 700,
                fontSize: "230%",
                mr: 1.5,
              }}
            >
              Не только
            </Typography>
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 700,
                fontSize: "230%",
              }}
            >
              мобильное
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 700,
              fontSize: "230%",
            }}
          >
            но и десктопное
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#222324",
            minWidth: { xs: "90%", md: "100%" },
            maxWidth: { xs: "90%", md: "100%" },
            minHeight: "400px",
            borderRadius: "3px",
            mb: 5,
            display: { xs: "block", md: "flex" },
            justifyContent: { xs: "flex-start", md: "space-between" },
          }}
        >
          <Box sx={{ ml: 2, display: "flex", alignItems: "center" }}>
            <List dense>
              {steps.map((step) => (
                <ListItem
                  key={step}
                  sx={{
                    mx: { xs: "auto", md: 0 },
                    mt: { xs: 1, md: 0 },
                  }}
                >
                  <Box
                    sx={{
                      fontFamily: font,
                      background: firstColor,
                      borderRadius: "30px",
                      fontWeight: 600,
                      width: "2rem",
                      height: "2rem",
                      textAlign: "center",
                      lineHeight: "2rem",
                      mr: 2,
                      my: 2,
                    }}
                  >
                    {steps.indexOf(step) + 1}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: font,
                      color: secondColor,
                      fontWeight: 600,
                      fontSize: ".9rem",
                      maxWidth: "70%",
                    }}
                  >
                    {step}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 2, md: 5 },
            }}
          >
            <img src={stepsImg} style={{ maxWidth: "100%" }} alt="" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
