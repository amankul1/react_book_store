import React, {useState} from "react";
import classes from './ModalWindow.module.css'
import xImage from "../../UserRoom/UserRoomIcons/refuseIcon.png"

const ModalWindow = (props)=>{

    if(props.status){
        return (
            <div className={classes.modalWindow}>
                <div className={classes.infoBox}>
                    <div className={classes.informationWrapper}>
                        <h5>Information</h5>
                        <img src={xImage} onClick={()=>{props.onClick(!props.status)}} alt=''/>
                    </div>
                    <div className={classes.content}>
                        {props.message}
                    </div>
                </div>
            </div>
        )
    }else{
        return null
    }
}

export default ModalWindow;