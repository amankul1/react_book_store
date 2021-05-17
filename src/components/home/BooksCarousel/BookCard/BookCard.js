import classes from "./BookCard.module.css";
import {NavLink} from "react-router-dom";
import default_book_image from "../../../UserRoom/UserRoomIcons/default_book_image.png";
import React from "react";
const BookCard = (props)=>{
    return (
        <div className={classes.bookCard}>
            <div className={classes.cardLeft}>
                <NavLink to={`/book/info/${props.book.id}`}>
                    <img src={props.image ? props.image : default_book_image} alt=""/>
                </NavLink>
                </div>
            <div className={classes.cardRight}>
                <div className={classes.bookInfo} >Name: {props.book.name}</div>
                <div className={classes.bookInfo}  >Author: {props.book.author}</div>
                <div className={classes.bookInfo}  >Rating: {props.book.rating}</div>
                <div className={classes.bookInfo}  >Date: {props.book.date}</div>
            </div>
        </div>
    )
}

export default BookCard;