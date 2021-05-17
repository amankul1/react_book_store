import React from "react";
import classes from './AdminMenu.module.css';
import {NavLink} from "react-router-dom";

const AdminMenu = ()=>{
    return(
        <div className={classes.menuWrapper}>
            <div className={classes.menu}>
                <ul>
                    <NavLink to='/admin' activeClassName={classes.active} exact > <li> Personal info </li> </NavLink>
                    <NavLink to='/admin/users' activeClassName={classes.active} exact > <li> Users </li> </NavLink>
                    <NavLink to='/admin/authors' activeClassName={classes.active} exact > <li> Authors </li> </NavLink>
                    <NavLink to='/admin/categories' activeClassName={classes.active} exact > <li> Categories </li> </NavLink>
                    <NavLink to='/admin/books' activeClassName={classes.active} exact > <li> Books </li> </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default AdminMenu;
