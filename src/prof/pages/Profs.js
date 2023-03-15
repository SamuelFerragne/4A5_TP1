import React, { useState } from "react";
import ListeProfs from "../components/ListeProfs";
import NouveauProf from "../components/NouveauProf";


function Profs({ profs, setProfs }) {
  function ajouterProf(nouveauProf) {
    setProfs(profs.concat(nouveauProf));
  }

  return (
    <React.Fragment>
      <ListeProfs profs={profs} />
      <NouveauProf methodeAjouterProf={ajouterProf} />
    </React.Fragment>
  );
}

export default Profs;
