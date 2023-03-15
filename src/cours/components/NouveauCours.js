import React, { useState } from "react";

function NouveauCours({ ajouterCours }) {
  const [titre, setTitre] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [placesMax,setPlacesMax ] = useState();
  const [dateDebut,setDateDebut] = useState("");
  const [dateFin,setDateFin] = useState("");

  function ajouterCoursHandler(event) {
    event.preventDefault();

    if (titre === "" || discipline === "" || placesMax === "" || dateDebut === "" || dateFin === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const nouveauCours = {
      titre: titre,
      discipline: discipline,
      placesMax: placesMax,
      dateDebut: dateDebut,
      dateFin: dateFin,
    };

    ajouterCours(nouveauCours);
    setTitre("");
    setDiscipline("");
    setPlacesMax(0);
    setDateDebut("")
    setDateFin("");
  }

  return (
    <form onSubmit={ajouterCoursHandler}>
      <input
        type="text"
        value={titre}
        onChange={(event) => setTitre(event.target.value)}
        placeholder="Titre"
      />
      <br />
      <input
        type="text"
        value={discipline}
        onChange={(event) => setDiscipline(event.target.value)}
        placeholder="Discipline"
      />
      <br />
      <input
        type="number"
        value={placesMax}
        onChange={(event) => setPlacesMax(event.target.value)}
        placeholder="Places maximum"
      />
      <br />
      <input
        type="date"
        value={dateDebut}
        onChange={(event) => setDateDebut(event.target.value)}
        placeholder="Date début"
        />
        <br />
        <input
            type="date"
            value={dateFin}
            onChange={(event) => setDateFin(event.target.value)}
            placeholder="Date fin"
        />
        <br />
      <button type="submit">Ajouter un cours</button>
    </form>
  );
}

export default NouveauCours;
