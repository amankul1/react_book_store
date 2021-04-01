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
                    genders={props.genders}
                />
            </div>
            <div className={classes.CategoryContent}>

                <div className={classes.CategoryContentTitle}>
                    GenderName
                </div>

                {props.booksList.books.map((book, index)=>{
                    return(
                        <NavLink to={`/book/info/${book.id}`} key={index}>
                            <BookCard
                                book={book}
                            />
                        </NavLink>
                    )
                })}
            </div>
            <div className={classes.CategoryAdvertisingWrapper}>
                Reclama
            </div>
        </div>
    )
}

export default BooksContent;