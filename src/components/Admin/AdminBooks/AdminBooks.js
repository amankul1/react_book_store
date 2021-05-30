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
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([])
    const [addClicked, setAddClicked] = useState(false);
    const [addBookButValid, setAddBookButValid] = useState(true);

    const [bookName, setBookName] = useState('')
    const [authorId, setAuthorId] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
    const [bookFile, setData] = useState(null);

    function getBooks(){
        axios.get('https://pj-bookstore.herokuapp.com/book').then(
            response=>{
                setBooks(response.data);
            }
        ).catch(
            e=>{
                alert(e.message);
            }
        )
    }


    useLayoutEffect(()=>{
        getBooks();
        axios.get(`https://pj-bookstore.herokuapp.com/author/type?type=old`).then(
            response=>{
                setAuthors(response.data);
            }
        ).catch(
            e=>{
                alert(e.message);
            }
        )
        axios.get(`https://pj-bookstore.herokuapp.com/category`).then(
            response=>{
                setCategories(response.data);
            }
        ).catch(
            e=>{
                alert(e.message);
            }
        )
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


    const nameHandler=(e)=>{
        setBookName(e.target.value);
        if(e.target.value.length>0){
            setAddBookButValid(false);
        }else{
            setAddBookButValid(true);
        }
    }
    const authorHandler=(e)=>{
        setAuthorId(e.target.value);
    }
    const categoryHandler=(e)=>{
        setCategoryId(e.target.value);
    }
    const fileHandler = (e)=>{
        setData(e.target.files[0]);
    }

    const addBookHandler = (e)=>{
        const formData = new FormData();
        formData.append('file', bookFile);
        e.preventDefault();
        setAddBookButValid(true);
        if(authorId===null || categoryId===null || bookFile===null) {
            alert('Check your data and try again!');
        }else{
            myAxios.post('/book', {
                "name": bookName,
                "authorID": authorId,
                "categoryID": categoryId
            }).then(
                r=>{
                        axios.put(`https://pj-bookstore.herokuapp.com/book/data/${r.data.id}`, formData, {
                        headers:{
                            "Content-Type": "multipart/form-data",
                            "Authorization": `Bearer ${myContext.store.userToken}`,
                        }
                    }).then(
                        response=>{
                            getBooks();
                            alert(response.data.name+' was success added!');
                            setBookName('');
                            setAddClicked(false);
                        }
                    ).catch(
                        e=>{
                            alert(e.message);
                        }
                    )
                }
            ).catch(
                e=>{
                    alert(e.message);
                }
            ).finally(
                ()=>{
                    setAddBookButValid(false);
                }
            )
        }

    }

    if(myContext.store.isLogin){
        return(
            <div className={classes.pageWrapper}>
                <HeaderComponent/>
                <AdminMenu/>
                <div className={classes.AdminInfoContent}>
                    <h5> Books </h5>
                    <br/>
                    {
                        addClicked?
                            <form>
                                <div>
                                    <label>Name:</label>
                                    <input type="text" onChange={nameHandler} value={bookName}/>
                                </div>
                                <div>
                                    <label>Choose author:</label>
                                    <select onClick={authorHandler} >
                                        {
                                            authors.length>0?
                                                <>
                                                    <option>
                                                        Author
                                                    </option>
                                                    {
                                                        authors.map((author, index)=>{
                                                            return(
                                                                <option value={author.id} key={index}>
                                                                    {author.name}
                                                                </option>
                                                            )
                                                        })
                                                    }
                                                </>
                                                :
                                                'Empty'
                                        }
                                    </select>
                                </div>
                                <div>
                                    <label>Choose category:</label>
                                    <select onChange={categoryHandler} >
                                        {
                                            categories.length>0?
                                                <>
                                                    <option>
                                                        Category
                                                    </option>
                                                    {
                                                        categories.map((category, index)=>{
                                                            return(
                                                                <option value={category.id} key={index}>
                                                                    {category.name}
                                                                </option>
                                                            )
                                                        })
                                                    }
                                                </>
                                                :
                                                'Empty'
                                        }
                                    </select>
                                </div>

                                <div>
                                    <label>File:</label>
                                    <input type="file" onChange={fileHandler}/>
                                </div>

                                <button className='btn btn-light' onClick={()=>{setAddClicked(!addClicked)}}>Cancel</button>
                                <button disabled={addBookButValid} className='btn btn-success' onClick={addBookHandler}>Add book</button>
                            </form>
                            :
                            <button className='btn btn-light' onClick={()=>{setAddClicked(!addClicked)}}>Add new Book</button>
                    }
                    <br/>
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