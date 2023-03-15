import React from "react";
import NouveauCours from "../components/NouveauCours";

import ListeCours from "../components/ListeCours";

  
  function Cours({ cours, setCours, profs, setProfs}) {
    function ajouterCours(nouveauCours) {
      const updatedCours = [
        ...cours,
        {
          ...nouveauCours,
          prof: "",
          etudiants: [],
        },
      ];
  
      setCours(updatedCours);
    }
    return (
      <React.Fragment>
      <NouveauCours ajouterCours={ajouterCours} profs={profs} setProfs={setProfs}/>
      <ListeCours cours={cours} />
      </React.Fragment>
    
    );
  }


export default Cours;
