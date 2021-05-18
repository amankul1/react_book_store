import React, {useState} from "react";
import classes from "./ModeratorRegister.module.css";
import InputUI from "../../UserRoom/UserRoomUI/InputUI/InputUI";
import {getAxios} from "../../withAxios/withAxios";
import {Redirect} from "react-router-dom";

const ModeratorRegister = ()=>{

    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nameValid, setNameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [toHome, setToHome] = useState(false);

    const nameHandler = (e)=>{
        e.preventDefault();
        if(e.target.value.length > 0){
            setNameValid(true);
        }else{
            setNameValid(false);
        }
        setName(e.target.value);
    }

    const passwordHandler = (e)=>{
        e.preventDefault();

        if(e.target.value.length > 7 && e.target.value.length < 13){
            setPasswordValid(true);
        }else{
            setPasswordValid(false);
        }
        setPassword(e.target.value);
    }

    const sendHandler = async (e)=>{
        const myAxios =  getAxios();
        e.preventDefault();
        try{
            const response = await myAxios.post('/register/admin/save',{
                "email": email,
                "password": password,
                "name": name,
                "surname": surName
            });
            alert(response.data.name + ' was success changed!');
            setToHome(true);

        }catch (e){
            alert(e.message);
        }
    }

    if(toHome){
        return(
            <Redirect to='/' exact/>
        )
    }else{
        return(
            <div className={classes.moderatorRegister}>
                <form>
                    <div className={classes.formTitle}>
                        <h5>Moderator profile</h5>
                    </div>
                    <InputUI
                        label='Name'
                        type='text'
                        isValid={nameValid}
                        onChange={nameHandler}
                        err
                    />
                    <InputUI
                        label='Surname'
                        type='text'
                        isValid={(surName.length > 0)}
                        onChange={(e)=>{setSurName(e.target.value)}}
                    />
                    <InputUI
                        label='Email'
                        type='email'
                        isValid={(email.length > 0)}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <InputUI
                        label='Password'
                        type='password'
                        isValid={passwordValid}
                        onChange={passwordHandler}
                    />
                    <button className='btn btn-warning' onClick={()=>{setToHome(true)}}> Cancel </button>
                    <button className='btn btn-success' disabled={!(nameValid&&passwordValid)} onClick={sendHandler}> Send </button>
                </form>
            </div>
        )
    }

}

export default ModeratorRegister;