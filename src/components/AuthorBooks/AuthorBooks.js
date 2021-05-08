import React from "react";
import classes from "./AuthorBooks.module.css"
import HeaderComponent from "../general/header/HeaderComponent";
import FooterComponent from "../general/footer/FooterComponent";
import BookCard from "../general/BookCard/BookCard";
import {NavLink} from "react-router-dom";
import book_image from "../UserRoom/UserRoomIcons/default_book_image.png"
import axios from "axios";

class AuthorBooks extends React.Component{
    state = {
        authorName: '',
        books:[],
    }

    componentDidMount() {
        const arr=[];
        axios.get(`https://pj-bookstore.herokuapp.com/book/author/${this.props.match.params.id}`).then(
            response=>{
                if(response.data.length>0){
                     response.data.forEach((item)=>{
                         arr.push({
                             id: item.id,
                             name: item.name,
                             rating: item.averageRating,
                             image: item.image?item.image.url:book_image
                         })
                         if(!this.state.authorName){
                             this.setState({authorName: item.author?item.author.name:''})
                         }
                        this.setState({books: arr})
                    })
                }

            }
        ).catch(
            e=>{
                alert(e.message);
            }
        )
    }

    render() {
        return(
            <div>
                <HeaderComponent/>
                <div className={classes.content}>
                    <div className={classes.contentTitle}>
                        <h4> {this.state.authorName?this.state.authorName:null} </h4>
                    </div>
                    <div className={classes.contentBooks}>
                        {
                            this.state.books.length > 0?
                                <>
                                    {
                                        this.state.books.map((item, index)=>{
                                            return(
                                                <NavLink to={`/book/info/${item.id}`} key={index}>
                                                    <BookCard
                                                        list={item}
                                                    />
                                                </NavLink>
                                            )
                                        })
                                    }
                                </>:
                                'Not books or loading, please wait some time'
                        }
                    </div>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}

export default AuthorBooks;