import React from "react";

import Card from "../../shared/Card";

function Etudiant({ etudiant }) {
  return (
    <li className="etudiant-item">
      <Card>
        <h2>{etudiant.prenom + " " + etudiant.nom}</h2>
        <h3>{etudiant.numero}</h3>
      </Card>
    </li>
  );
}

export default Etudiant;
