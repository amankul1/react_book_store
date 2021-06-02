import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function ProgressUI() {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{width: "100%", height:"100px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <CircularProgress color="secondary" />
        </div>
    );
}