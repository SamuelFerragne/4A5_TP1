import React from "react";

import Avatar from "../../shared/Avatar";
import Card from "../../shared/Card";

import "./Prof.css";

function Prof({ prof }) {
  return (
    <li className="prof-item" key={prof.key}>
      <Card className="prof-item__content">
        <div className="prof-item__image">
          <Avatar image={prof.photo} alt={`${prof.prenom} ${prof.nom}`} />
        </div>

        <div className="prof-item__info">
          <h2>
            {prof.prenom} {prof.nom}
          </h2>
          <ul>
            {prof.cours.map((cour) => (
              <li>{cour.titre}</li>
            ))}
          </ul>
        </div>
      </Card>
    </li>
  );
}

export default Prof;
