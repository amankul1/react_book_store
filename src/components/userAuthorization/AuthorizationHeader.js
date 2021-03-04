import React from "react";
import css from "./authorizationCss/authorizationHeader.module.css";

function AuthorizationHeader(){
    return(
        <div className={css.headerWrapper}>
            <div className={css.headerLogoWrapper}>
                <img style={{width: "100%"}} src="https://img.icons8.com/cotton/64/000000/book-stack.png"/>
            </div>
            <div className = {css.headerTitle}>BOOK STORE</div>
        </div>
    )
}

export default AuthorizationHeader;