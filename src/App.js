import './App.css';
import "fontsource-roboto";
import {Switch, Route} from "react-router-dom";
import Registration from "./components/userAuthorization/registration/Registration";
import Authentication from "./components/userAuthorization/authentication/Authentication";
import Books from "./components/books/Books";
import Authors from "./components/authors/Authors";
import Category from "./components/category/Category";
import HomePage from "./components/home/HomePage";
import BookInfo from "./components/BookInfo/BookInfo";

function App() {
  return (
      <>
        <Switch>
            <Route exect path='/registration' component={Registration}/>
            <Route exect path='/authentication' component={Authentication}/>
            <Route exect path="/home" component={HomePage}/>
            <Route exect path="/books" component={Books}/>
            <Route exect path="/category" component={Category}/>
            <Route exect path="/authors" component={Authors}/>
            <Route exict path="/book-info/:bookId" component={BookInfo}/>
            <Route render={()=><h1>Error 404</h1>}/>
        </Switch>
      </>
  );
}

export default App;
