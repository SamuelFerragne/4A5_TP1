import React, { useState } from "react";

function NouveauProf({ adresseMethode }) {
  const IMPORTANCE_DEFAUT = 5;
  const [saisie, setSaisie] = useState("");

  const [saisieImportance, setSaisieImportance] = useState(IMPORTANCE_DEFAUT);

  function ajouterNouvelObjectifHandler(event) {
    event.preventDefault();
    const nouvelObjectif = {
      id: "12",
      texte: saisie,
      importance: saisieImportance,
    };

    if (saisie === "") {
      alert("Veuillez entrer un objectif");
      return;
    }
    adresseMethode(nouvelObjectif);
    setSaisie("");
    setSaisieImportance(IMPORTANCE_DEFAUT);
  }

  function saisieHandler(event) {
    if (event.target.value.includes("f")) {
      alert("f impossible");
      return;
    }
    setSaisie(event.target.value);
  }

  function saisieImportanceHandler(event) {
    if (isNaN(event.target.value)) {
      alert("Pas un nombre");
      return;
    }

    setSaisieImportance(event.target.value);
  }

  return (
    <form onSubmit={ajouterNouvelObjectifHandler}>
      <input type="text" value={saisie} onChange={saisieHandler} /> Objectif{" "}
      <br />
      <input
        type="text"
        value={saisieImportance}
        onChange={saisieImportanceHandler}
      />{" "}
      Importance <br />
      <button type="submit">Soumettre objectif</button>
    </form>
  );
}

export default NouveauProf;
