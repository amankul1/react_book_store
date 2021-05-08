import React from "react";
import classes from "./BookCrad.module.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const BookCard = (props)=>{

    return(
        <Card className={classes.BookCard}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.list.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        {props.list.name}
                    </Typography>
                    {props.list.author ?
                        <Typography gutterBottom variant="h6" component="h6">
                            {props.list.author}
                        </Typography> :
                        null
                    }
                    {props.list.rating ?
                        <Typography gutterBottom variant="h6" component="h6">
                            Rating: {props.list.rating}
                        </Typography> :
                        null
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default BookCard;