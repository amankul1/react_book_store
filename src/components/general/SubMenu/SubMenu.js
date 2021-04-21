import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from "@material-ui/core/ListSubheader";
import classes from "./SubMenu.module.css";

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const SubMenu =(props)=>{
    return (
        <div className={classes.SubMenu}>
            <List component="nav" aria-label="secondary mailbox folders" className={classes.list}>
                <ListSubheader component="div" id="nested-list-subheader" className={classes.listHeader}>
                    {props.title}
                </ListSubheader>

                {
                    props.genders.map((item, index)=>{
                        return(
                            <ListItemLink key={index} onClick={()=>{ props.onClick(item.name) }} className={classes.listItem}>
                                <ListItemText primary={item.name} />
                            </ListItemLink>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default SubMenu;