import React from "react"
import classes from "./CategoryContent.module.css";
import BookCard from "../../general/BookCard/BookCard";
import SubMenu from "../../general/SubMenu/SubMenu";
import {NavLink} from "react-router-dom";
import ProgressUI from "../../general/ProgressUI/ProgressUI";

const CategoryContent = (props)=>{
    return(
        <div className={classes.CategoryContentWrapper}>
            <div className={classes.CategoryMenuWrapper}>
                {
                    props.genders.length > 0?
                        <SubMenu
                            onClick = {props.onClick}
                            title="Category"
                            genders={props.genders}
                        />:
                        <ProgressUI/>
                }
            </div>
            <div className={classes.CategoryContent}>

                <div className={classes.CategoryContentTitle}>
                    {props.activeGender}
                </div>

                {props.books.length>0?
                    <>
                        {props.books.map((book, index)=>{
                            return(
                                <NavLink to={`/book/info/${book.id}`} key={index}>
                                    <BookCard
                                        list={book}
                                    />
                                </NavLink>
                            )
                        })}
                    </>:
                    props.isProgress?
                        <ProgressUI/>:
                        <p>No result</p>
                }
            </div>
            <div className={classes.CategoryAdvertisingWrapper}>
                Reclama
            </div>
        </div>
    )
}

export default CategoryContent;