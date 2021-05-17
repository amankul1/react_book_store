import React, {useContext, useLayoutEffect, useState} from "react";
import HeaderComponent from "../../general/header/HeaderComponent";
import FooterComponent from "../../general/footer/FooterComponent";
import {userContext} from "../../../App";
import classes from "./AdminPersonalInfo.module.css";
import AdminMenu from "../AdminGeneral/AdminMenu/AdminMenu";
import {NavLink, Redirect} from "react-router-dom";
import axios from "axios";

function AdminPersonalInfo(){

    const [name, setName] = useState('');
    const [isNameChangeForm, setIsNameChangeForm] = useState(false);

    useLayoutEffect(()=>{
        axios.get('https://pj-bookstore.herokuapp.com/user/email/'+myContext.store.userEmail).then(
            response=>{
                setName(response.data.name);
            }
        ).catch(e=>{
            alert(e.message);
        })
    },[])

    const myContext = useContext(userContext);
    if(myContext.store.isLogin){
        return(
            <div className={classes.pageWrapper}>
                <HeaderComponent/>
                <AdminMenu/>
                <div className={classes.AdminInfoContent}>
                    <div>
                        <h4>Personal info</h4>
                    </div>
                    <div className={classes.contentItem}>
                        <img src={myContext.store.image} alt=""/>
                        <NavLink to='/change/user/image'><button className='btn'>Change image</button></NavLink>
                    </div>

                    {isNameChangeForm?
                        <div>
                            <span>Name: </span> <h6>{name}</h6>
                        </div>:
                        <div className={classes.contentItem}>
                            {name?name:'Loading ...'}<button className='btn'>Change name</button>
                        </div>
                    }
                </div>
                <FooterComponent/>
            </div>
        )
    }else{
        return (
            <Redirect to='/' />
        )
    }
}

export default AdminPersonalInfo;