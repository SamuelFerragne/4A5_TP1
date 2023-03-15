import React from "react";
import "./ListeEtudiants.css";
import Card from "../../shared/Card";
import Etudiant from "./Etudiant";

function ListeEtudiants(props) {
  if (props.etudiants.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun étudiants</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="etudiants-list">
      {props.etudiants.map((etudiant) => (
        <Etudiant key={etudiant.numero} etudiant={etudiant} />
      ))}
    </ul>
  );
}

export default ListeEtudiants;
