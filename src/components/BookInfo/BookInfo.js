import React, {useState, useLayoutEffect, useContext} from "react";
import classes from "./BookInfo.module.css"
import HeaderComponent from "../general/header/HeaderComponent";
import {NavLink} from "react-router-dom";
import {getAxios, anotherAxios} from "../withAxios/withAxios";
import def_book_image from '../UserRoom/UserRoomIcons/default_book_image.png'
import {userContext} from "../../App";
import ModalWindow from "../general/ModalWindow/ModalWindow";
import InputUI from "../UserRoom/UserRoomUI/InputUI/InputUI";
import detIcon from "../UserRoom/UserRoomIcons/trashIcon.png";
import updateIcon from "../UserRoom/UserRoomIcons/changeIcon.png";
import CommentUpdateWindow from "../general/CommentUpdateWindow/CommentUpdateWindow";
import ProgressUI from "../general/ProgressUI/ProgressUI";

const BookInfo = ({match, location})=> {
    const myContext = useContext(userContext);
    const [isModal, setIsModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const modalWindowHandler = (st)=>{
        setIsModal(st);
    }
    const [bookID, setBookId] = useState(null);
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [gender, setGender] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');
    const [comments, setComments] =useState([]);
    const [pdfData, setPdfData] = useState('');

    const getBookInfo = async (myAxios) =>{
        try{
            const response = await myAxios.get(`/book/${match.params.id}`);
            setBookId(response.data.id);
            setName(response.data.name);
            setAuthor(response.data.author?response.data.author:"Not author");
            setGender(response.data.category?response.data.category.name: "undefined");
            setRating(response.data.averageRating);
            setImage(response.data.image?response.data.image.url: null);
            setComments(response.data.comments);
            setPdfData(response.data.data ? response.data.data : null);
        }catch (e){
            setIsModal(true);
            setModalMessage(e.message);
        }
    }

    useLayoutEffect(()=>{
        getBookInfo(getAxios());
    }, [])

    //-------------------------------------Add comment -------------------------------------

    const [isCommentAdding, setIsCommentAdding] = useState(false);
    const [text, setText] = useState('');
    const [isValid, setIsValid] = useState(false)
    const [ratingNumber, setRatingNumber] = useState(2);


    const addBookHandler = ()=>{
        if(!myContext.store.isLogin){
            modalWindowHandler(true);
            setModalMessage("Log in first")
        }else{
            setIsCommentAdding(true);
        }
    }

    const cancelHandler = (e)=>{
        e.preventDefault();
        setIsCommentAdding(false);
        setText('')
        setRatingNumber(2);
    }

    const addHandler = async (e)=>{
        e.preventDefault();
        const anAxios = anotherAxios(myContext.store.userToken);
        try{
            const response = await anAxios.post(`/book/comment/${match.params.id}`, {
                "rating": ratingNumber,
                "description": text
            });
            setComments(response.data.comments);
            setModalMessage("Success")
            modalWindowHandler(true);
            setText('');
            setRatingNumber(2);
            setIsCommentAdding(false);
        }catch (e){
            setModalMessage(e.message+ ' '+ match.params.id);
            modalWindowHandler(true);
            setText('');
            setRatingNumber(2);
            setIsCommentAdding(false);
        }
    }

    const delComment = async(commentId) =>{
        const myAxios = anotherAxios(myContext.store.userToken);

        if(!myContext.store.isLogin){
            modalWindowHandler(true);
            setModalMessage("Log in first")
        }else{
            try{
                const response = await myAxios.delete(`/book/comment/${bookID}/${commentId}`);
                setRating(response.data.averageRating);
                setComments(response.data.comments);
                setIsModal(true);
                setModalMessage("The comment was deleted");
            }catch (e){
                setIsModal(true);
                setModalMessage(e.message);
            }
        }
    }
//--------------------------------Update comment---------------------------------------------------
    const [isUpdate, setIsUpdate] = useState(false);
    let [tempCommentId, setTempCommentId] = useState();
    let [tempComment, setTempComment] = useState();
    let [tempCommentRating, setTempCommentRating] = useState();

    const updateHandler = (e, id, comment, rating)=>{
        if(!myContext.store.isLogin){
            modalWindowHandler(true);
            setModalMessage("Log in first");
        }else {
            setIsUpdate(!isUpdate);
            setTempCommentId(id);
            setTempComment(comment);
            setTempCommentRating(rating);
        }
    }

    const updateComment = async(com, r)=>{
        const myAxios = anotherAxios(myContext.store.userToken);
        try{
            console.log(bookID, tempCommentId, com, r)
            const response = await myAxios.put(`/book/comment/${bookID}/${tempCommentId}`,
                {
                    "rating": r,
                    "description": com
                });
            setRating(response.data.averageRating);
            setComments(response.data.comments);
            setIsUpdate(false);
            setIsModal(true);
            setModalMessage("The comment was updated !");
        }catch (e){
            alert(e.message);
        }
    }

    return (
        <div>
            <ModalWindow
                message={modalMessage}
                status={isModal}
                onClick={modalWindowHandler}
            />
            <CommentUpdateWindow
                status={isUpdate}
                setStatus={setIsUpdate}
                updateComment={updateComment}
                rating={tempCommentRating}
                comment={tempComment}
            />

            <div className={classes.headerWrapper}>
                <HeaderComponent/>
            </div>

            {
                name?
                    <div className={classes.contentWrapper}>
                        <div className={classes.contentLeft}>
                            <img src={image?image:def_book_image} alt=""/>
                        </div>
                        <div className={classes.contentRight}>
                            <div>
                                <div className={classes.title}><h3>{name?name:"Not name"}</h3></div>
                                <div className={classes.content}>
                                    <div className={classes.contentItem}>
                                        <h5>Author:</h5>
                                        <p>
                                            {author? <NavLink to={`/book/author/${author.id}`}>{author.name}</NavLink>: "Not author"}
                                            '                                </p>
                                    </div>
                                    <div className={classes.contentItem}>
                                        <h5>Rating:</h5>
                                        <p>{rating?rating:"Not rating"}</p>
                                    </div>
                                    <div className={classes.contentItem}>
                                        <h5>Gender:</h5>
                                        <p>{gender?gender:"Not gender"}</p>
                                    </div>
                                    {
                                        pdfData?
                                            <div className={classes.contentItem}>
                                                <h5><a href={pdfData?pdfData.url:''} download> Download </a></h5>
                                            </div>:
                                            <h5>You can't download this book</h5>
                                    }
                                </div>
                            </div>
                            <div>
                                <div className={classes.title}><h3>Comments</h3></div>
                                <div className={classes.content}>
                                    {comments.length > 0?
                                        comments.map((item, index)=>{
                                            return(
                                                <div key={index} className={classes.contentCommentsItem}>
                                                    <div className={classes.userName}>{item.user? item.user.name: "undefined"}:</div>
                                                    <div className={classes.commentMessage}>{item.description? item.description:"Not massage"}</div>
                                                    <div className={classes.commentRating}> Rating: {item.rating} </div>
                                                    <div className={classes.delUpdButtons}>
                                                        <img src={updateIcon} onClick={(e)=>{updateHandler(e,item.id, item.description, item.rating)}} alt='' />
                                                        <img src={detIcon} onClick={()=>{delComment(item.id)}} alt='' />
                                                    </div>
                                                </div>

                                            )
                                        }):
                                        <div className={classes.contentItem}>
                                            <p>Not comments yet</p>
                                        </div>
                                    }
                                    {
                                        isCommentAdding?
                                            <div className={classes.contentItem}>
                                                <form className={classes.commentForm}>
                                                    <InputUI
                                                        label="Rating (0-5)"
                                                        type='Number'
                                                        isValid={true}
                                                        onChange={(e)=>{
                                                            setRatingNumber(e.target.value);
                                                        }}
                                                        value={ratingNumber}
                                                    />

                                                    <InputUI
                                                        label="Comment text"
                                                        type='text'
                                                        isValid={isValid}
                                                        onChange={(e)=>{
                                                            setText(e.target.value)
                                                            if(e.target.value.length > 0){
                                                                setIsValid(true)
                                                            }else{
                                                                setIsValid(false);
                                                            }
                                                        }}
                                                        value={text}
                                                    />
                                                    <button className='btn btn-warning' onClick={cancelHandler}>Cancel</button>
                                                    <button className='btn btn-success' onClick={addHandler}>Add</button>
                                                </form>
                                            </div>:
                                            <div className={classes.contentItem}>
                                                <button className="btn btn-primary" onClick={addBookHandler}> Add comment</button>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>:
                    <ProgressUI/>
                }
            }

            <div className={classes.footerWrapper}>

            </div>
        </div>
    )
}

export default BookInfo;