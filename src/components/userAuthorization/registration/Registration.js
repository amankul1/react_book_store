import React, { useState} from "react";
import AuthorizationHeader from "../AuthorizationHeader";
import css from "../authorizationCss/authorization.module.css";
import books_image from "../authorizationImages/booksImage.jpg";

function Registration(){

    const [lastName, setLastName] = useState('');
    const [isLastNameValid, setIsLastNameValid] = useState(false);
    const [lastNameDirty, setLastNameDirty] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [isFirstNameValid, setIsFirstNameValid] = useState(false);
    const [firstNameDirty, setFirstNameDirty] = useState(false);
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    let [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState('');
    const [passDirty, setPassDirty] = useState(false);
    let [passwordValid, setPasswordValid] = useState(false);
    const [role, setRole] = useState('writer');

    const lastNameHandler = (event)=>{
        setLastName(event.target.value);
        if(event.target.value.length !== 0){
            setIsLastNameValid(true);
        }else{
            setIsLastNameValid(false);
        }
    }
    const firstNameHandler = (event)=>{
        setFirstName(event.target.value);
        if(event.target.value.length !== 0){
            setIsFirstNameValid(true);
        }else{
            setIsFirstNameValid(false);
        }
    }
    const emailHandler = (event)=>{
        setEmail(event.target.value);
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(!re.test(String(event.target.value).toLowerCase())){
            setEmailValid(false);
        }else{
            setEmailValid(true);
        }
    }
    const passwordHandler = (event)=>{
        setPassword(event.target.value);
        if(event.target.value.length  > 3 && event.target.value.length  < 12){
            setPasswordValid(true);
        }else{
            setPasswordValid(false);
        }
    }

    const sendHandler = (e)=>{
        e.preventDefault();
        if(isLastNameValid&&isFirstNameValid&&emailValid&&passwordValid){
            console.log(lastName, firstName, email, password, role);
        }else{
            alert("Some field uncorrected (password: 4-12 symbols)");
        }
    }

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
                        <label className={css.formLabel} htmlFor="lastName">Last name</label><br/>
                        <input style = {(lastNameDirty && isLastNameValid)?{borderColor:"#732C9F"}:{borderColor:"red"}} className={css.formInput} type="text" id="lastName" onBlur={()=>setLastNameDirty(true)} onChange={lastNameHandler} value={lastName}/>
                    </div><br/>
                    <div className="form-control">
                        <label className={css.formLabel} htmlFor="firstName">First name</label><br/>
                        <input style = {(firstNameDirty && isFirstNameValid)?{borderColor:"#732C9F"}:{borderColor:"red"}}  className={css.formInput} type="text" id="firstName" onBlur={()=>setFirstNameDirty(true)} onChange={firstNameHandler} value={firstName}/>
                    </div><br/>
                    <div className="form-control">
                        <label className={css.formLabel} htmlFor="email">Email</label><br/>
                        <input style = {(emailDirty && emailValid)?{borderColor:"#732C9F"}:{borderColor:"red"}}  className={css.formInput} type="text" id="email" onBlur={()=>setEmailDirty(true)} onChange={emailHandler} value={email} />
                    </div><br/>
                    <div className="form-control">
                        <label className={css.formLabel} htmlFor="password">Password</label><br/>
                        <input style = {(passDirty && passwordValid)?{borderColor:"#732C9F"}:{borderColor:"red"}}  className={css.formInput} type="text" id="password" onBlur={()=>setPassDirty(true)} onChange={passwordHandler} value={password}/>
                    </div><br/>

                    <div className={css.formChoice}>
                        <div  className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="defaultUnchecked"
                                   name="defaultExampleRadios" defaultChecked onClick={()=>setRole("writer")}/>
                            <label style={{color: "#732C9F"}} className="custom-control-label"
                                   htmlFor="defaultUnchecked" >AS WRITER</label>
                        </div>

                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="defaultChecked"
                                   name="defaultExampleRadios" onClick={()=>setRole("reader")} />
                            <label style={{color: "#732C9F"}} className="custom-control-label" htmlFor="defaultChecked">AS
                                READER</label>
                        </div>
                    </div><br/>
                    <div className={css.formButton}>
                        <button style={{backgroundColor: "#732C9F", color: "white", width: "80%"}} onClick={sendHandler} className="btn">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;