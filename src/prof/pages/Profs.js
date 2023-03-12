import React from "react";
import ListeProfs from "../components/ListeProfs";
import ListeCours from "../../cours/components/ListeCours";

function Profs() {
  const profs = [
    {
      id: "u1",
      nom: "Sylvain Labranche",
      image:
        "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
      cours: [ListeCours],
    },
  ];
  return <ListeProfs profs={profs} />;
}

export default Profs;
