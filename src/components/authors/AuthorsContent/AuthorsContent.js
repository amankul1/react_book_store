import React from "react";
import classes from "./AuthorsContent.module.css";
import BookCard from "../../general/BookCard/BookCard";
import {NavLink} from "react-router-dom";

const AuthorsContent = (props)=>{
    return(
        <div className={classes.CategoryContentWrapper}>
            <div className={classes.CategoryContent}>
                {
                    props.authors.length !==0 ?
                    <>
                        <div className={classes.CategoryContentTitle}>
                            Authors
                        </div>

                        {props.authors.map((author, index)=>{
                            return(
                                <NavLink to={`/book/info/${author.id}`} key={index}>
                                    <BookCard
                                        list={author}
                                    />

                                </NavLink>
                            )
                        })}
                    </>:
                    null
                }
            </div>
            <div className={classes.CategoryAdvertisingWrapper}>
                Reclama
            </div>
        </div>
    )
}

export default AuthorsContent;