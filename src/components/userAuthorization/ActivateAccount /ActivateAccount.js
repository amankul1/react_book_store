import React, {useState} from "react";
import classes from "./ActivateAccount.module.css";
import {Redirect} from "react-router-dom";
import {getAxios} from "../../withAxios/withAxios";

function ActivateAccount({match, location}){
    const myAxios = getAxios();
    const [userRole, setUserRole] = useState('');

    const  sendHandler = async (e) =>{
        e.preventDefault();
        if(match.params.code.length > 0){
            try{
                const response = await myAxios.get(`http://pj-bookstore.herokuapp.com/register/activate/${match.params.code}`);
                setUserRole(response.data.role);
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
    }else if(userRole==='ROLE_WRITER'){
        return(
            <Redirect to="/authentication" exact/>
        )
    }else if(userRole==='ROLE_READER'){
        return(
            <Redirect to="/authentication" exact/>
        )
    }else if(userRole==='ROLE_MODERATOR'){
        return(
            <Redirect to="/moderator/registration" exact/>
        )
    }else{
        alert("Try again !")
    }
}

export default ActivateAccount;