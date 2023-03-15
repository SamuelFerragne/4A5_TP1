import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/Card";

import "./Cour.css";

function Cour({ cour }) {
  return (
    <li className="cour-item">
      <Card className="cour-item__content">
        <Link to={`cours/${cour.id}/`}>
          <div className="cour-item__info">
            <h3>{cour.titre}</h3>
            <ul>
              <li>discipline: {cour.discipline}</li>
              <li>Nombre de places maximum: {cour.placesMax}</li>
              <li>Date de début: {cour.dateDebut}</li>
              <li>Date de fin: {cour.dateFin}</li>
              <li>Nom du professeur: {cour.prof}</li>
            </ul>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default Cour;
