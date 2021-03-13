import React from "react";
import {Box, Paper} from "@material-ui/core";
import classes from "./css/footer.module.css";

const FooterComponent = ()=>{
    return (
        <Box component="div" className={classes.footerWrapper}>
            <div className={classes.overBlock}>
                <Paper >
                    <ul className={classes.footerLinksList}>
                        <li><h5>Menu links</h5></li>
                        <li>Home</li>
                        <li>Category</li>
                        <li>Books</li>
                        <li>Authors</li>
                    </ul>
                </Paper>
                <Paper>
                    <ul className={classes.footerLinksList}>
                        <li><h5>Contact</h5></li>
                        <li>Tel: +996(XXX)-XXX-XXX</li>
                        <li>Email: teamproject@gmail.com</li>
                        <li>Address: г. Бишкек, ул. Манас, д. 08а</li>
                        <li>Имя. Name</li>
                    </ul>
                </Paper>
            </div>
            <div className={classes.lowBlock}>
                <span>Team Project</span>
            </div>
        </Box>
    )
}

export default FooterComponent;