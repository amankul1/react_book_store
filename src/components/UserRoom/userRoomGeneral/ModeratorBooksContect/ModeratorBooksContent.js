import React from "react";
import classes from "./ModeratorBooksContent.module.css"
import bookDownloadIcon from "../../UserRoomIcons/book-download_icon.png";
import okIcon from "../../UserRoomIcons/okIcon.png";
import refuseIcon from "../../UserRoomIcons/refuseIcon.png";


const ModeratorBooksContent = (props) =>{
    return(
        <div>
            <div className={classes.contentTitle}>
                <h3>Book list</h3>
            </div>
            <div className={classes.bookList}>
                <ul>
                    {
                        props.bookList.length > 0 ?
                            props.bookList.map((item, index)=>{
                                return(
                                    <li key={index}>
                                        <div className={classes.bookNumber}>{index + 1}.</div>
                                        <div className={classes.bookName}>{item.name}</div>
                                        <div className={classes.authorName}>{item.author.name}  </div>
                                        <div className={classes.controlIcons}>
                                            <a href={item.data?item.data.url:''} download><img src={bookDownloadIcon} alt=""/></a>
                                            <img src={okIcon} onClick={()=>{props.approveBook(item.id)}} alt=""/>
                                            <img src={refuseIcon} onClick={()=>{props.refuseBook(item.id)}} alt=""/>
                                        </div>
                                    </li>
                                )
                            }):
                            null
                    }
                </ul>
            </div>
        </div>
    )
}

export default ModeratorBooksContent;