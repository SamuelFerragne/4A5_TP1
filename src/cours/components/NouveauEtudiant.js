import React, { useState } from "react";

function NouveauEtudiant({ ajouterEtudiant }) {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [numero, setNumero] = useState("");

  function ajouterEtudiantHandler(event) {
    event.preventDefault();

    if (prenom === "" || nom === "" || numero === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const etudiant = {
      prenom: prenom,
      nom: nom,
      numero: numero,
    };

    ajouterEtudiant(etudiant);
    setPrenom("");
    setNom("");
    setNumero("");
  }

  return (
    <form onSubmit={ajouterEtudiantHandler}>
      <input
        type="text"
        value={prenom}
        onChange={(event) => setPrenom(event.target.value)}
        placeholder="Prénom"
      />
      <br />
      <input
        type="text"
        value={nom}
        onChange={(event) => setNom(event.target.value)}
        placeholder="Nom"
      />
      <br />
      <input
        type="text"
        value={numero}
        onChange={(event) => setNumero(event.target.value)}
        placeholder="Numéro"
      />
      <br />
      <button type="submit">Ajouter un étudiant</button>
    </form>
  );
}

export default NouveauEtudiant;
