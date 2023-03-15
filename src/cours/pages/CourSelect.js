import React from "react";
import { useParams, useLocation } from "react-router-dom";
import ListeEtudiants from "../../etudiants/components/ListeEtudiants";
import NouveauEtudiant from "../components/NouveauEtudiant";

function CourSelect({ cours, setCours }) {
  const idCours = useParams().idCours;
  const cour = cours.find((c) => c.id === idCours);

  function ajouterEtudiant(nouvelEtudiant) {
    const updatedCours = cours.map((c) => {
      if (c.id === idCours) {
        return { ...c, etudiants: [...c.etudiants, nouvelEtudiant] };
      }
      return c;
    });

    setCours(updatedCours);
  }

  return (
    <React.Fragment>
      <ListeEtudiants etudiants={cour.etudiants} />
      <NouveauEtudiant ajouterEtudiant={ajouterEtudiant} />
    </React.Fragment>
  );
}

export default CourSelect;
