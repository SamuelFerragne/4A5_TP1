import React, { useState } from "react";
import ListeProfs from "../components/ListeProfs";
import NouveauProf from "../components/NouveauProf";

function Profs() {
  const [profs, setProfs] = useState([]);

  function ajouterProf(nouveauProf) {
    setProfs((prevProfs) => prevProfs.concat(nouveauProf));
  }

  return (
    <React.Fragment>
      <ListeProfs profs={profs} />
      <NouveauProf methodeAjouterProf={ajouterProf} />
    </React.Fragment>
  );
}

export default Profs;
