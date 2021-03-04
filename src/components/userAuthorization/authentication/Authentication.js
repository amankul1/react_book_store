import React from "react";
import AuthorizationHeader from "../AuthorizationHeader";
import css from "../authorizationCss/authorization.module.css";
import books_image from "../authorizationImages/booksImage.jpg";

function Authentication(){
    return(
        <div style={{ width: "100vw", height: "100vh" }}>
            <AuthorizationHeader/>
            <div className={css.imageWrapper}>
                <img className={css.booksImage} src={books_image} />
            </div>
            <div className={css.formWrapper}>
                <form className="form-control">
                    <div className={css.formTitle}>
                        <h2>AUTHENTICATION</h2>
                    </div>
                    <div className="form-control">
                        <label className={css.formLabel} htmlFor="email">Email</label><br/>
                        <input className={css.formInput} type="text" id="email"/>
                    </div><br/>
                    <div className="form-control">
                        <label className={css.formLabel} htmlFor="password">Password</label><br/>
                        <input className={css.formInput} type="text" id="password"/>
                    </div><br/>

                    <div className={css.formButton}>
                        <button style={{backgroundColor: "#732C9F", color: "white", width: "80%"}} className="btn">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Authentication;