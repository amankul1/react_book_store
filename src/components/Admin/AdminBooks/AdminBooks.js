import React, {useContext, useState, useLayoutEffect} from "react";
import HeaderComponent from "../../general/header/HeaderComponent";
import FooterComponent from "../../general/footer/FooterComponent";
import {userContext} from "../../../App";
import classes from "./AdminBooks.module.css";
import AdminMenu from "../AdminGeneral/AdminMenu/AdminMenu";
import {Redirect} from "react-router-dom";
import {anotherAxios} from "../../withAxios/withAxios";
import axios from "axios";
import List from "../AdminGeneral/List/List";

function AdminBooks(){
    const myContext = useContext(userContext);
    const myAxios = anotherAxios(myContext.store.userToken);
    const [books, setBooks] = useState([]);

    function getBooks(){
        axios.get('https://pj-bookstore.herokuapp.com/book').then(
            response=>{
                setBooks(response.data);
            }
        ).catch(
            e=>{
                alert(e.message());
            }
        )
    }


    useLayoutEffect(()=>{
        getBooks();
    }, [])

    const deleteBook = (id)=>{
        myAxios.delete('/book/'+id).then(
            response=>{
                getBooks();
                alert(response.data.message);
            }
        ).catch(
            e=>{
                alert(e.message);
            }
        )
    }

    if(myContext.store.isLogin){
        return(
            <div className={classes.pageWrapper}>
                <HeaderComponent/>
                <AdminMenu/>
                <div className={classes.AdminInfoContent}>
                    <h5> Books </h5>
                    {
                        books.length>0?
                            <List
                                array={books}
                                type='book'
                                delete={deleteBook}
                            />:
                            'Please wait some time!'
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

export default AdminBooks;