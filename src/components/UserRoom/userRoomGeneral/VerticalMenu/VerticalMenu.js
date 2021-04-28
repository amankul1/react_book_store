import React, {useState} from "react"
import classes from "./VerticalMenu.module.css"
import changeImageIcon from "./../../UserRoomIcons/changeUserLogoImageIcon.png"
import {NavLink} from "react-router-dom";

const VerticalMenu = ( props )=>{
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className={classes.menuWrapper}>
            <div className={classes.imageWrapper}>
                <img className={classes.userImage} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" onClick={()=>{setIsClicked(!isClicked)}} alt=''/>
                {isClicked ? <img className={classes.changeUserImageIcon} src={changeImageIcon} alt=''/> : null}
            </div>
            <div className={classes.userRole}>
                <div>
                    {props.name}
                </div>
                <div>
                   ( {props.role} )
                </div>
            </div>
            <div className={classes.menuList}>
                <ul>
                    <NavLink activeClassName={classes.active} to="/user/room/about/me" exact > <li >About me</li> </NavLink>
                    {
                        props.role === 'writer' ? <>
                            <NavLink activeClassName={classes.active} to="/user/room/my/books" exact > <li>My books</li> </NavLink>
                            <NavLink activeClassName={classes.active} to="/user/room/add/book" exact > <li>Add book</li> </NavLink>
                        </> : null
                    }
                </ul>
            </div>
        </div>
    )
}

export default VerticalMenu;