import './App.css';
import "fontsource-roboto";
import React from "react";
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
import UserRoomAboutMe from "./components/UserRoom/UserRoomAboutMe/UserRoomAboutMe";
import UserRoomMyBooks from "./components/UserRoom/UserRoomMyBooks/UserRoomMyBooks";
import ActivateAccount from "./components/userAuthorization/ActivateAccount /ActivateAccount";
import UserRoomAddBook from "./components/UserRoom/UserRoomAddBook/UserRoomAddBook";

import {withStore} from "./hoc/Store/Store";

export const userContext = React.createContext({});

function App(props) {
    return (
        <>
            <userContext.Provider value={{
                store: props.store,
                setIsLogin: props.setIsLogin,
                setUserToken: props.setUserToken,
                setUserEmail: props.setUserEmail,
                setUserRole: props.setUserRole,
                setUserId: props.setUserId
            }}>
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
                    <Route path="/user/room/about/me"  component={UserRoomAboutMe} />
                    {props.store.role==='writer' ?
                        <>
                            <Route path="/user/room/my/books"  component={UserRoomMyBooks} />
                            <Route path="/user/room/add/book"  component={UserRoomAddBook} />
                        </> : null
                    }
                    <Route path="/user/account/activate" component={ActivateAccount}/>
                    <Route render={()=><h1>Error 404</h1>}/>

                </Switch>
            </userContext.Provider>
        </>
  );
}

export default withStore(App);
