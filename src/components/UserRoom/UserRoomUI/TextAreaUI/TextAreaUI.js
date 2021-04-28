import React from "react";
import classes from "./TextAreaUI.module.css";


const TextAreaUI = (props)=>{
    const htmlFor = `${props.label}-${Math.random()}`;
    return(
        <div className={classes.textAreaWrapper}>
            <label htmlFor={htmlFor}>{props.label}:</label>
            <textarea  id={htmlFor} rows={props.rows} cols={props.cols} onChange={props.onChange} value={props.value} > </textarea>
            {props.isValid ? null : <span>Error</span>}
        </div>
    )
}

export default TextAreaUI;