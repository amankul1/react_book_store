import React from "react"
import classes from "./CategoryContent.module.css";
import BookCard from "../../general/BookCard/BookCard";
import SubMenu from "../../general/SubMenu/SubMenu";

const CategoryContent = (props)=>{
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
                        <BookCard
                            key={index}
                            book={book}
                        />
                    )
                })}
            </div>
            <div className={classes.CategoryAdvertisingWrapper}>
                Reclama
            </div>
        </div>
    )
}

export default CategoryContent;