import './App.css';
import "fontsource-roboto";
import {Switch, Route} from "react-router-dom";
import Registration from "./components/userAuthorization/registration/Registration";
import Authentication from "./components/userAuthorization/authentication/Authentication"
import HomePage from "./components/home/HomePage"

function App() {
  return (
      <>
        <Switch>
            <Route exect path='/registration' component={Registration}/>
            <Route exect path='/authentication' component={Authentication}/>
            <Route exect path="/" component={HomePage}/>
            <Route exect path="/home" component={HomePage}/>
            <Route exect path="/books" component={HomePage}/>
            <Route exect path="/category" component={HomePage}/>
            <Route exect path="/authors" component={HomePage}/>
        </Switch>
      </>
  );
}

export default App;
