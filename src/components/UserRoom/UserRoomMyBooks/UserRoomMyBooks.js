import React, {useContext, useState} from "react";
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

const UserRoomMyBooks = () =>{
    const myContext = useContext(userContext);

    //--------------------------------------writer-------------------------------------------
        const [bookList, setBookList] = useState(
            {
                books : [
                    {
                        id: 1,
                        name: 'Gogogogo',
                        rating: 15.5,
                        comments: [],
                        pdfUrl: '',
                        imageUrl: '',
                        isExpanded: false
                    },
                    {
                        id: 2,
                        name: 'Gogogogo',
                        rating: 15.5,
                        comments: [],
                        pdfUrl: '',
                        imageUrl: '',
                        isExpanded: false
                    },
                    {
                        id: 3,
                        name: 'Gogogogo',
                        rating: 15.5,
                        comments: [],
                        pdfUrl: '',
                        imageUrl: ''
                    }
                ]
            }
        )
        const [isAddBook, setIsAddBook] = useState(false);

        function getBooksHandler(){

        }

        const bookDeleteHandler = (id)=>{
            console.log(id);
        }

        const bookChangeHandler = (id) =>{
            console.log(id);
        }

        const showAddBook=()=>{
            setIsAddBook(!isAddBook);
        }

//----------------------------------Moderator----------------------------------------------
        const [books, setBooks] = useState(
            {
                bookList : [
                    {
                        id: 1,
                        name: 'Gogogogo',
                        pdfUrl: '',
                        author: 'Fofofofo'
                    },
                    {
                        id: 2,
                        name: 'Gogogogo',
                        pdfUrl: '',
                        author: 'Fofofofo'
                    },
                    {
                        id: 3,
                        name: 'Gogogogo',
                        pdfUrl: '',
                        author: 'Fofofofo'
                    },
                ]
            }
        )

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
                                            />
                                            <div className={classes.categorySelect}>
                                                <label htmlFor='selectCat'> Category: </label>
                                                <select id='selectCat'>
                                                    <option> Option 1 </option>
                                                    <option> Option 2 </option>
                                                    <option> Option 3 </option>
                                                </select>
                                            </div>
                                            <InputUI
                                                label="Choose file"
                                                type='file'
                                            />
                                            <button className='btn btn-success'>Add book</button>
                                        </form>
                                    </div>
                                    :
                                    <div className={classes.bookListWrapper}>
                                        <div><h5 className={classes.bookListTitle}>My books</h5></div>
                                        <ul>
                                            {bookList.books.map((book, index)=>{
                                                return(
                                                    <Book
                                                        id={book.id}
                                                        index={index}
                                                        name={book.name}
                                                        rating={book.rating}
                                                        comments={book.comments}
                                                        pdfUrl={book.pdfUrl}
                                                        imageUrl={book.imageUrl}
                                                        bookDelete = {bookDeleteHandler}
                                                        bookChange = {bookChangeHandler}
                                                        key={index}
                                                    />
                                                )
                                            })}
                                        </ul>
                                    </div>

                                }
                            </>:
                            <div>
                                <ModeratorBooksContent
                                    bookList={books.bookList}
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