import React from "react";
import ListeProfs from "../components/ListeProfs";
import NouveauProf from "../components/NouveauProf";

function Profs({ profs }) {
  function ajouterProf(nouveauProf) {
    profs.setProfs(profs.concat(nouveauProf));
    console.log(profs);
  }

  return (
    <React.Fragment>
      <ListeProfs profs={profs} />
      <NouveauProf methodeAjouterProf={ajouterProf} />
    </React.Fragment>
  );
}

export default Profs;
