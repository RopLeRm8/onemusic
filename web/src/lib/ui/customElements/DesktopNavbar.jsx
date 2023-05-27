import { Box, Button, Divider } from "@mui/material";
import { useContext } from "react";
import { useGetGlobalValues } from "../../hooks/useDataHandling";
import { NavBarsProvider } from "../layouts/Navbar";

export default function DesktopNavbar() {
  const NavbarProvider = useContext(NavBarsProvider);
  const { firstColor, secondColor, font } = useGetGlobalValues();
  const logo = NavbarProvider.logo;
  const pages = NavbarProvider.pages;

  return (
    <>
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
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          maxHeight: "100%",
        }}
      >
        {pages.map((page) => (
          <Box key={page.label} sx={{ display: "flex", alignItems: "center" }}>
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
    </>
  );
}
