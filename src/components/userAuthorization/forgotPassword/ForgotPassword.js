import React, {useState} from "react";
import AuthorizationHeader from "../AuthorizationHeader";
import css from "./ForgetPassword.module.css";
import books_image from "../authorizationImages/booksImage.jpg";
import axios from "axios";
import {Redirect} from "react-router-dom";

function ForgetPassword(){

    const [email, setEmail] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    let [emailValid, setEmailValid] = useState(false);
    const [successResponse, setSuccessResponse] = useState(false);

    const emailHandler = (e)=>{
        setEmail(e.target.value);
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailValid(false);
        }else{
            setEmailValid(true);
        }
    }

    const emailDirtyHandler = ()=>{
        setEmailDirty(true);
    }

    const sendHandler = async (e)=>{
        e.preventDefault();
        if(emailValid){
            let url = 'http://pj-bookstore.herokuapp.com/register/forgotPassword/'+email;
            try{
                await axios.post(url);
                alert("Check your mail!")
                setSuccessResponse(true);
            }catch (e){
                alert("Unknown email please try again!")
                setSuccessResponse(false);
            }
        }else{
            alert("Email is uncorrected ");
        }
    }

    if(successResponse){
        return (
            <Redirect to="/authentication" />
        )
    }else{
        return(
            <div style={{ width: "100vw", height: "100vh" }}>
                <AuthorizationHeader/>
                <div className={css.imageWrapper}>
                    <img alt="" className={css.booksImage} src={books_image} />
                </div>
                <div className={css.formWrapper}>
                    <form className="form-control">
                        <div className={css.formTitle}>
                            <h2>FORGET PASSWORD</h2>
                        </div>
                        <div className="form-control">
                            <label className={css.formLabel} htmlFor="email">Email</label><br/>
                            <input className={css.formInput} style = {(emailValid && emailDirty)?{borderColor:"#732C9F"}:{borderColor:"red"}} type="text" id="email" onBlur={emailDirtyHandler} onChange={emailHandler} value={email}/>
                        </div><br/>
                        <div className={css.formButton}>
                            <button style={{backgroundColor: "#732C9F", color: "white", width: "80%"}} onClick={sendHandler} className="btn">Востоновить</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ForgetPassword;