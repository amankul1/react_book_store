import React from 'react';
import classes from "./ChangeImage.module.css"
import InputUI from "../../UserRoom/UserRoomUI/InputUI/InputUI";
import {NavLink} from "react-router-dom";

const ChangeImage = ()=>{
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
                />
                <br/>
                <NavLink to='/user/room/about/me' exact>
                    <button className='btn btn-secondary'> Cancel </button>
                </NavLink>
                <button className='btn btn-success'> Change </button>
            </form>
        </div>
    )
}

export default ChangeImage;