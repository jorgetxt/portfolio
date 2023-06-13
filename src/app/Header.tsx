"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useTranslation } from "react-i18next";

import { ThemesName } from "../components/Theme";
import { ThemeContext } from "../components/ThemeContext";

interface OptionsObject {
  name: string;
  key: string;
  image: string;
}

interface OptionsObjectTheme {
  name: string;
  key: ThemesName;
  image: string;
}

const pages = ["Products", "Pricing", "Blog"];
const languages: OptionsObject[] = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
    key: "es",
    name: "Español",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
    key: "en",
    name: "English",
  },
];

const themes: OptionsObjectTheme[] = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
    key: "dark",
    name: "Oscuro",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg",
    key: "light",
    name: "Claro",
  },
];

function ResponsiveAppBar() {
  const themeContext = React.useContext(ThemeContext);

  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElLanguage, setAnchorElLanguage] =
    React.useState<null | HTMLElement>(null);

  const [anchorElTheme, setAnchorElTheme] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleOpenThemeMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTheme(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseLanguageMenu = (key: string) => {
    changeLanguage(key);
    setAnchorElLanguage(null);
  };

  const handleCloseThemeMenu = () => {
    setAnchorElTheme(null);
  };

  const handleChooseThemeMenu = (key: ThemesName) => {
    themeContext.setTheme(key);
    setAnchorElTheme(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JHP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open languages" style={{ marginRight: 8 }}>
              <IconButton onClick={handleOpenLanguageMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={languages.find(({ key }) => key === language)?.image}
                  sx={{ width: 24, height: 24 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElLanguage}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElLanguage)}
              onClose={handleCloseLanguageMenu}
            >
              {languages.map(({ image, key, name }) => (
                <MenuItem
                  key={key}
                  onClick={() => handleCloseLanguageMenu(key)}
                >
                  <Avatar
                    alt={name}
                    src={image}
                    sx={{ width: 24, height: 24, margin: 1 }}
                  />
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>

            <Tooltip title="Open temas">
              <IconButton onClick={handleOpenThemeMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={
                    themes.find(({ key }) => key === themeContext.theme)?.image
                  }
                  sx={{ width: 24, height: 24 }}
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar-2"
              anchorEl={anchorElTheme}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElTheme)}
              onClose={handleCloseThemeMenu}
            >
              {themes.map(({ image, key, name }) => (
                <MenuItem key={key} onClick={() => handleChooseThemeMenu(key)}>
                  <Avatar
                    alt={name}
                    src={image}
                    sx={{ width: 24, height: 24, margin: 1 }}
                  />
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
