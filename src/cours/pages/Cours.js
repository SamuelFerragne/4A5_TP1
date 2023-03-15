import React from "react";
import NouveauCours from "../components/NouveauCours";

import ListeCours from "../components/ListeCours";

  
  function Cours({ cours, profs, ajouterCoursEtMettreAJourProfs}) {
    return (
      <React.Fragment>
      <NouveauCours ajouterCours={ajouterCoursEtMettreAJourProfs} profs={profs}/>
      <ListeCours cours={cours} />
      </React.Fragment>
    
    );
  }


export default Cours;
