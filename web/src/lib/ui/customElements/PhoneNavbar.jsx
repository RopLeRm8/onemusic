import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { useContext, useState } from "react";
import { useGetGlobalValues } from "../../hooks/useDataHandling";
import { useRenderLabel } from "../../hooks/useNavbarHandlers";
import { NavBarsProvider } from "../layouts/Navbar";
export default function PhoneNavbar() {
  const [selectedValue, setSelectedValue] = useState("");
  const renderLabelHandler = useRenderLabel();
  const { font, firstColor, secondColor } = useGetGlobalValues();
  const NavbarProvider = useContext(NavBarsProvider);
  const logo = NavbarProvider.logo;
  const pages = NavbarProvider.pages;

  const handleNavChange = (_, newValue) => {
    setSelectedValue(newValue);
  };
  const renderLabel = (label) => {
    return renderLabelHandler(label, selectedValue, firstColor, secondColor);
  };
  return (
    <>
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
            maxWidth: "100%",
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
    </>
  );
}
