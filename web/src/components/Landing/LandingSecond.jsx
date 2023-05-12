import { Box, Button, Chip, List, ListItem, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import rect from "../../assets/Landing/rect.svg";
import stepsImg from "../../assets/Landing/steps.png";
import x_1 from "../../assets/Landing/x_1.svg";
import x_2 from "../../assets/Landing/x_2.svg";
import useGetSteps from "../../hooks/useGetSteps";
import { MainContext } from "../../providers/RouteProvider";
export default function LandingSecond() {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const x1Img = useRef();
  const x2Img = useRef();
  const rectImg = useRef();
  useEffect(() => {
    const scrollListen = window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;

      const rotationAngle = scrollPosition * 0.1;
      const scrollDirection =
        scrollPosition > lastScrollPosition ? "down" : "up";
      if (!x1Img.current || !x2Img.current || !rectImg.current) return;
      if (scrollDirection === "down") {
        x1Img.current.style.transform = `rotate(-${rotationAngle}deg)`;
        x2Img.current.style.transform = `rotate(-${rotationAngle}deg)`;
        rectImg.current.style.transform = `rotate(-${rotationAngle}deg)`;
      } else {
        x1Img.current.style.transform = `rotate(${rotationAngle}deg)`;
        x2Img.current.style.transform = `rotate(${rotationAngle}deg)`;
        rectImg.current.style.transform = `rotate(${rotationAngle}deg)`;
      }

      setLastScrollPosition(scrollPosition);
    });
    return () => {
      document.removeEventListener("scroll", scrollListen);
    };
  }, []);
  const MainContextVal = useContext(MainContext);
  const firstColor = MainContextVal.colors[0];
  const secondColor = MainContextVal.colors[1];
  const font = MainContextVal.fonts[0];
  const steps = useGetSteps();
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
        <Box
          sx={{
            display: "flex",
            mb: 2,
          }}
        >
          <>
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
          </>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              opacity: { xs: 0.35, md: 1 },
            }}
          >
            <img
              src={x_2}
              alt=""
              style={{
                position: "absolute",
                right: "10%",
                top: "-20px",
                zIndex: -1,
                userSelect: "none",
              }}
              ref={x2Img}
            />
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 600,
              fontSize: "100%",
              whiteSpace: "pre-line",
              width: { xs: "100%", md: "50%" },
              mb: 2,
            }}
          >
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              opacity: { xs: 0.35, md: 1 },
            }}
          >
            <img
              src={x_1}
              alt=""
              style={{
                position: "absolute",
                right: "30%",
                top: "45px",
                zIndex: -1,
                userSelect: "none",
              }}
              ref={x1Img}
            />
            <img
              src={rect}
              alt=""
              style={{
                position: "absolute",
                right: "0%",
                top: "-60px",
                zIndex: -1,
                userSelect: "none",
              }}
              ref={rectImg}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 600,
              fontSize: "100%",
              whiteSpace: "pre-line",
              width: { xs: "100%", md: "50%" },
            }}
          >
            текста рыбы на русском языке, а начинающему оратору отточить навык
            публичных выступлений в домашних условиях. При создании генератора
            мы использовали небезизвестный универсальный.
          </Typography>
        </Box>
        <Box sx={{ mt: 7, mb: -2 }}>
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
                display: { xs: "none", md: "flex" },
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
              display: { xs: "flex", md: "none" },
            }}
          >
            среди
          </Typography>
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
        <Box sx={{ display: "block", mr: { xs: 3.5, md: 0 } }}>
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
            mb: 1.5,
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
                display: { xs: "none", md: "flex" },
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
              mt: 0.5,
              display: { xs: "flex", md: "none" },
            }}
          >
            мобильное
          </Typography>
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
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "400px",
            borderRadius: "3px",
            mb: 10,
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
            mb: 2,
          }}
        >
          HipHop x Rap
        </Button>
        <Typography
          sx={{
            fontFamily: font,
            color: firstColor,
            fontWeight: 700,
            fontSize: "230%",
            mb: 0.5,
          }}
        >
          Топ исполнителей
        </Typography>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 600,
            fontSize: "110%",
          }}
        >
          Любимые артисты слушателей за последний месяц
        </Typography>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 500,
            fontSize: "80%",
            opacity: 0.5,
            mb: 3,
          }}
        >
          Статистика согласно количеству прослушиваний
        </Typography>
        <Box sx={{ display: { xs: "block", md: "flex" }, mb: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              background: "#222324",
              minWidth: { xs: "90%", md: "32.2%" },
              maxWidth: { xs: "90%", md: "32.2%" },
              minHeight: "450px",
              maxHeight: "450px",
              borderRadius: "3px",
              mr: 4,
              mb: { xs: 3, md: 0 },
            }}
          >
            <Box sx={{ marginBottom: "auto" }}>
              <Chip
                label="ТОП #1 в этом месяце"
                variant="outlined"
                sx={{
                  background: "transparent",
                  fontFamily: font,
                  color: secondColor,
                  border: `2px solid ${firstColor}`,
                  m: { xs: 1, lg: 2 },
                }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 700,
                fontSize: "180%",
                ml: 2,
              }}
            >
              ARTIST 1
            </Typography>
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 600,
                fontSize: "80%",
                ml: 2,
                mb: 1.5,
                mt: -0.5,
              }}
            >
              500,000 слушателей за месяц
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              background: "#222324",
              minWidth: { xs: "90%", md: "32.2%" },
              maxWidth: { xs: "90%", md: "32.2%" },
              minHeight: "450px",
              maxHeight: "450px",
              borderRadius: "3px",
              mr: 4,
            }}
          >
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 700,
                fontSize: "180%",
                ml: 2,
              }}
            >
              ARTIST 2
            </Typography>
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 600,
                fontSize: "80%",
                ml: 2,
                mb: 1.5,
                mt: -0.5,
              }}
            >
              300,000 слушателей за месяц
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              background: "#222324",
              minWidth: { xs: "90%", md: "32.2%" },
              maxWidth: { xs: "90%", md: "32.2%" },
              minHeight: "450px",
              maxHeight: "450px",
              borderRadius: "3px",
              mr: 4,
            }}
          >
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 700,
                fontSize: "180%",
                ml: 2,
              }}
            >
              ARTIST 3
            </Typography>
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 600,
                fontSize: "80%",
                ml: 2,
                mb: 1.5,
                mt: -0.5,
              }}
            >
              100,000 слушателей за месяц
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
