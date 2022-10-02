import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

function Button({onClick, className, children}) {
    
  return (
      <div className={`bg-binge p-4 rounded uppercase ${className}`} role={'Button'} onClick={onClick}>
          {children}
      </div>
  )
}

function NavBar() {
  const margin10 = { margin: 10 };
  const [appBarStyle, setAppBarStyle] = React.useState({
    background: "transparent",
    boxShadow: "none",
  });

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
      <Button />
      <AppBar style={appBarStyle}>
        <Toolbar>
          <Link to="/">
            <Typography style={margin10} variant="h6">
              Accueil
            </Typography>
          </Link>
          <Link to="/series">
            <Typography style={margin10} variant="h6">
              Serie
            </Typography>
          </Link>
          <Link to="/movies">
            <Typography style={margin10} variant="h6">
              Films
            </Typography>
          </Link>
          <Link to="/news">
            <Typography style={margin10} variant="h6">
              Nouveautés les plus regardées
            </Typography>
          </Link>
          <Link to="/logged">
            <Typography style={margin10} variant="h6">
              Logged
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
