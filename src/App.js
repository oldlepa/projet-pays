import React from 'react';
import PaysManager from './containers/PaysManager/PaysManager';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import NavBar2 from './components/NavBar/NavBar2';
import UnPays from './containers/UnPays/UnPays';
import Erreur from './components/Erreur/erreur';
import Erreur404 from './components/Erreur/erreur404';
import Accueil from './components/Accueil/Accueil';
import './App.css';

function App(props) {
  const { match } = props;
  console.log(props);
  return (
    <BrowserRouter>
      {/* <Link to="/">Accueil</Link>
      <Link to="/pays">Les pays</Link> 
      <Route path="/pays" component={NavBar} />
      <Route path="/admin" component={NavBar2} />*/}
      <NavBar />
      <Switch>
        <Route path="/" exact render={Accueil} />
        <Route path="/pays" exact component={PaysManager} />
        <Route path="/pays/:id" exact render={(props) => <UnPays {...props}/>} />
        <Route render={() => <Erreur><Erreur404 /></Erreur>} />
        {/* <Route path="/admin" exact component={() => <h2>Page Admin</h2>} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
