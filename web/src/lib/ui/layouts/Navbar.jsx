import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import logo from "../../../assets/Global/logo.svg";
import useGetGlobalValues from "../../hooks/useGetGlobalValues";
import useGetNavbarLinks from "../../hooks/useGetNavbarLinks";
export default function Navbar() {
  const pages = useGetNavbarLinks();
  const { firstColor, secondColor, font } = useGetGlobalValues();
  return (
    <AppBar
      position="static"
      sx={{
        width: "clamp(75% ,  50vw, 75%)",
        mx: "auto",
        bgcolor: "transparent",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="/">
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                maxWidth: "80%",
                my: 5,
              }}
            >
              <img
                src={logo}
                style={{
                  maxWidth: "80%",
                  minWidth: "80%",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                height="32"
                alt=""
              />
            </Box>
          </a>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton sx={{ color: secondColor }} size="small" color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, my: 2, ml: 5 }}>
          <a href="/">
            <img src={logo} height="25" alt="" style={{ maxWidth: "80%" }} />
          </a>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            maxHeight: "100%",
          }}
        >
          {pages.map((page) => (
            <Box key={page[0]} sx={{ display: "flex", alignItems: "center" }}>
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
                {page[0]}
              </Button>
              {page[0] === "О нас" ? (
                <Divider
                  key={page[1]}
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
