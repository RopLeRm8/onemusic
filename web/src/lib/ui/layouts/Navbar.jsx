import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Paper,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useState } from "react";
import logo from "../../../assets/Global/logo.svg";
import {
  useGetGlobalValues,
  useGetNavbarLinks,
} from "../../hooks/useDataHandling";
import { useRenderLabel } from "../../hooks/useNavbarHandlers";

export default function Navbar() {
  const pages = useGetNavbarLinks();
  const { firstColor, secondColor, font } = useGetGlobalValues();
  const [selectedValue, setSelectedValue] = useState("");
  const renderLabelHandler = useRenderLabel();
  const handleNavChange = (_, newValue) => {
    setSelectedValue(newValue);
  };
  const renderLabel = (label) => {
    return renderLabelHandler(label, selectedValue, firstColor, secondColor);
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: "71%",
        maxWidth: "2120px",
        minWidth: "68.5%",
        mx: "auto",
        bgcolor: "transparent",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          position: "relative",
          width: "clamp(100%, 50vw, 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <a href="/">
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                maxWidth: { xs: "100%", md: "80%" },
                my: 5,
              }}
            >
              <img
                src={logo}
                style={{
                  width: "80%",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                height="32"
                alt=""
              />
            </Box>
          </a>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            mt: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="" style={{ maxWidth: "80%" }} />
          </Box>
          <Paper
            sx={{
              position: "fixed",
              bottom: -1,
              left: 0,
              right: 0,
              zIndex: 30000,
            }}
            elevation={3}
          >
            <BottomNavigation
              showLabels
              sx={{
                background: "black",
                height: "9dvh",
                alignItems: "center",
              }}
              value={selectedValue}
              onChange={handleNavChange}
            >
              {pages.map((page) => (
                <BottomNavigationAction
                  key={page.label}
                  label={renderLabel(page.label)}
                  value={page.label}
                  sx={{
                    mb: 0.5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: secondColor,
                    ".MuiBottomNavigationAction-label": {
                      fontFamily: font,
                      fontWeight: 600,
                      fontSize: "0.55rem",
                    },
                    "&.Mui-selected": {
                      color: firstColor,
                      ".MuiBottomNavigationAction-label": {
                        fontSize: "0.55rem",
                      },
                      "& .MuiBottomNavigationAction-icon": {
                        color: firstColor,
                      },
                    },
                  }}
                  icon={page.icon}
                />
              ))}
            </BottomNavigation>
          </Paper>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            maxHeight: "100%",
          }}
        >
          {pages.map((page) => (
            <Box
              key={page.label}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Button
                variant="text"
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontFamily: font,
                  my: 2,
                  ml: 3,
                  px: { lg: 1.5 },
                  color: secondColor,
                  position: "relative",
                  "&:hover": {
                    color: firstColor,
                  },
                  // "&::after": {
                  //   content: "''",
                  //   position: "absolute",
                  //   width: "100%",
                  //   height: "1px",
                  //   bottom: 0,
                  //   left: 0,
                  //   backgroundColor: "white",
                  //   visibility:
                  //     location.pathname === page[4] ? "visible" : "hidden",
                  //   transform:
                  //     location.pathname === page[4] ? "scaleX(1)" : "scaleX(0)",
                  //   transition: "all 0.3s ease-in-out",
                  // },
                  // "&:hover::after": {
                  //   visibility: "visible",
                  //   transform: "scaleX(1)",
                  // },
                  // "&.active::after": {
                  //   height: "100%",
                  //   borderRadius: "2px",
                  //   transformOrigin: "center",
                  // },
                  fontSize: "80%",
                  fontWeight: 500,
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {page.label}
              </Button>
              {page.label === "О нас" ? (
                <Divider
                  key={page.color}
                  orientation="vertical"
                  sx={{
                    background: firstColor,
                    py: 1.5,
                    ml: 3,
                  }}
                />
              ) : null}
            </Box>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
}
