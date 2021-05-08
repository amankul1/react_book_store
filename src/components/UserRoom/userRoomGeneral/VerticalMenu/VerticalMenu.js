import React, {useState, useContext} from "react"
import classes from "./VerticalMenu.module.css"
import changeImageIcon from "./../../UserRoomIcons/changeUserLogoImageIcon.png"
import {NavLink} from "react-router-dom";
import {userContext} from "../../../../App";
import author_image from '../../UserRoomIcons/author_image.png';

const VerticalMenu = ( props )=>{
    const myContext = useContext(userContext);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className={classes.menuWrapper}>
            <div className={classes.imageWrapper}>
                <img className={classes.userImage} src={myContext.store.image?myContext.store.image:author_image} onClick={()=>{setIsClicked(!isClicked)}} alt=''/>
                {isClicked ?
                    <NavLink to="/change/user/image" exact> <img className={classes.changeUserImageIcon} src={changeImageIcon} alt=''/> </NavLink>
                    : null}
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
                        props.role === 'writer' ?
                            <NavLink activeClassName={classes.active} to="/user/room/my/books" exact > <li>My books</li> </NavLink>
                            : props.role === 'moderator' ?
                            <NavLink activeClassName={classes.active} to="/user/room/my/books" exact > <li>Books</li> </NavLink>
                            :
                            null

                    }
                </ul>
            </div>
        </div>
    )
}

export default VerticalMenu;