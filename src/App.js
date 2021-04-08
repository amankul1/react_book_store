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
import ForgotPassword from "./components/userAuthorization/forgotPassword/ForgotPassword";
import ChangePassword from "./components/userAuthorization/ChangePassword/ChangePassword";
import AboutWriter from "./components/AboutWriter/AboutWriter";
import UserRoom from "./components/UserRoom/UserRoom";
import api from "./api/api";

function App() {
    api();
  return (
      <>
        <Switch>
            <Route path='/registration' component={Registration}/>
            <Route path='/authentication' component={Authentication}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/" exact component={HomePage}/>
            <Route path="/books" component={Books}/>
            <Route path="/category" component={Category}/>
            <Route path="/authors" component={Authors}/>
            <Route path="/book/info/:bookId" component={BookInfo}/>
            <Route path="/forget-password" component={ForgotPassword}/>
            <Route path={"/change-password"} component={ChangePassword}/>
            <Route path={"/book/author/:id"}  component={AboutWriter}/>
            <Route path="/user/room"  component={UserRoom} />
            <Route render={()=><h1>Error 404</h1>}/>
        </Switch>
      </>
  );
}

export default App;
