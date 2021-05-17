import React, {useState,useContext } from "react";
import classes from "./AdminAuthorization.module.css"
import axios from "axios";
import {Redirect} from "react-router-dom";
import {anotherAxios} from "../../withAxios/withAxios";
import {userContext} from "../../../App";

const AdminRegister = ()=>{
    const myContext = useContext(userContext);
    const myAxios = anotherAxios(myContext.store.userToken);
    const [email, setEmail]=useState('');
    const [butValid, setButValid]=useState(true);
    const [isCancel, setIsCancel] = useState(false);

    const emailHandler = (e)=>{
        setEmail(e.target.value);
        if(e.target.value.length > 0){
            setButValid(false);
        }else{
            setButValid(true);
        }
    }

    const sendHandler = async (e)=>{
        e.preventDefault();
        setButValid(true);
        try{
            const response = await myAxios.post('/register/admin', {
                "email": email,
                "role": "MODERATOR"
            });
            alert('Success');
            setButValid(false);
            setIsCancel(true);
        }catch (e){
            alert(e.message);
        }finally {
            setButValid(false);
        }
    }

    if(isCancel){
        return (
            <Redirect to='/admin/users' exact/>
        );
    }else {
        return(
            <div className={classes.adminAuthorization}>
                <form>
                    <h5>Admin register</h5>
                    <div>
                        <label>Email</label>
                        <input type='email' onChange={emailHandler} value={email}/>
                    </div>
                    <div>
                        <label>Role</label>
                        <input type='text' disabled={true} value='moderator'/>
                    </div>
                    <button className='btn btn-warning' onClick={()=>{setIsCancel(true)}}>Cancel</button>
                    <button disabled={butValid} className='btn btn-success' onClick={sendHandler}>Send</button>
                </form>
            </div>
        )
    }
}

export default AdminRegister;
