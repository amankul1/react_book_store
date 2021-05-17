import React, {useContext, useState, useLayoutEffect} from "react";
import HeaderComponent from "../../general/header/HeaderComponent";
import FooterComponent from "../../general/footer/FooterComponent";
import {userContext} from "../../../App";
import classes from "./AdminCategories.module.css";
import AdminMenu from "../AdminGeneral/AdminMenu/AdminMenu";
import {anotherAxios} from "../../withAxios/withAxios";
import {Redirect} from "react-router-dom";
import axios from "axios";
import List from "../AdminGeneral/List/List";

function AdminCategories(){
    const myContext = useContext(userContext);
    const myAxios = anotherAxios(myContext.store.userToken);
    const [isCategoryAddForm, setIsCategoryAddForm] = useState(false);
    const [category, setCategory] = useState('');
    const [butValid, setButValid] = useState(true);
    const [categories, setCategories] = useState([]);

    const getCategory = ()=>{
        axios.get('https://pj-bookstore.herokuapp.com/category').then(
            response =>{
                setCategories(response.data);
            }
        ).catch(
            e=>{
                alert(e.message);
            }
        )
    }

    useLayoutEffect(()=>{
        getCategory();
    }, []);

    const categoryInputHandler = (e)=>{
        setCategory(e.target.value);
        if(e.target.value.length>0){
            setButValid(false);
        }else{
            setButValid(true);
        }
    }

    const categoryAddHandler = (e)=>{
        e.preventDefault();
        setButValid(true);
        myAxios.post('/category',{"name": category}).then(
            response=>{
                alert(response.data.name+' '+"was added success!");
                setCategory('');
                getCategory();
            }
        ).catch(
            e=>{
                alert(e.message);
            }
        )
    }

    const deleteCategory = (id)=>{
        myAxios.delete('/category/'+id).then(
            response=>{
                getCategory();
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
                    <h5>Category</h5>
                    {
                        isCategoryAddForm?
                            <div className={classes.addCategoryWrapper}>
                                <form>
                                    <label>New category:</label>
                                    <input type='text' onChange={categoryInputHandler} value={category}/>
                                    <button disabled={butValid} className='btn btn-success' onClick={categoryAddHandler}>Add</button>
                                    <button className='btn btn-light' onClick={()=>{setIsCategoryAddForm(!isCategoryAddForm)}}>Cancel</button>
                                </form>
                            </div>:
                            <div className={classes.addCategoryWrapper}>
                                <button className='btn btn-light' onClick={()=>{setIsCategoryAddForm(!isCategoryAddForm)}}> Add new category </button>
                            </div>
                    }

                    {
                        categories.length>0?
                            <List
                                array={categories}
                                type='category'
                                delete={deleteCategory}
                            />:
                            'Please wait some time !'
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

export default AdminCategories;