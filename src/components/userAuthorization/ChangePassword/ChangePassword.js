import React, {useState} from "react";
import AuthorizationHeader from "../AuthorizationHeader";
import css from "./ChangePassword.module.css";
import books_image from "../authorizationImages/booksImage.jpg";

function ChangePassword(){

    const [password, setPassword] = useState("");
    const [passDirty, setPassDirty] = useState(false);
    let [passwordValid, setPasswordValid] = useState(false);

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
        if(passwordValid){
            console.log(password);
        }else{
            alert("Password uncorrected (password: 4-12 symbols)");
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
                        <h2>NEW PASSWORD</h2>
                    </div>
                    <div className="form-control">
                        <label className={css.formLabel} htmlFor="password">Set new password</label><br/>
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

export default ChangePassword;