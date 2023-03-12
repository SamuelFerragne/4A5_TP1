import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop";

import "./MainNavigation.css";

function MainNavigation(props) {
  const [tiroirOuvert, setTiroirOuvert] = useState(false);

  const ouvrirTiroir = () => {
    setTiroirOuvert(true);
  };

  const fermerTiroir = () => {
    setTiroirOuvert(false);
  };

  return (
    <React.Fragment>
      {tiroirOuvert && <Backdrop onClick={fermerTiroir} />}
      <SideDrawer show={tiroirOuvert} onClick={fermerTiroir}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={ouvrirTiroir}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Accueil</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
