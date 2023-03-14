import React from "react";
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
import CoursChargee from "./cours/pages/CoursChargee";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Accueil />
          </Route>
          <Route path="/profs" exact>
            <Profs />
          </Route>
          <Route path="/cours" exact>
            <Cours />
          </Route>
          <Route path="/cours/:idCours" exact>
            <CoursChargee />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
