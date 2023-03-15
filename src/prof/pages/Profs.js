import React from "react";
import ListeProfs from "../components/ListeProfs";
import NouveauProf from "../components/NouveauProf";


function Profs({ profs, setProfs, cours }) {
  function ajouterProf(nouveauProf) {
    setProfs(profs.concat(nouveauProf));
  }

  return (
    <React.Fragment>
      <ListeProfs profs={profs} />
      <NouveauProf methodeAjouterProf={ajouterProf} cours={cours}/>
    </React.Fragment>
  );
}

export default Profs;
