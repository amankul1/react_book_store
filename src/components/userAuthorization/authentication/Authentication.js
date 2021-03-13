import React, {useState} from "react";
import AuthorizationHeader from "../AuthorizationHeader";
import css from "../authorizationCss/authorization.module.css";
import books_image from "../authorizationImages/booksImage.jpg";

function Authentication(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    let [emailValid, setEmailValid] = useState(false);
    const [passDirty, setPassDirty] = useState(false);
    let [passwordValid, setPasswordValid] = useState(false);

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
    const  passDirtyHandler = ()=>{
        setPassDirty(true);
    }
    const passwordHandler = (e)=>{
        setPassword(e.target.value);
        if(e.target.value.length > 3 && e.target.value.length <12){
            setPasswordValid(true);
        }else{
            setPasswordValid(false);
        }
    }

    const sendHandler = (e)=>{
        e.preventDefault();
        if(passwordValid&&emailValid){
            console.log(email, password);
        }else{
            alert("Email or password uncorrected (password: 4-12 symbols)");
        }
    }

    return(
        <div style={{ width: "100vw", height: "100vh" }}>
            <AuthorizationHeader/>
            <div className={css.imageWrapper}>
                <img alt="" className={css.booksImage} src={books_image} />
            </div>
            <div className={css.formWrapper}>
                <form className="form-control">
                    <div className={css.formTitle}>
                        <h2>AUTHENTICATION</h2>
                    </div>
                    <div className="form-control">
                        <label className={css.formLabel} htmlFor="email">Email</label><br/>
                        <input className={css.formInput} style = {(emailValid && emailDirty)?{borderColor:"#732C9F"}:{borderColor:"red"}} type="text" id="email" onBlur={emailDirtyHandler} onChange={emailHandler} value={email}/>
                    </div><br/>
                    <div className="form-control">
                        <label className={css.formLabel} htmlFor="password">Password</label><br/>
                        <input className={css.formInput} style = {(passwordValid && passDirty)?{borderColor:"#732C9F"}:{borderColor:"red"}} type="text" id="password" onChange={passwordHandler} onBlur={passDirtyHandler} value={password}/>
                    </div><br/>

                    <div className={css.formButton}>
                        <button style={{backgroundColor: "#732C9F", color: "white", width: "80%"}} onClick={sendHandler} className="btn">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Authentication;