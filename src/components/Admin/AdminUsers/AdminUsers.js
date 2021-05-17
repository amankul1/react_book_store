import React, {useContext, useLayoutEffect, useState} from "react";
import HeaderComponent from "../../general/header/HeaderComponent";
import FooterComponent from "../../general/footer/FooterComponent";
import {userContext} from "../../../App";
import classes from "./AdminUsers.module.css";
import AdminMenu from "../AdminGeneral/AdminMenu/AdminMenu";
import {NavLink, Redirect} from "react-router-dom";
import List from "../AdminGeneral/List/List";
import {anotherAxios} from "../../withAxios/withAxios";
import axios from "axios";

function AdminUsers(){
    const myContext = useContext(userContext);
    const myAxios = anotherAxios(myContext.store.userToken);
    const [users, setUsers] = useState([]);

    const getUsers= ()=>{
        axios.get('https://pj-bookstore.herokuapp.com/user').then(
            response=>{
                setUsers(response.data);
            }
        ).catch(
            e=>{
                alert(e.message)
            }
        )
    }

    useLayoutEffect(()=>{
        getUsers();
    }, [])

    const deleteUser = (id)=>{
        myAxios.delete(`/user/${id}`).then(
            response=>{
                alert(response.data.message);
                getUsers();
            }
        ).catch(
            e=>{
                alert(e.message)
            }
        )
    }

    if(myContext.store.isLogin){
        return(
            <div className={classes.pageWrapper}>
                <HeaderComponent/>
                <AdminMenu/>
                <div className={classes.AdminInfoContent}>
                    <h5>Users</h5>
                    <div className={classes.addUserWrapper}>
                        <NavLink to="/admin/register"> <button className='btn btn-light'>Add moderator</button> </NavLink>
                    </div>
                    {users.length>0 ?
                        <List
                            array={users}
                            type='user'
                            delete={deleteUser}
                        />:
                        'Loading... or base is empty, please wait! '
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

export default AdminUsers;