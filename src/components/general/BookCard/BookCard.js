import React from "react";
import classes from "./BookCrad.module.css";

const BookCard = (props)=>{

    return(
        <div className={classes.bookWrapper}>
        <div className={classes.frontPage}>
            <img src={props.list.image} alt=''/>
            <span>{props.list.name}</span>
        </div>
        <div className={classes.backPage}>
            <div>
                <span>{props.list.name}</span>
                <span>{props.list.author}</span>
                <span>Rating: {props.list.rating}</span>
            </div>
        </div>
        </div>
    )
}

export default BookCard;