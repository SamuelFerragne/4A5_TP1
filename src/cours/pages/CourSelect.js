import React from "react";
import { useParams } from "react-router-dom";

function CourSelect({ cours }) {
  const idCours = useParams().idCours;
  var cour = cours.filter((cour) => cour.id === idCours);
  cour = cour[0];
  return (
    <React.Fragment>
      <h3>{cour.titre}</h3>
      <ul>
        <li>discipline: {cour.discipline}</li>
        <li>Nombre de places maximum: {cour.placesMax}</li>
        <li>Date de début: {cour.dateDebut}</li>
        <li>Date de fin: {cour.dateFin}</li>
        <li>Nom du professeur: {cour.prof}</li>
      </ul>
    </React.Fragment>
  );
}

export default CourSelect;
