import React, {useContext} from "react";
import classes from "./UserRoomAddBook.module.css";
import HeaderComponent from "../../general/header/HeaderComponent";
import FooterComponent from "../../general/footer/FooterComponent";
import VerticalMenu from "../userRoomGeneral/VerticalMenu/VerticalMenu";
import {userContext} from "../../../App";
import {Redirect} from "react-router-dom";

const UserRoomAddBook = () =>{
    const myContext = useContext(userContext);
    if(myContext.store.isLogin){
        return(
            <div className={classes.UserRoom}>
                <div className={classes.header}>
                    <HeaderComponent/>
                </div>
                <div className={classes.verticalMenu}>
                    <VerticalMenu/>
                </div>
                <div className={classes.content}>

                </div>
                <div className={classes.footer}>
                    <FooterComponent/>
                </div>
            </div>
        )
    }else{
        return(
            <Redirect to='/' exact />
        )
    }

}

export default UserRoomAddBook;