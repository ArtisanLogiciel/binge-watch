import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
//import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
//import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function BingeNavBar() {
  const [auth, setAuth] = React.useState(true);
  const [appBarStyle, setAppBarStyle] = React.useState({
    background: "transparent",
    boxShadow: "none",
  });
  const margin10 = { margin: 10 };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement.scrollTop > 100) {
        setAppBarStyle({
          background: "#111",
          transition: "background .5s ease-out",
          boxShadow: "none",
        });
      } else {
        setAppBarStyle({
          background: "transparent",
          transition: "background .5s ease-out",
          boxShadow: "none",
        });
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div>
      <AppBar style={appBarStyle}>
        <Toolbar>
          <img
            className="navBar__logo"
            src="src/assets/BingeLogo.png"
            alt="Logo"
          />
          <Link to="/">
            <Typography style={margin10} variant="h6">
              Accueil
            </Typography>
          </Link>
          <Link to="/series">
            <Typography style={margin10} variant="h6">
              Séries
            </Typography>
          </Link>
          <Link to="/movies">
            <Typography style={margin10} variant="h6">
              Films
            </Typography>
          </Link>
          <Link to="/news">
            <Typography style={margin10} variant="h6">
              Animes
            </Typography>
          </Link>
          <Link to="/logged">
            <Typography style={margin10} variant="h6">
              Logged
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
{/*
              <SearchIcon />
*/}
            </SearchIconWrapper>
            <StyledInputBase
              // onKeyDown={}
              // onChange={}
              value="Search"
              placeholder="Rechercher"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div style={{ marginRight: "10px", marginLeft: "auto" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
{/*
              <AccountCircle />
*/}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default BingeNavBar;
