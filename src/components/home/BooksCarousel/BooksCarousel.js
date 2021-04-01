import React from "react";
import Carousel from "react-elastic-carousel";
import classes from "./BooksCarousel.module.css";
import BookCard from "./BookCard/BookCard";


const BooksCarousel = (props)=> {
    return (

        <Carousel className={classes.carousel}>
            {props.books.map((book, index)=>{
                return(
                     <BookCard key={index} book={book} />
                )
            })}
        </Carousel>
    )
}

export default BooksCarousel;