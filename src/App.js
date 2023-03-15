import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Accueil from "./accueil/pages/Accueil";
import Profs from "./prof/pages/Profs";
import Cours from "./cours/pages/Cours";
import MainNavigation from "./shared/Navigation/MainNavigation";
import CourSelect from "./cours/pages/CourSelect";

function App() {
  const [COURS, setCours] = useState([
    {
      id: "webLabranche",
      titre: "Web et base de données",
      discipline: "Informatique",
      placesMax: 20,
      dateDebut: "01-01-2023",
      dateFin: "06-06-2023",
      prof: "Sylvain Labranche",
      etudiants: [
        { prenom: "Samuel", nom: "Ferragne", numero: "FERS0123456" },
        { prenom: "Liam", nom: "Brouillard", numero: "BROL0123456" },
      ],
    },
    {
      id: "environnementBergeron",
      titre: "Environnement graphique client/serveur",
      discipline: "Informatique",
      placesMax: 20,
      dateDebut: "01-01-2023",
      dateFin: "06-06-2023",
      prof: "Mathieu Bergeron",
      etudiants: [
        { prenom: "Samuel", nom: "Ferragne", numero: "FERS0123456" },
        { prenom: "Liam", nom: "Brouillard", numero: "BROL0123456" },
      ],
    },
    {
      id: "objetDeschenes",
      titre: "Objets connectés",
      discipline: "Informatique",
      placesMax: 20,
      dateDebut: "01-01-2023",
      dateFin: "06-06-2023",
      prof: "Simon Deschenes",
      etudiants: [
        { prenom: "Samuel", nom: "Ferragne", numero: "FERS0123456" },
        { prenom: "Liam", nom: "Brouillard", numero: "BROL0123456" },
      ],
    },
  ]);

  var defaultImage =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F157-1578186_user-profile-default-image-png-clipart.png&f=1&nofb=1&ipt=43bbb9448ee33cb8d0045e45c010ad282a8b74dafe2cee5fae738d6b65ec1eca&ipo=images";

  const [PROFS, setProfs] = useState([
    {
      prenom: "Sylvain",
      nom: "Labranche",
      photo: defaultImage,
      dateEmbauche: "",
      cours: [],
    },
  ]);

  PROFS[0].cours = COURS.filter((cour) => cour.prof.includes(PROFS[0].nom));

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Accueil />
          </Route>
          <Route path="/profs" exact>
            <Profs profs={PROFS} setProfs={setProfs} cours={COURS}/>
          </Route>
          <Route path="/cours" exact>
            <Cours cours={COURS} setCours={setCours} profs={PROFS} setProfs={setProfs}/>
          </Route>
          <Route path="/cours/:idCours" exact>
            <CourSelect cours={COURS} setCours={setCours} profs={PROFS}/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
