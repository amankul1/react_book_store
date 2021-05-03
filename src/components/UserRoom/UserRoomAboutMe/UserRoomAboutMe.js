import React, {useContext, useState, useLayoutEffect} from "react";
import classes from "./UserRoomAboutMe.module.css";
import HeaderComponent from "../../general/header/HeaderComponent";
import FooterComponent from "../../general/footer/FooterComponent";
import VerticalMenu from "../userRoomGeneral/VerticalMenu/VerticalMenu";
import {userContext} from "../../../App";
import {Redirect} from "react-router-dom";
import InputUI from "../UserRoomUI/InputUI/InputUI";
import TextAreaUI from "../UserRoomUI/TextAreaUI/TextAreaUI";
import {anotherAxios} from "../../withAxios/withAxios";


const UserRoomAboutMe = () =>{

    const myContext = useContext(userContext);
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [birthDay, setBirthday] = useState('');
    const [biography, setBiography] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nameValid, setNameValid] = useState(false);
    const [surNameValid, setSurNameValid] = useState(false);
    const [birthDateValid, setBirthDateValid] = useState(false);
    const [biographyValid, setBiographyValid] = useState(false);
    const [oldPasswordValid, setOldPasswordValid] = useState(false);
    const [newPasswordValid, setNewPasswordValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

    let newAxios = anotherAxios(myContext.store.userToken);

    useLayoutEffect( ()=>{
        if(myContext.store.role === 'reader'){

            let url = '/user/email/'+myContext.store.userEmail;

            const response =  newAxios.get(url).
            then(response=>{
               const [n, sn] = response.data.name.split(' ');
                setName(n);
                setSurName(sn);
                if(n.length > 0){
                    setNameValid(true);
                }
                if(sn.length > 0){
                    setSurNameValid(true);
                }
            }).catch(e=>{
                console.log(e);
            })

        }else if(myContext.store.role === 'writer'){
            let url = '/author/'+myContext.store.userId;
            const response =  newAxios.get(url).
            then(response=>{
                if(response.data.name){
                    const [n, sn] = response.data.name.split(' ');
                    setName(n);
                    setSurName(sn);
                    if(n.length > 0){
                        setNameValid(true);
                    }
                    if(sn.length > 0){
                        setSurNameValid(true);
                    }
                }
                if(response.data.birthDate){
                    setBirthday(response.data.birthDate);
                    if(response.data.birthDate.length > 0){
                        setBirthDateValid(true);
                    }
                }
                if(response.data.biography){
                    setBiography(response.data.biography);
                    if(response.data.biography.length > 0){
                        setBiographyValid(true);
                    }
                }
            }).catch(e=>{
                console.log(e);
            })
        }else if(myContext.store.role === 'moderator'){

        }
    }, [])

    const textInputHandler = (e, type)=>{
        switch (type){
            case 'name':
                setName(e.target.value);
                if(e.target.value.length > 0 && e.target.value.length < 35){
                    setNameValid(true);
                }else{
                    setNameValid(false);
                }
                break;
            case 'surname':
                setSurName(e.target.value);
                if(e.target.value.length > 0 && e.target.value.length < 35){
                    setSurNameValid(true);
                }else{
                    setSurNameValid(false);
                }
                break;
            case 'biography':
                setBiography(e.target.value);
                if(e.target.value.length > 0 && e.target.value.length < 200){
                    setBiographyValid(true);
                }else{
                    setBiographyValid(false);
                }
                break;
            case 'birth-date':
                setBirthday(e.target.value);
                if(e.target.value.length !== 0){
                    setBirthDateValid(true);
                }else{
                    setBirthDateValid(false);
                }
                break;
            default: break;
        }
    }

    const passwordInputHandler = (e, type) =>{
        switch (type){
            case 'old':
                setOldPassword(e.target.value);
                if(e.target.value.length > 4 && e.target.value.length < 13){
                    setOldPasswordValid(true);
                }else{
                    setOldPasswordValid(false);
                }
                break;
            case 'new':
                setNewPassword(e.target.value);
                if(e.target.value.length > 4 && e.target.value.length < 13){
                    setNewPasswordValid(true);
                }else{
                    setNewPasswordValid(false);
                }
                break;
            case 'confirm':
                setConfirmPassword(e.target.value);
                if(e.target.value === newPassword){
                    setConfirmPasswordValid(true);
                }else{
                    setConfirmPasswordValid(false);
                }
                break;
            default: break;
        }
    }

    const userProfileHandler = async (e)=>{
        e.preventDefault();

        try{
            const response = await newAxios.put('/user/profile', {
                    'name': name,
                    'surname': surName
                })
            const [n, sn] = response.data.name.split(' ');
            setName(n);
            setSurName(sn);
            alert("Your profile info was changed !")
        }catch (e){
            console.log(e);
        }

    }

    const authorProfileHandler = async (e) =>{
        e.preventDefault();
        try{
            const userName = name + ' ' +surName;
            const response = await newAxios.put(`/author/${myContext.store.userId}`, {
                    'name': userName,
                    'birthDate': birthDay,
                    'biography': biography
                })
            const [n, sn] = response.data.name.split(' ');
            console.log(response.data);
        }catch (e){

        }
    }

    const passwordChangeHandler = async (e)=>{
        e.preventDefault();
        try{
            const userName = name + ' ' +surName;
            const response = await newAxios.put(`/user/password`, {
                'email': myContext.store.userEmail,
                'oldPassword': oldPassword,
                'newPassword': newPassword
            })
            const [n, sn] = response.data.name.split(' ');
            setConfirmPassword('');
            setNewPassword('');
            setOldPassword('');
            setOldPasswordValid(false);
            setNewPasswordValid(false);
            setConfirmPasswordValid(false);
            alert("Your password was changed !")
        }catch (e){
            alert(e.message);
        }
    }
        if(myContext.store.isLogin){
            return(
                <div className={classes.UserRoom}>
                    <div className={classes.header}>
                        <HeaderComponent/>
                    </div>
                    <div className={classes.verticalMenu}>
                        <VerticalMenu name={myContext.store.userEmail} role={myContext.store.role}/>
                    </div>
                    <div className={classes.content}>

                        {myContext.store.role === 'writer'?
                            <>
                                <form className={classes.personalInfo}>
                                    <div>
                                        <h4> Personal info </h4>
                                    </div>
                                    <InputUI
                                        type='text'
                                        value={name}
                                        label="Name"
                                        isValid = {nameValid}
                                        onChange={(e)=>{textInputHandler(e, 'name')}}
                                    />
                                    <InputUI
                                        type='text'
                                        value={surName}
                                        label="Surname"
                                        isValid = {surNameValid}
                                        onChange={(e)=>{textInputHandler(e, 'surname')}}
                                    />
                                    <InputUI
                                        type='Date'
                                        value={birthDay}
                                        label="Birth date"
                                        isValid = {birthDateValid}
                                        onChange={(e)=>{textInputHandler(e, 'birth-date')}}
                                    />

                                    <TextAreaUI
                                        label="Biography"
                                        rows={10}
                                        cols={50}
                                        value={biography}
                                        isValid={biographyValid}
                                        onChange={(e)=>{textInputHandler(e, 'biography')}}
                                    />
                                    <button disabled={!(birthDateValid && biographyValid)} className="btn btn-success" onClick={authorProfileHandler}>Change</button>
                                </form>
                            </>:

                                myContext.store.role==='reader' || myContext.store.role=== "moderator"?
                                    <>
                                        <form className={classes.personalInfo}>
                                            <div>
                                                <h4> Personal info </h4>
                                            </div>
                                            <InputUI
                                                type='text'
                                                value={name}
                                                label="Name"
                                                isValid = {nameValid}
                                                onChange={(e)=>{textInputHandler(e, 'name')}}
                                            />
                                            <InputUI
                                                type='text'
                                                value={surName}
                                                label="Surname"
                                                isValid = {surNameValid}
                                                onChange={(e)=>{textInputHandler(e, 'surname')}}
                                            />
                                            <button disabled={!(nameValid)} onClick={userProfileHandler} className="btn btn-success">Change</button>
                                        </form>
                                    </> : null

                        }

                        <form className={classes.personalInfo}>
                            <div>
                                <h4> Change password </h4>
                            </div>
                            <InputUI
                                type='password'
                                value={oldPassword}
                                label="Old password"
                                isValid = {oldPasswordValid}
                                onChange={(e)=>{passwordInputHandler(e, 'old')}}
                            />
                            <InputUI
                                type='password'
                                value={newPassword}
                                label="New password"
                                isValid = {newPasswordValid}
                                onChange={(e)=>{passwordInputHandler(e, 'new')}}
                            />
                            <InputUI
                                type='password'
                                value={confirmPassword}
                                label="Confirm"
                                isValid = {confirmPasswordValid}
                                onChange={(e)=>{passwordInputHandler(e, 'confirm')}}
                            />
                            <button disabled={!(oldPasswordValid && newPasswordValid && confirmPasswordValid)} className="btn btn-success" onClick={passwordChangeHandler}>Change</button>
                        </form>
                    </div>
                    <div className={classes.footer}>
                        <FooterComponent/>
                    </div>
                </div>
            )
        }else{
            return(
                <Redirect to='/' exact />
            )
        }

}

export default UserRoomAboutMe;