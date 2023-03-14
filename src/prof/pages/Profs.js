import React, { useState } from "react";
import ListeProfs from "../components/ListeProfs";
import NouveauProf from "../components/NouveauProf";

function Profs() {
  var defaultImage =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F157-1578186_user-profile-default-image-png-clipart.png&f=1&nofb=1&ipt=43bbb9448ee33cb8d0045e45c010ad282a8b74dafe2cee5fae738d6b65ec1eca&ipo=images";
  const [profs, setProfs] = useState([
    {
      id: "u1",
      nom: "Sylvain Labranche",
      image: defaultImage,
    },
  ]);

  function ajouterProf(nouveauProf) {
    setProfs(profs.concat(nouveauProf));
    console.log(profs);
  }

  return (
    <React.Fragment>
      <ListeProfs profs={profs} />
      <NouveauProf methodeAjouterProf={ajouterProf} />
    </React.Fragment>
  );
}

export default Profs;
