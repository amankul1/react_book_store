import React from 'react';
import classes from "./ChangeImage.module.css"
import InputUI from "../../UserRoom/UserRoomUI/InputUI/InputUI";
import {NavLink, Redirect} from "react-router-dom";
import {userContext} from "../../../App";
import {anotherAxios} from "../../withAxios/withAxios";

const ChangeUserImage = ()=>{
    const myContext = React.useContext(userContext);
    const myAxios = anotherAxios(myContext.store.userToken);

    const [userImage, setUserImage] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const imageHandler = (e)=>{
        e.preventDefault();
        setUserImage(e.target.files[0]);
        setIsValid(true);
    }

    const sendHandler = async (e)=>{
        e.preventDefault();
        if(!userImage){
            setIsValid(false);
        }
        try{
            let data = new FormData();
            data.append('file', userImage);

            if(myContext.store.role === 'writer'){
                const response = await myAxios.put(`author/${myContext.store.userId}/image`, data);
                alert('Success');
            }else{
                const response = await myAxios.put('user/image', data);
                alert('Success');
            }
            setSuccess(true);
        }catch (e){
            alert(e.message)
        }
    }

    if(success){
        return(
            <Redirect to="/user/room/about/me" exact/>
        )
    }else{
        return(
            <div className={classes.changeImage}>
                <form>
                    <div>
                        <h4>Change image</h4>
                    </div>
                    <br/>
                    <InputUI
                        label = "New image"
                        type = "file"
                        onChange={imageHandler}
                        isValid={isValid}
                    />
                    <br/>
                    <NavLink to='/user/room/about/me' exact>
                        <button className='btn btn-secondary'> Cancel </button>
                    </NavLink>
                    <button className='btn btn-success' onClick={sendHandler}> Change </button>
                </form>
            </div>
        )
    }
}

export default ChangeUserImage;