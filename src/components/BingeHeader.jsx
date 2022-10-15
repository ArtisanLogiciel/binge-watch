import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import BingeNavBar from "./BingeNavBar";
import "./BingeWatch.css";

const BingeHeader = () => {
  return (
    <div className="banner">
      {/* <div className="banner__contents">
        <h1 className="banner__title">Le parrain</h1>
        <h1 className="synopsis">
          La Seconde Guerre mondiale vient de s'achever. À New York, le «
          parrain » Don Corleone, l'un des chefs respectés de la mafia, se sent
          vieillir. Il refuse
        </h1>
      </div> */}
      {/* <div className="banner__fadeLeft"></div> */}
      <div
        className="banner__image"
        // style={{ backgroundImage: "../assets/images/casa-de-papel.jpeg" }}
      ></div>
    </div>
  );
};

export default BingeHeader;
