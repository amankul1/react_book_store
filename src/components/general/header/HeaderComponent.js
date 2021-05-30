import React,{useContext, useState} from "react";
import {TextField, Box, Button} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import classes from './css/header.module.css';
import logo from "../../userAuthorization/authorizationImages/logo.png"
import {NavLink} from "react-router-dom";
import {userContext} from "../../../App";


const HeaderComponent = (props)=>{
    const myContext = useContext(userContext);
    const [isDrop, setIsDrop] = useState(false);

    const dropHandler = ()=>{
        setIsDrop(!isDrop);
    }

    const clickLogOutHandler =()=>{
        setIsDrop(!isDrop);
        myContext.setIsLogin(false);
        myContext.setUserEmail('');
        myContext.setUserToken('');
    }


    return (
        <div className={classes.mainWrapper}>
            <Grid container spacing={0}>
                <Grid className={classes.headerItemsWrapper} item xs={4}>
                    <img className={classes.logoImage} src={logo} alt=""/>

                </Grid>
                <Grid className={classes.headerItemsWrapper} item xs={4}>
                    <Box component="div" className={classes.searchWrapper}>
                        <h3 style={{width:"100%", textAlign: "center"}}><NavLink to="/" exact>LIBOOKS </NavLink></h3>
                    </Box>
                </Grid>
                <Grid className={classes.headerItemsWrapper} item xs={4}>
                    {
                        myContext.store.isLogin?
                            <Box component="div" className={classes.authorizationLinksWrapper}>
                                <img src={myContext.store.image} alt=''/>
                                <div className={classes.userRoomDropDownMenu}>
                                    <div className={classes.dropDownItem} onClick={dropHandler}>{myContext.store.userEmail}</div>
                                    {
                                        isDrop ? <> <div className={classes.dropDownItem} onClick={clickLogOutHandler}>Log out</div>
                                            <div className={classes.dropDownItem} onClick={()=>{setIsDrop(!isDrop);}}>
                                                {(myContext.store.role==='admin')?
                                                    <NavLink to='/admin' exact>
                                                        Go room
                                                    </NavLink>:
                                                    <NavLink to='/user/room/about/me' exact>
                                                        Go room
                                                    </NavLink>}
                                            </div>
                                        </> : null
                                    }
                                </div>
                            </Box>
                            :
                            <Box component="div" className={classes.authorizationLinksWrapper}>
                                <NavLink to="/authentication"><Button color="default">Log in</Button></NavLink>
                                <div className={classes.vl}/>
                                <NavLink to="/registration"><Button color="default">Registration</Button></NavLink>
                            </Box>
                    }
                </Grid>
            </Grid>
        </div>
    );

}

export default HeaderComponent