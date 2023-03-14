import React from "react";

import ListeCours from "../components/ListeCours";

function Cours() {
  const COURS = [
    {
      id: "webLabranche",
      titre: "Web et base de données",
      discipline: "Informatique",
      placesMax: 20,
      dateDebut: "01-01-2023",
      dateFin: "06-06-2023",
      prof: "Sylvain-Labranche",
    },
  ];

  return <ListeCours cours={COURS} />;
}

export default Cours;
