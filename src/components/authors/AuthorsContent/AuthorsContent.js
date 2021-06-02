import React from "react";
import classes from "./AuthorsContent.module.css";
import AuthorCard from "../../general/AuthorCard/AuthorCard";
import {NavLink} from "react-router-dom";
import ProgressUI from "../../general/ProgressUI/ProgressUI";

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
                                <NavLink to={`/author/books/${author.id}`} key={index}>
                                    <AuthorCard
                                        name={author.name}
                                        image={author.image}
                                    />
                                </NavLink>
                            )
                        })}
                    </>:
                    <ProgressUI/>
                }
            </div>
            <div className={classes.CategoryAdvertisingWrapper}>
                Reclama
            </div>
        </div>
    )
}

export default AuthorsContent;