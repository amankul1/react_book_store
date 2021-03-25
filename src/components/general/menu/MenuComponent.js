import React from "react";
import {Box, Button} from "@material-ui/core";
import classes from "./css/menu.module.css";
import {NavLink} from "react-router-dom";

const MenuComponent = ()=>{
    return (
        <Box component="div"  className={classes.menuWrapper}>
            <NavLink to="/home" ><Button className={classes.menuLinks}  color="default"><span>HOME</span></Button></NavLink>
            <NavLink to="/category"><Button className={classes.menuLinks}  color="default">CATEGORY</Button></NavLink>
            <NavLink to="/books"><Button className={classes.menuLinks}  color="default">BOOKS</Button></NavLink>
            <NavLink to="authors"><Button className={classes.menuLinks}  color="default">AUTHORS</Button></NavLink>
        </Box>
    )
}

export default MenuComponent;