import React, {useState} from "react";
import classes from "./ActivateAccount.module.css";
import {Redirect} from "react-router-dom";
import {getAxios} from "../../withAxios/withAxios";

function ActivateAccount({match, location}){
    const myAxios = getAxios();
    const [userRole, setUserRole] = useState('');

    async function sendHandler(e){
        e.preventDefault();
        if(match.params.code.length > 0){
            let url = `http://pj-bookstore.herokuapp.com/${match.params.code}`;
            try{
                const response = await myAxios.get(url);
                setUserRole(response.data.role);
                alert(response.data.message);
            }catch (e){
                alert("Something went wrong repeat the process !")
            }
        }else{
            alert("No code")
        }

    }

    if(userRole===''){
        return(
            <div className={classes.FormWrapper}>
                <form>
                    <button className="btn btn-success" onClick={sendHandler}>Activate</button>
                </form>
            </div>
        )
    }else if(userRole==='reader' || userRole==='writer'){
        return(
            <Redirect to="/authentication"/>
        )
    }else if(userRole==='moderator'){
        return(
            <Redirect to="/moderator/registration" exact/>
        )
    }else{
        alert("Try again !")
    }
}

export default ActivateAccount;