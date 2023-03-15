import React, { useState } from "react";
import defaultImage from "./default_user.png";

function NouveauProf({ methodeAjouterProf, cours }) {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [photo, setPhoto] = useState("defaultImage");
  const [dateEmbauche, setDateEmbauche] = useState("");
  const [selectedCours, setSelectedCours] = useState([]);

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
      cours: selectedCours,
    };

    methodeAjouterProf(nouveauProf);
    setPrenom("");
    setNom("");
    setPhoto("");
    setDateEmbauche("");
    setSelectedCours([]);
  }

  function toggleCourse(courseId) {
    if (selectedCours.includes(courseId)) {
      setSelectedCours(selectedCours.filter((id) => id !== courseId));
    } else {
      setSelectedCours([...selectedCours, courseId]);
    }
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

      <input type="file" accept="image/*" onChange={photoHandler} /> Photo <br />
      {cours.map((course) => (
        <label key={course.id}>
          <input
            type="checkbox"
            checked={selectedCours.includes(course.id)}
            onChange={() => toggleCourse(course.id)}
          />
          {course.titre}
        </label>
      ))}
      <br />
      <input type="date" value={dateEmbauche} onChange={dateEmbaucheHandler} /> Date d'embauche <br />
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default NouveauProf;
