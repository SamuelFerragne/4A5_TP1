import React from "react";
import "./ListeProfs.css";
import Prof from "./Prof";
import Card from "../../shared/Card";

function ListeProfs(props) {
  if (props.profs.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun utilisateur</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="profs-list">
      {props.profs.map((prof) => (
        <Prof key={prof.nom} prof={prof} />
      ))}
    </ul>
  );
}

export default ListeProfs;
