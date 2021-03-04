import React from "react";
import AuthorizationHeader from "../AuthorizationHeader";
import css from "../authorizationCss/authorization.module.css";
import books_image from "../authorizationImages/booksImage.jpg";

function Registration(){
    return(
        <div style={{ width: "100vw", height: "100vh" }}>
            <AuthorizationHeader/>
            <div className={css.imageWrapper}>
                <img className={css.booksImage} src={books_image} />
            </div>
            <div className={css.formWrapper}>
                <form className="form-control">
                    <div className={css.formTitle}>
                        <h2>REGISTRATION</h2>
                    </div>
                    <div className="form-control">
                        <label className={css.formLabel} for="lastName">Last name</label><br/>
                        <input className={css.formInput} type="text" id="lastName"/>
                    </div><br/>
                    <div className="form-control">
                        <label className={css.formLabel} htmlFor="firstName">First name</label><br/>
                        <input className={css.formInput} type="text" id="firstName"/>
                    </div><br/>
                    <div className="form-control">
                        <label className={css.formLabel} htmlFor="email">Email</label><br/>
                        <input className={css.formInput} type="text" id="email"/>
                    </div><br/>
                    <div className="form-control">
                        <label className={css.formLabel} htmlFor="password">Password</label><br/>
                        <input className={css.formInput} type="text" id="password"/>
                    </div><br/>

                    <div className={css.formChoice}>
                        <div  className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="defaultUnchecked"
                                   name="defaultExampleRadios"/>
                            <label style={{color: "#732C9F"}} className="custom-control-label"
                                   htmlFor="defaultUnchecked">AS WRITER</label>
                        </div>

                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="defaultChecked"
                                   name="defaultExampleRadios" checked/>
                            <label style={{color: "#732C9F"}} className="custom-control-label" htmlFor="defaultChecked">AS
                                READER</label>
                        </div>
                    </div><br/>
                    <div className={css.formButton}>
                        <button style={{backgroundColor: "#732C9F", color: "white", width: "80%"}} className="btn">SEND</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;