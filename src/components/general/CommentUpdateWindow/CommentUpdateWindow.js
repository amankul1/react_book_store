import React, {useState} from "react";
import classes from './CommentUpdateWindow.module.css'
import xImage from "../../UserRoom/UserRoomIcons/refuseIcon.png"

const CommentUpdateWindow = (props)=>{

    const [comment, setComment]=useState('');
    const [rating, setRating] = useState(-1);


    const changeComment = (e)=>{
        e.preventDefault();
        if(comment.length===0){
            alert('Write some text !')
        }else if(rating < 0 || rating > 5){
            alert('Enter rating number. It should be between [0 - 5] !');
        }else{
            props.updateComment(comment, rating);
        }
    }

    const commentHandler = (e)=>{
        setComment(e.target.value);
    }

    const ratingHandler = (e)=>{
        setRating(e.target.value);
    }

    if(props.status){
        return (
            <div className={classes.modalWindow}>
                <form>
                    <div>
                        <h3>Changing comment</h3>
                    </div>
                    <div>
                        <label>Comment: </label>
                        <input type='text' onChange={commentHandler} placeholder={props.comment}/>
                    </div>
                    <div>
                        <label>Rating (0-5): </label>
                        <input type='number' max={5} min={0} onChange={ratingHandler} placeholder={props.rating}/>
                    </div>
                    <button className='btn btn-light' onClick={(e)=>{e.preventDefault(); props.setStatus(!props.status)}}> Cancel </button>
                    <button className='btn btn-success' onClick={changeComment}> Change comment </button>
                </form>
            </div>
        )
    }else{
        return null
    }
}

export default CommentUpdateWindow;