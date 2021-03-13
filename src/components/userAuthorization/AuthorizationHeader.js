import React from "react";
import css from "./authorizationCss/authorizationHeader.module.css";
import logo from "./authorizationImages/logo.png";

function AuthorizationHeader(){
    return(
        <div className={css.headerWrapper}>
            <div className={css.headerLogoWrapper}>
                <img style={{width: "100%"}} alt="logo" src={logo}/>
            </div>
            <div className = {css.headerTitle}>BOOK STORE</div>
        </div>
    )
}

export default AuthorizationHeader;