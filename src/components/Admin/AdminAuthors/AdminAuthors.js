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
    const [addButClicked, setAddButClicked] =useState(false);
    const [authorName, setAuthorName]=useState('')
    const [authorSurname, setAuthorSurname]=useState('')
    const [birthDate, setBirthDate] = useState('');
    const [biography, setBiography] = useState('');
    const [addButValid, setAddButValid]=useState(false);


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

    const nameHandler = (e)=>{
        setAuthorName(e.target.value);
    }

    const surnameHandler = (e)=>{
        setAuthorSurname(e.target.value);
    }

    const birthDateHandler = (e)=>{
        setBirthDate(e.target.value);
    }

    const biographyHandler = (e)=>{
        setBiography(e.target.value);
    }

    const authorAddHandler = (e)=>{
        e.preventDefault();

        if(authorName.length>0&&authorSurname.length>0&&biography.length>0){
            setAddButValid(true);

            myAxios.post('/author', {
                "name": authorName,
                "surname": authorSurname,
                "birthDate": birthDate,
                "biography": biography
            }).then(
                response=>{
                    alert(response.data.name+' was success added!');
                    getAuthors();
                    setAddButClicked(false);
                }
            ).catch(
                e=>{
                    alert(e.message);
                }
            ).finally(
                ()=>{
                    setAddButValid(false);
                }
            )

        }else{
            alert("Enter data again some input didn't valid!");
        }

    }

    if(myContext.store.isLogin){
        return(
            <div className={classes.pageWrapper}>
                <HeaderComponent/>
                <AdminMenu/>
                <div className={classes.AdminInfoContent}>
                    <h5>Authors</h5>
                    <br/>
                    {addButClicked?
                        <form>
                            <div>
                                <input type='text' placeholder='Enter name' onChange={nameHandler}/>
                                <input type='text' placeholder='Enter surname' onChange={surnameHandler}/>
                                <span>
                                    <label>Birth date:</label>
                                    <input type='date' onChange={birthDateHandler}/>
                                </span>
                            </div>
                            <div>
                                <textarea rows={3} cols={100} placeholder='Enter biography' onChange={biographyHandler}></textarea>
                            </div>
                            <button className='btn btn-light' onClick={()=>{setAddButClicked(!addButClicked)}}>Cancel</button>
                            <button className='btn btn-success' disabled={addButValid} onClick={authorAddHandler}>Add</button>
                        </form>
                        :
                        <button className='btn btn-light' onClick={()=>{setAddButClicked(!addButClicked)}}>Add author</button>
                    }

                    <br/>
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