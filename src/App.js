import './App.css';
import "fontsource-roboto";
import React from "react";
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
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
import ChangeUserImage from "./components/general/ChangeUserImage/ChangeUserImage";
import ActivateInfo from "./components/userAuthorization/ActivateAccount /ActivateInfo";
import ModeratorRegister from "./components/userAuthorization/ModeratorRegister/ModeratorRegister";
import {withStore} from "./hoc/Store/Store";
import AuthorBooks from "./components/AuthorBooks/AuthorBooks";
import AdminPersonalInfo from "./components/Admin/AdminPersonalInfo/AdminPersonalInfo";
import AdminAuthors from "./components/Admin/AdminAuthors/AdminAuthors";
import AdminBooks from "./components/Admin/AdminBooks/AdminBooks";
import AdminCategories from "./components/Admin/AdminCategories/AdminCategories";
import AdminUsers  from "./components/Admin/AdminUsers/AdminUsers";
import AdminRegister from "./components/userAuthorization/AdminRegister/AdminRegister";
import Search from "./components/Search/Search";

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
                setUserId: props.setUserId,
                setImage: props.setImage
            }}>
                <Switch>
                    <Route path='/registration' exact component={Registration}/>
                    <Route path='/authentication' exact component={Authentication}/>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/books" exact component={Books}/>
                    <Route path="/category" exact component={Category}/>
                    <Route path="/authors" exact component={Authors}/>
                    <Route path="/book/info/:id" exact component={BookInfo}/>
                    <Route path="/forget-password" exact component={ForgotPassword}/>
                    <Route path="/change-password" exact component={ChangePassword}/>
                    <Route path="/book/author/:id" exact component={AboutWriter}/>
                    <Route path="/user/room/about/me" exact component={UserRoomAboutMe} />
                    <Route path="/author/books/:id" exact component={AuthorBooks} />
                    <Route path="/change/user/image" exact component={ChangeUserImage}/>
                    <Route path="/moderator/registration" exact component={ModeratorRegister} />
                    <Route path="/user/account/activate/info" exact component={ActivateInfo}/>
                    <Route path="/user/account/activate/:code" component={ActivateAccount}/>
                    <Route path="/search" exact component={Search}/>
                    {props.store.role==='writer' || props.store.role==='moderator'?
                        <>
                            <Route path="/user/room/my/books"  component={UserRoomMyBooks} />
                        </> : null
                    }
                    {
                        (props.store.role==='admin')? <>
                            <Route path="/admin/" exact component={AdminPersonalInfo} />
                            <Route path="/admin/books" exact component={AdminBooks} />
                            <Route path="/admin/categories" exact component={AdminCategories} />
                            <Route path="/admin/authors" exact component={AdminAuthors} />
                            <Route path="/admin/users" exact component={AdminUsers}/>
                            <Route path='/admin/register' exact  component={AdminRegister} />
                        </>: <Redirect to='/'/>
                    }
                    <Redirect to='/'/>

                </Switch>
            </userContext.Provider>
        </>
    );
}

export default withStore(App);
