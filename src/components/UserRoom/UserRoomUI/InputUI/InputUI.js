import React from "react"
import classes from "./InputUI.module.css"

const InputUI = (props)=>{
    const htmlFor = `${props.label}-${Math.random()}`;
    return(
        <div className={classes.inputWrapper}>
            <label htmlFor={htmlFor}>{props.label}:</label>
            <input type={props.type} id={htmlFor}  onChange={props.onChange} value={props.value} />
            {props.isValid ? null : <span></span>}
        </div>
    )
}

export default InputUI;