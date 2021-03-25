import classes from "./BookCard.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
const BookCard = (props)=>{
    return (
        <div className={classes.bookCard}>
            <div className={classes.cardLeft}>
                <NavLink to={`/book-info/${props.book.id}`}>
                    <img src="https://cbca.blob.core.windows.net/media/Default/Book%20Week%20Themes/Book%20Week%20Poster%20(social%20media%20version).png" alt=""/>
                </NavLink>
                </div>
            <div className={classes.cardRight}>
                <div className={classes.bookName} >Name: {props.book.author}</div>
                <div className={classes.bookAuthor}  >Author: {props.book.author}</div>
                <div className={classes.bookDescription}  >Description: <p>
                    &nbsp; &nbsp;{props.book.info} &nbsp;&nbsp;
                    <NavLink to={`/book-info/${props.book.id}`}> More... </NavLink>
                </p></div>
            </div>
        </div>
    )
}

export default BookCard;