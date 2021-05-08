import React from "react";
import classes from "./BooksContent.module.css";
import BookCard from "../../general/BookCard/BookCard";
import SubMenu from "../../general/SubMenu/SubMenu";
import {NavLink} from "react-router-dom";

const BooksContent = (props)=>{
    return(
        <div className={classes.CategoryContentWrapper}>
            <div className={classes.CategoryMenuWrapper}>
                <SubMenu
                    onClick = {props.onClick}
                    title="Books"
                    genders={props.genders}
                />
            </div>
            <div className={classes.CategoryContent}>

                <div className={classes.CategoryContentTitle}>
                    {
                        props.title
                    }
                </div>

                {
                    (props.books.length>0)?
                        <>
                            {
                                props.books.map((book, index)=>{
                                    return(
                                        <NavLink to={`/book/info/${book.id}`} key={index}>
                                            <BookCard
                                                list={book}
                                            />
                                        </NavLink>
                                    )
                                })
                            }
                        </>
                        :
                        "Loading ..."
                }
            </div>
            <div className={classes.CategoryAdvertisingWrapper}>
                Reclama
            </div>
        </div>
    )
}

export default BooksContent;