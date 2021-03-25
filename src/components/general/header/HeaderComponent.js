import React from "react";
import {TextField, Box, Button} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import classes from './css/header.module.css';
import logo from "../../userAuthorization/authorizationImages/logo.png"
import {NavLink} from "react-router-dom";


const HeaderComponent = (props)=>{

    return (
        <div className={classes.mainWrapper}>
            <Grid container spacing={0}>
                <Grid className={classes.headerItemsWrapper} item xs={4}>
                    <img className={classes.logoImage} src={logo} alt=""/>
                    <h3 style={{width:"100%", textAlign: "center    ", color: "#4F0A0A", fontWeight: "bold"}}>LIBOOKS</h3>
                </Grid>
                <Grid className={classes.headerItemsWrapper} item xs={5}>
                    <Box component="div" className={classes.searchWrapper}>
                        <TextField
                            style={{width:"90%"}}
                            id="outlined-textarea"
                            label="Search"
                            rowsMax={1}
                            placeholder="Enter book name"
                            multiline
                            value={props.searchText}
                            onChange={(event)=>{props.searchChangeHandler(event.target.value)}}
                        />
                    </Box>
                </Grid>
                <Grid className={classes.headerItemsWrapper} item xs={3}>
                    <Box component="div" className={classes.authorizationLinksWrapper}>
                        <NavLink to="/authentication"><Button color="default">Log in</Button></NavLink>
                        <div className={classes.vl}/>
                        <NavLink to="/registration"><Button color="default">Registration</Button></NavLink>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default HeaderComponent