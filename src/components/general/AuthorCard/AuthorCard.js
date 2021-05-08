import React from "react";
import classes from "./AuthorCard.module.css"

const AuthorCard = (props)=>{
    return(
        <div className={classes.authorCard}>
            <div className={classes.authorImage}>
                <img src={props.image} alt=""/>
            </div>
            <div className={classes.authorName}>
                <h5>{props.name}</h5>
            </div>
        </div>
    )
}

export default AuthorCard;
