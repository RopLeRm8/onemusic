import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { createContext } from "react";
import logo from "../../../assets/Global/logo.svg";
import { useGetNavbarPages } from "../../hooks/useDataHandling";
import DesktopNavbar from "../customElements/DesktopNavbar";
import PhoneNavbar from "../customElements/PhoneNavbar";

export const NavBarsProvider = createContext();

export default function Navbar() {
  const pages = useGetNavbarPages();

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
        <NavBarsProvider.Provider
          value={{
            pages: pages,
            logo: logo,
          }}
        >
          <DesktopNavbar />
          <PhoneNavbar />
        </NavBarsProvider.Provider>
      </Container>
    </AppBar>
  );
}
