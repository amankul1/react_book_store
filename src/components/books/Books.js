import React from "react";
import HeaderComponent from "../general/header/HeaderComponent";
import MenuComponent from "../general/menu/MenuComponent";
import FooterComponent from "../general/footer/FooterComponent";
import BooksContent from "./BooksContent/BooksContent";
import axios from "axios";
import book_image from "../UserRoom/UserRoomIcons/default_book_image.png"

class  Books extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            books:[],
            tops:[
                {name: "By name"},
                {name: "By author"},
                {name: "By rating"}
            ],
            activeTitle: 'All books'
        }
    }

    componentDidMount() {
        let arr=[];
        axios.get('https://pj-bookstore.herokuapp.com/book').then(
            response =>{
                if(response.data.length > 0){
                    response.data.forEach((item)=>{
                        arr.push({
                            id: item.id,
                            name: item.name,
                            author: item.author?item.author.name: "No name",
                            image: item.image?item.image.url: book_image,
                            rating: item.averageRating? item.averageRating:0
                        });
                        this.setState({books: arr})
                    })
                }else{
                    this.setState({books: []})
                }
            }
        ).catch(
            e=>{
                alert(e.message);
            }
        )
    }


    subMenuHandler = (active) => {
        let type = active.toLowerCase();
        let st = {...this.state};
        switch (type) {

            case 'by name':
                this.setState({activeTitle: active});
                st.books.sort((a, b)=>a.name > b.name? 1 : -1);
                this.setState(st);
                break;
            case 'by author':
                this.setState({activeTitle: active});
                st.books.sort((a, b)=>a.author > b.author? 1 : -1);
                this.setState(st);
                break;
            case 'by rating':
                this.setState({activeTitle: active});
                st.books.sort((a, b)=>a.rating < b.rating? 1 : -1);
                this.setState(st);
                break;
        }
    }

    render() {
        return(
            <div>
                <HeaderComponent/>
                <MenuComponent/>
                <BooksContent
                    title={this.state.activeTitle}
                    onClick={this.subMenuHandler}
                    books = {this.state.books}
                    genders = {this.state.tops}
                />

                <FooterComponent/>
            </div>
        )
    }
}

export default Books;