import React from "react";

function Cours(cours) {
  return (
    <React.Fragment>
      <h2>Bienvenue au Collège Montmorency!</h2>
      <p>{cours.titre}</p>
    </React.Fragment>
  );
}

export default Cours;
