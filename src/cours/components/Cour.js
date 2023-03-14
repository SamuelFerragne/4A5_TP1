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
            <h2>{cour.titre}</h2>
            <h3>
              {cour.placesMax} {cour.placesMax < 2 ? "place" : "places"} maximum
            </h3>
            <h3>{cour.prof}</h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default Cour;
