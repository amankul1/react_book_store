import React from "react";
import classes from "./BookInfo.module.css"
import HeaderComponent from "../general/header/HeaderComponent";
import {NavLink} from "react-router-dom";

const BookInfo = ({match, location})=> {

    return (
        <div>
            <div className={classes.headerWrapper}>
                <HeaderComponent/>
            </div>
            <div className={classes.contentWrapper}>
                <div className={classes.contentLeft}>
                    <img src="https://www.investopedia.com/thmb/FK_6mPMkZZJpnU79-BTkABWdT_M=/1000x1000/smart/filters:no_upscale()/the-little-book-of-common-sense-investing-6bd67a804c8047ff8c4c935c3197271f.jpeg" alt=""/>
                </div>
                <div className={classes.contentRight}>
                    <div>
                        <div className={classes.title}><h3>Book Name</h3></div>
                        <div className={classes.content}>
                            <div className={classes.contentItem}>
                                <h5>Author:</h5>
                                <p><NavLink to="/book/author/1">Author name</NavLink></p>
                            </div>
                            <div className={classes.contentItem}>
                                <h5>Gender:</h5>
                                <p>Horror</p>
                            </div>
                            <div className={classes.contentItem}>
                                <h5>Gender:</h5>
                                <p>Horror</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={classes.title}><h3>Comments</h3></div>
                        <div className={classes.content}>
                            <div className={classes.contentItem}>
                                <h5>User name:</h5>
                                <p>Comment text</p>
                            </div>
                            <div className={classes.contentItem}>
                                <h5>User name:</h5>
                                <p>Comment text</p>
                            </div>
                            <div className={classes.contentItem}>
                                <h5>User name:</h5>
                                <p>Comment text</p>
                            </div>
                            <div className={classes.contentItem}>
                                <button className="btn btn-primary"> Add comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footerWrapper}>

            </div>
        </div>
    )
}

export default BookInfo;