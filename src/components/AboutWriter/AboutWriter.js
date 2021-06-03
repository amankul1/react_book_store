import React, {useState, useEffect} from "react";
import classes from "./AboutWriter.module.css";
import HeaderComponent from "../general/header/HeaderComponent";
import FooterComponent from "../general/footer/FooterComponent";
import {getAxios} from "../withAxios/withAxios";
import {NavLink, Redirect} from "react-router-dom";
import author_image from "../UserRoom/UserRoomIcons/author_image.png"
import ProgressUI from "../general/ProgressUI/ProgressUI";

const AboutWriter = ({match, location})=>{

    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [rating, setRating] = useState('');
    const [biography, setBiography] = useState('');
    const [image, setImage] = useState(null);
    const [isAuthor, setIsAuthor] = useState(true);
    const [isProgress, setIsProgress] = useState(false);

    const getAuthorInfo = async (myAxios)=>{
        try{
            setIsProgress(true);
            const response = await myAxios.get(`/author/${match.params.id}`);
            setId(response.data.id);
            setName(response.data.name);
            setBirthDate(response.data.birthDate);
            setBiography(response.data.biography);
            setRating(response.data.averageRating);
            setImage(response.data.image ? response.data.image.url : author_image);
            setIsProgress(false);
        }catch (e){
            alert(e.message);
            setIsAuthor(false);
            setIsProgress(false);
        }
    }

    useEffect(()=>{
        getAuthorInfo(getAxios());
    }, []);

    if(isAuthor){
        return(
            <div>
                <div className={classes.headerWrapper}>
                    <HeaderComponent/>
                </div>
                {
                    !isProgress?
                        <div className={classes.contentWrapper}>
                            <div className={classes.contentLeft}>
                                <img src={image} alt=""/>
                            </div>
                            <div className={classes.contentRight}>
                                <div>
                                    <div className={classes.title}><h3>{name ? name: "Not name"} ( {birthDate?birthDate:"undefined"} ) </h3></div>
                                    <div className={classes.content}>
                                        <div className={classes.contentItem}>
                                            <h5>Rating:</h5>
                                            <p>{rating? rating.toFixed(2) : 'undefined'}</p>
                                        </div>
                                        <div className={classes.contentItem}>
                                            <h5>Books:</h5>
                                            <p>
                                                <NavLink to={`/author/books/${id}`}>
                                                    <button className="btn btn-light"> My books </button>
                                                </NavLink>
                                            </p>
                                        </div>
                                        <div className={classes.contentItem}>
                                            <h5>Biography:</h5>
                                            <p>
                                                {biography?biography:'Not biography yet'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>:
                        <ProgressUI/>

                }
                <div className={classes.footerWrapper}>
                    <FooterComponent/>
                </div>
            </div>
        )
    }else{
        return (
            <Redirect to='/' exact/>
        )
    }
}

export default AboutWriter;