import React, { useState } from "react";

function NouveauProf({ methodeAjouterProf }) {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [photo, setPhoto] = useState("");
  const [dateEmbauche, setDateEmbauche] = useState("");

  function ajouterNouveauProfHandler(event) {
    event.preventDefault();

    if (!prenom || !nom || !photo || !dateEmbauche) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const nouveauProf = {
      id: "12",
      nom: nom,
      prenom: prenom,
      photo: photo,
      dateEmbauche: dateEmbauche,
    };

    methodeAjouterProf(nouveauProf);
    setPrenom("");
    setNom("");
    setPhoto("");
    setDateEmbauche("");
  }

  function nomHandler(event) {
    setNom(event.target.value);
  }

  function prenomHandler(event) {
    setPrenom(event.target.value);
  }

  function photoHandler(event) {
    setPhoto(event.target.files[0]);
  }

  function dateEmbaucheHandler(event) {
    setDateEmbauche(event.target.value);
  }

  return (
    <form onSubmit={ajouterNouveauProfHandler}>
      <input type="text" value={prenom} onChange={prenomHandler} /> Prénom{" "}
      <br />
      <input type="text" value={nom} onChange={nomHandler} /> Nom <br />
      <input type="file" accept="image/*" onChange={photoHandler} /> Photo{" "}
      <br />
      <input
        type="date"
        value={dateEmbauche}
        onChange={dateEmbaucheHandler}
      />{" "}
      Date d'embauche <br />
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default NouveauProf;
