import React from "react";
import classes from "./BookCrad.module.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const BookCard = (props)=>{

    return(
        <Card className={classes.BookCard}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.book.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                        {props.book.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h5">
                        {props.book.author}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Download
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default BookCard;