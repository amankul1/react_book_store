import React, {useContext, useState, useLayoutEffect} from "react";
import HeaderComponent from "../../general/header/HeaderComponent";
import FooterComponent from "../../general/footer/FooterComponent";
import {userContext} from "../../../App";
import classes from "./AdminAuthors.module.css";
import AdminMenu from "../AdminGeneral/AdminMenu/AdminMenu";
import {Redirect} from "react-router-dom";
import List from "../AdminGeneral/List/List";
import {anotherAxios} from "../../withAxios/withAxios";
import axios from "axios";

function AdminAuthors(){
    const myContext = useContext(userContext);
    const myAxios = anotherAxios(myContext.store.userToken);
    const [authors, setAuthors] = useState([]);

    const getAuthors= ()=>{
        axios.get('https://pj-bookstore.herokuapp.com/author').then(
            response=>{
                setAuthors(response.data);
            }
        ).catch(
            e=>{
                alert(e.message);
            }
        )
    }

    useLayoutEffect(()=>{
        getAuthors();
    }, [])

    const deleteAuthor = (id)=>{
        myAxios.delete(`/author/${id}`).then(
            response=>{
                alert(response.data.message);
                getAuthors();
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
                    <h5>Authors</h5>
                    {authors.length>0 ?
                        <List
                            array={authors}
                            type='author'
                            delete={deleteAuthor}
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
export default AdminAuthors;