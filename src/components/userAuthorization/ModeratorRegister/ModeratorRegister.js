import React, {useState} from "react";
import classes from "./ModeratorRegister.module.css";
import InputUI from "../../UserRoom/UserRoomUI/InputUI/InputUI";

const ModeratorRegister = ()=>{

    const [name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [nameValid, setNameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

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

    const sendHandler = (e)=>{
        e.preventDefault();
        try{
            alert(name+' '+password);
        }catch (e){
            alert(e.message);
        }
    }

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
                />
                <InputUI
                    label='Password'
                    type='text'
                    isValid={passwordValid}
                    onChange={passwordHandler}
                />

                <button className='btn btn-success' disabled={!(nameValid&&passwordValid)} onClick={sendHandler}> Send </button>
            </form>
        </div>
    )
}

export default ModeratorRegister;