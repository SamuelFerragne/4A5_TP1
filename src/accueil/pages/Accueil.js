import React from "react";
import Fonctionalites from "../components/Fonctionalites.js";

import Logo from "../components/Logo.js";

function Accueil() {
  return (
    <React.Fragment>
      <Logo />
      <h2>Bienvenue au Collège Montmorency!</h2>
      <Fonctionalites />
    </React.Fragment>
  );
}

export default Accueil;
