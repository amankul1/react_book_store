import React, {useState} from "react";
import classes from "./ActivateAccount.module.css";
import axios from "axios";
import {Redirect} from "react-router-dom";

function ActivateAccount(){
    const [activateCode, setActivateCode] = useState('');
    const [inputValid, setInputValid] = useState(true);
    const [activationSuccess,setActivationSuccess] = useState(false);
    function changeActivateCode(e){
        setActivateCode(e.target.value);
        if(e.target.value.length > 5){
            setInputValid(false)
        }else{
            setInputValid(true)
        }
    }

    async function sendHandler(e){
        e.preventDefault();
        let url = 'http://pj-bookstore.herokuapp.com/'+activateCode;
        try{
            const response = await axios.get(url);
            setActivationSuccess(true);
            console.log(response);
        }catch (e){
            alert("Something went wrong repeat the process !")
        }

    }

    if(activationSuccess){
        return (
            <Redirect to="/authentication"/>
        )
    }else{
        return(
            <div className={classes.FormWrapper}>
                <form>
                    <span>Check your email and enter the code below !</span>
                    <hr/>
                    <input type="text" onChange={changeActivateCode} value={activateCode}/>
                    <button className="btn btn-success" disabled={inputValid} onClick={sendHandler}>Activate</button>
                </form>
            </div>
        )
    }
}

export default ActivateAccount;