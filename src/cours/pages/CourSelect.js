import React from "react";
import { useParams } from "react-router-dom";
import ListeEtudiants from "../../etudiants/components/ListeEtudiants";

function CourSelect({ cours }) {
  const idCours = useParams().idCours;
  var cour = cours.filter((cour) => cour.id === idCours);
  cour = cour[0];
  return (
    <React.Fragment>
      <ListeEtudiants etudiants={cour.etudiants} />
    </React.Fragment>
  );
}

export default CourSelect;
