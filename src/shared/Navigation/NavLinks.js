import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink to="/cours">Cours</NavLink>
      </li>
      <li>
        <NavLink to="/profs">Profs</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
