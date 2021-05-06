import classes from "./ActivateAccount.module.css";
import React from 'react';
function ActivateInfo(){

    return(
        <div className={classes.FormWrapper}>
            <form>
                <span><h5>Check your email and enter the code below !</h5></span>
                <span> <a href='https://gmail.com'>Gmail.com</a> </span>
            </form>
        </div>
    )

}

export default ActivateInfo;