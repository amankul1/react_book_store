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
                    <div className={classes.name}> Name </div>
                    <div className={classes.rating}> Rating </div>
                    <div className={classes.comments}> Comments </div>
                </div>
                {isExpended?
                    <div className={classes.bookDown}>
                        <div className={classes.bookImage}>
                            <div> image </div>
                        </div>
                        <div className={classes.bookComments}>
                            <div>Comments</div>
                            <div>Comments</div>
                            <div>Comments</div>
                        </div>
                    </div>: null}
            </div>
        </li>
    )
}

export default Book;