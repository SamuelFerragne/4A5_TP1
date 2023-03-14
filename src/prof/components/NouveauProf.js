import React, { useState } from "react";

function NouveauProf({ methodeAjouterProf }) {
  const [saisie, setSaisie] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [photo, setPhoto] = useState("");

  function ajouterNouveauProfHandler(event) {
    event.preventDefault();
    const nouveauProf = {
      id: "12",
      nom: nom,
      prenom: prenom,
      photo: photo,
    };

    if (saisie === "") {
      alert("Veuillez entrer un objectif");
      return;
    }
    methodeAjouterProf(nouveauProf);
    setPrenom("");
    setNom("");
  }

  function nomHandler(event) {
    if (event.taget.value.length === 0) {
      alert("Entrez un nom");
      return;
    }

    setNom(event.target.value);
  }

  function prenomHandler(event) {
    if (event.taget.value.length === 0) {
      alert("Entrez un nom");
      return;
    }

    setNom(event.target.value);
  }

  function saisieHandler(event) {
    if (event.target.value.includes("f")) {
      alert("f impossible");
      return;
    }
    setSaisie(event.target.value);
  }

  return (
    <form onSubmit={ajouterNouveauProfHandler}>
      <input type="text" value={prenom} onChange={prenomHandler} /> Prenom{" "}
      <br />
      <input type="text" value={nom} onChange={nomHandler} /> Nom <br />
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default NouveauProf;
