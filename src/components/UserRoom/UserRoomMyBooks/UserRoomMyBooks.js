import React, {useContext, useLayoutEffect, useState} from "react";
import classes from "./UserRoomMyBooks.module.css"
import HeaderComponent from "../../general/header/HeaderComponent";
import FooterComponent from "../../general/footer/FooterComponent";
import VerticalMenu from "../userRoomGeneral/VerticalMenu/VerticalMenu";
import {userContext} from "../../../App";
import {Redirect} from "react-router-dom";
import Book from "../UserRoomUI/Book/Book";
import addDataIcon  from "../UserRoomIcons/addIcon.png"
import InputUI from "../UserRoomUI/InputUI/InputUI";
import ModeratorBooksContent from "../userRoomGeneral/ModeratorBooksContect/ModeratorBooksContent";
import {anotherAxios, getAxios} from "../../withAxios/withAxios";
import axios from "axios";

const UserRoomMyBooks = () =>{
    const myContext = useContext(userContext);
    const myAxios = getAxios();

    //--------------------------------------writer-------------------------------------------
        const [bookList, setBookList] = useState([])
        const [isAddBook, setIsAddBook] = useState(false);
        const [categories, setCategories] = useState([]);
        const [moderatorBooks, setModeratorBooks] = useState([]);

        useLayoutEffect( ()=>{
            if(myContext.store.role==='writer'){
                myAxios.get('/category').then(response=>{
                    setCategories(response.data);
                }).catch(e=>{
                    console.log(e.message);
                })
                myAxios.get(`/book/author/${myContext.store.userId}`).then(
                    response=>{
                        setBookList(response.data);
                    }
                ).catch(e=>{
                    alert(e.message);
                })
            }else if(myContext.store.role==='moderator'){
                myAxios.get(`/book/confirm`).then(
                    response=>{
                        setModeratorBooks(response.data);
                        console.log(response.data);
                    }
                ).catch(e=>{
                    alert(e.message);
                })
            }

        }, [])



        async function bookDeleteHandler(id){
            const authorAxios = anotherAxios(myContext.store.userToken);
            try{
                const response = await authorAxios.delete(`https://pj-bookstore.herokuapp.com/book/${id}`);
                alert(response.data.message);
                myAxios.get(`/book/author/${myContext.store.userId}`).then(
                    response=>{
                        setBookList(response.data);
                    }
                ).catch(e=>{
                    alert(e.message);
                })
            }catch (e){
                alert(e.message);
            }
        }

        const bookChangeHandler = (id) =>{
            console.log(id);
        }

        const showAddBook= async ()=>{
            setIsAddBook(!isAddBook);
        }
//----------------------Add book ----------------------------------
    const [bookName, setBookName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [book, setBook] = useState();
    const [bookNameValid, setBookNameValid] = useState(false);

    const selectHandler = (e)=>{
        setCategoryId(e.target.value);
    }
    const bookNameHandler = (e)=>{
        setBookName(e.target.value);
        if(e.target.value.length > 0){
            setBookNameValid(true);
        }else{
            setBookNameValid(false);
        }
    }
    const bookHandler = (e)=>{
        setBook(e.target.files[0]);
    }

    const addBookHandler = async (e) =>{
        e.preventDefault();
        const  myAxios = anotherAxios(myContext.store.userToken);
        let data = new FormData();
        data.append('file', book);

        try{
            const  response  = await myAxios.post('/book', {
                "name": bookName,
                "authorID": myContext.store.userId,
                "categoryID": categoryId
            });

            try{
                let myUrl = `http://pj-bookstore.herokuapp.com/book/data/${response.data.id}`;
                const res = await  axios.put(myUrl, data, {
                    headers:{
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${myContext.store.userToken}`,
                    }
                });
                alert("Book was added!");
                myAxios.get(`/book/author/${myContext.store.userId}`).then(
                    response=>{
                        setBookList(response.data);
                    }
                ).catch(e=>{
                    alert(e.message);
                })
                setBookName('');
                setCategoryId(1);
                setIsAddBook(false);
            }catch (e){
                console.log(e.message)
            }

        }catch(e){
            console.log(e.message, 1);
        }


    }
//----------------------------------Moderator----------------------------------------------

        const refuseBook = (id) =>{
            alert(id);
        }

        const approveBook = (id) =>{
            alert(id);
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

                    {
                        myContext.store.role==='writer'?
                            <>
                                <div className={classes.contentHeaderMenu}>
                                    {isAddBook ?
                                        <button className='btn' onClick={showAddBook}>Cancel</button>
                                        :
                                        <img src={addDataIcon} onClick={showAddBook} alt=''/>
                                    }
                                </div>

                                {isAddBook ?
                                    <div className={classes.addBookWrapper}>
                                        <div>
                                            <h4>Adding book</h4>
                                        </div>
                                        <br/>
                                        <form>
                                            <InputUI
                                                label="Book name"
                                                type='text'
                                                onChange={bookNameHandler}
                                                value={bookName}
                                                isValid={bookNameValid}
                                            />
                                            <div className={classes.categorySelect}>
                                                <label htmlFor='selectCat'> Category: </label>
                                                <select id='selectCat' onChange={selectHandler}>
                                                    <option key={'a1'} value={null}> Choose category </option>
                                                    {categories.map((item, index)=>{
                                                        return(
                                                            <option key={index} value={item.id}>{item.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div style={{padding: "15px"}}>
                                                <label>Choose file:</label>
                                                <input  type="file" onChange={bookHandler}/>
                                            </div>
                                            <button disabled={!(bookNameValid)} onClick={addBookHandler} className='btn btn-success'>Add book</button>
                                        </form>
                                    </div>
                                    :
                                    <div className={classes.bookListWrapper}>
                                        {
                                            (bookList.length > 0)?
                                                <>
                                                    <div><h5 className={classes.bookListTitle}>My books</h5></div>
                                                    <ul>
                                                        {bookList.map((book, index)=>{
                                                            return(
                                                                <Book
                                                                    id={book.id}
                                                                    index={index}
                                                                    name={book.name}
                                                                    rating={book.averageRating}
                                                                    comments={book.comments}
                                                                    imageUrl={book.image?book.image:null}
                                                                    bookDelete = {bookDeleteHandler}
                                                                    bookChange = {bookChangeHandler}
                                                                    key={index}
                                                                />
                                                            )
                                                        })}
                                                    </ul>
                                                </>:
                                                "No books"
                                        }
                                    </div>

                                }
                            </>:
                            <div>
                                <ModeratorBooksContent
                                    bookList={moderatorBooks}
                                    refuseBook={refuseBook}
                                    approveBook={refuseBook}
                                />
                            </div>
                    }

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

export default UserRoomMyBooks;