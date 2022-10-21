import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import UserMenu from "./UserMenu";

function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [appBarStyle, setAppBarStyle] = React.useState({
    background: "transparent",
    boxShadow: "none",
  });
  const margin50 = { margin: 50, marginLeft: 15 };
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

  return (
    <div className="flex mb-10 bg-dark-navy pb-1 -mt-3 flex-col lg:flex-row lg:justify-start lg:items-center">
      <div className="mx-auto mb-6 lg:mx-0 lg:mb-0">
        <img
          className="navBar__logo mr-20 h-15"
          src="/images/BingeLogo.png"
          alt="Logo"
        />
      </div>
      <nav className="flex flex-wrap justify-center lg:justify-start lg:items-center">
        <div className="flex justify-center items-center mr-8">
          <img src="\icons\home-6-16.png" alt="icon" />
          <Link to="/">
            <Typography style={margin50} variant="h7">
              ACCUEIL
            </Typography>
          </Link>
        </div>
        <div className="flex justify-center items-center mr-8">
          <img src="\icons\magnifying_glass.png" alt="icon" />
          <Link to="/search">
            <Typography style={margin50} variant="h7">
              RECHERCHE
            </Typography>
          </Link>
        </div>
        <div className="flex justify-center items-center mr-8">
          <img src="\icons\tv-16.png" alt="icon" />
          <Link to="/series">
            <Typography style={margin50} variant="h7">
              SERIES
            </Typography>
          </Link>
        </div>
        <div className="flex justify-center items-center mr-8">
          <img src="\icons\film-reel-16.png" alt="icon" />
          <Link to="/movies">
            <Typography style={margin50} variant="h7">
              FILMS
            </Typography>
          </Link>
        </div>
{/*        <div className="flex justify-center items-center mr-8">
          <img src="\icons\fire-16.png" alt="icon" />
          <Link to="/">
            <Typography style={margin50} variant="h7">
              ANIMES
            </Typography>
          </Link>
        </div>*/}
        
        <div className={`flex-1`}/>
        
        <UserMenu />

      </nav>
    </div>
  );
}

export default NavBar;

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// React.useEffect(() => {
//   const onScroll = (e) => {
//     if (e.target.documentElement.scrollTop > 100) {
//       setAppBarStyle({
//         background: "#111",
//         transition: "background .5s ease-out",
//         boxShadow: "none",
//       });
//     } else {
//       setAppBarStyle({
//         background: "transparent",
//         transition: "background .5s ease-out",
//         boxShadow: "none",
//       });
//     }
//   };
//   window.addEventListener("scroll", onScroll);

//   return () => window.removeEventListener("scroll", onScroll);
// });

/*{
  <AppBar className="bg-dark-navy" style={appBarStyle}>
  <Toolbar className="bg-dark-navy" >
    <img
      className="navBar__logo"
      src="public/images/BingeLogo.png"
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
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        // onKeyDown={}
        // onChange={}
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
        <AccountCircle />
      </IconButton>
    </div>
  </Toolbar>
</AppBar>
}

export default BingeNavBar;*/
