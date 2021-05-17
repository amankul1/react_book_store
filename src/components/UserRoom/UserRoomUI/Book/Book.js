import React, {useState} from "react";
import classes from "./Book.module.css";
import changeDataIcon from "../../UserRoomIcons/changeIcon.png";
import trashDataIcon from "../../UserRoomIcons/trashIcon.png";



const Book = (props)=>{

    const [isExpended, setIsExpended] = useState(false);
    const expendedHandler = () =>{
        setIsExpended(!isExpended);
    }
    return(
        <li className={classes.bookWrapper}>
            <div className={classes.bookLeft}>
                <span>{props.index+1}.</span>
                <img src={changeDataIcon} onClick={()=>{props.bookChange(props.id)}} alt=''/>
                <img src={trashDataIcon} onClick={()=>{props.bookDelete(props.id)}} alt=''/>
            </div>
            <div className={classes.bookRight} onClick={expendedHandler}>
                <div className={classes.bookTitles}>
                    <div className={classes.name}> {props.name} </div>
                    <div className={classes.rating}> {props.rating} </div>
                    <div className={classes.comments}> Comments </div>
                </div>
                {isExpended?
                    <div className={classes.bookDown}>
                        <div className={classes.bookComments}>
                            {props.comments.length > 0 ?
                                <>
                                    {
                                        props.comments.map((item, index)=>{
                                            return(
                                                <div className={classes.bookComments}>
                                                    <div className={classes.commentUserName}>{item.user.name}</div>
                                                    <div><p>{item.description}</p></div>
                                                    <span>Rating: {item.rating}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                                :
                                "No comments !"
                            }
                        </div>
                    </div>: null}
            </div>
        </li>
    )
}

export default Book;