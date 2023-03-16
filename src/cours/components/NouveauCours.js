import React, { useState } from "react";

function NouveauCours({ ajouterCours, profs }) {
  const [titre, setTitre] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [placesMax, setPlacesMax] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [selectedProf, setSelectedProf] = useState("");
  const [newProfPrenom, setNewProfPrenom] = useState("");
  const [newProfNom, setNewProfNom] = useState("");

  function ajouterCoursHandler(event) {
    event.preventDefault();

    if (
      titre === "" ||
      discipline === "" ||
      placesMax === "" ||
      dateDebut === "" ||
      dateFin === "" ||
      (!selectedProf && (newProfPrenom === "" || newProfNom === ""))
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const firstWordTitre = titre.trim().split(" ")[0];
    
    let selectedProfObj;
    if (selectedProf) {
      selectedProfObj = profs.find((prof) => prof.nom === selectedProf.nom);
    } else {
      const currentDate = new Date().toISOString().slice(0, 10);
      selectedProfObj = {
        prenom: newProfPrenom,
        nom: newProfNom,
        photo: "default-image-url.jpg",
        dateEmbauche: currentDate,
        cours: [],
      };
    }
    const coursId = firstWordTitre + selectedProfObj.nom;

    const nouveauCours = {
      id: coursId,
      titre: titre,
      discipline: discipline,
      placesMax: placesMax,
      dateDebut: dateDebut,
      dateFin: dateFin,
      prof: selectedProfObj.prenom + " " + selectedProfObj.nom,
    };
    

    ajouterCours(nouveauCours, !selectedProf);
    setTitre("");
    setDiscipline("");
    setPlacesMax(0);
    setDateDebut("");
    setDateFin("");
    setSelectedProf("");
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
      <select
        value={selectedProf ? selectedProf.nom : ""}
        onChange={(event) => {
          const selectedProf = profs.find((p) => p.nom === event.target.value);
          setSelectedProf(selectedProf);
        }}
        disabled={newProfPrenom !== "" || newProfNom !== ""}
      >
        <option value="">Sélectionnez un professeur</option>
        {profs.map((prof) => (
          <option key={prof.nom} value={prof.nom}>
            {prof.prenom} {prof.nom}
          </option>
        ))}
      </select>
      <br />
      <input
        type="text"
        value={newProfPrenom}
        onChange={(event) => setNewProfPrenom(event.target.value)}
        placeholder="Nouveau professeur prénom"
        disabled={selectedProf}
      />
      <br />
      <input
        type="text"
        value={newProfNom}
        onChange={(event) => setNewProfNom(event.target.value)}
        placeholder="Nouveau professeur nom"
        disabled={selectedProf}
      />
      <br />
      <button type="submit">Ajouter un cours</button>
    </form>
  );
}

export default NouveauCours;
