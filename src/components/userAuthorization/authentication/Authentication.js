import React, {useState, useContext} from "react";
import AuthorizationHeader from "../AuthorizationHeader";
import css from "../authorizationCss/authorization.module.css";
import books_image from "../authorizationImages/booksImage.jpg";
import {NavLink, Redirect} from "react-router-dom";
import axios from "axios";
import {userContext} from "../../../App";
import author_image from "../../UserRoom/UserRoomIcons/author_image.png";

function Authentication(){

    const myContext = useContext(userContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    let [emailValid, setEmailValid] = useState(false);
    const [passDirty, setPassDirty] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

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

    const sendHandler = async (e)=>{
        e.preventDefault();

        if(passwordValid&&emailValid){
            try {
                const response = await axios({
                    method: 'post',
                    url: 'http://pj-bookstore.herokuapp.com/register/auth',
                    data: {
                        'email': email,
                        'password': password,
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if(response.status === 200){
                    try{
                        let url = 'http://pj-bookstore.herokuapp.com/user/email/'+email;
                        const res = await axios.get(url);
                        myContext.setUserToken(response.data.token);
                        myContext.setUserEmail(res.data.email);
                        myContext.setUserRole(res.data.occupation?
                            res.data.occupation.toLowerCase():
                            res.data.role.name==='ROLE_MODERATOR'?
                            'moderator':
                            'admin'
                        );
                        myContext.setIsLogin(true);
                        myContext.setUserId(res.data.id);
                        myContext.setImage(res.data.image?res.data.image.url:author_image);
                        if(!!res.data.occupation){
                            if(res.data.occupation.toLowerCase()==='writer'){
                                axios.get(`http://pj-bookstore.herokuapp.com/user/author/${res.data.id}`).then(
                                    r=>{
                                        myContext.setUserId(r.data.id);
                                        myContext.setImage(r.data.image?r.data.image.url:author_image);
                                    }
                                ).catch(e=>{
                                    alert('Error by get author id');
                                })
                            }else{
                                myContext.setUserId(res.data.id);
                                myContext.setImage(res.data.image?res.data.image.url:author_image);
                            }
                        }

                        setIsLogin(true);
                    }catch (e) {
                        alert("Error, try again !!!!");
                    }
                }
            } catch (e) {
                alert("Email or password dont correct try again !");
            }
        }else{
            alert("Email or password uncorrected (password: 4-12 symbols)");
        }
    }

    if(isLogin){
        return(
            <Redirect to="/" exact/>
        )
    }else{
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
                        <br/><br/><br/>
                        <NavLink to="forget-password">Forget password</NavLink>
                    </form>
                </div>
            </div>
        )
    }
}

export default Authentication;