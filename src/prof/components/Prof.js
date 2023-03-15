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
          <h2>{prof.prenom} {prof.nom}</h2>
          <h3>{prof.cours}</h3>
        </div>
      </Card>
    </li>
  );
}

export default Prof;
