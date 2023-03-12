import React from "react";
import "./ListeCours.css";
import Cour from "./Cour";
import Card from "../../shared/Card";

function ListeCours(props) {
  if (props.cours.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun cours</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="cours-list">
      {props.cours.map((cour) => (
        <Cour key={cour.id} cour={cour} />
      ))}
    </ul>
  );
}

export default ListeCours;
