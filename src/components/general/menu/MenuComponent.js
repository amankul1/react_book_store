import React from "react";
import {Box, Button} from "@material-ui/core";
import classes from "./css/menu.module.css";
import {NavLink} from "react-router-dom";

const MenuComponent = ()=>{
    return (
        <Box component="div"  className={classes.menuWrapper}>
            <NavLink to="/home" exact activeClassName={classes.active} ><Button className={classes.menuLinks}  color="default"><span>HOME</span></Button></NavLink>
            <NavLink to="/category" exact activeClassName={classes.active}><Button className={classes.menuLinks}  color="default">CATEGORY</Button></NavLink>
            <NavLink to="/books" exact activeClassName={classes.active}><Button className={classes.menuLinks}  color="default">BOOKS</Button></NavLink>
            <NavLink to="/authors" exact activeClassName={classes.active}><Button className={classes.menuLinks}  color="default">AUTHORS</Button></NavLink>
            <NavLink to="/search" exact activeClassName={classes.active}><Button className={classes.menuLinks}  color="default">SEARCH</Button></NavLink>
        </Box>
    )
}

export default MenuComponent;