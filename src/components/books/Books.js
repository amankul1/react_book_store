import React from "react";
import HeaderComponent from "../general/header/HeaderComponent";
import MenuComponent from "../general/menu/MenuComponent";
import FooterComponent from "../general/footer/FooterComponent";
import BooksContent from "./BooksContent/BooksContent";

class  Books extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
                books:[
                    {
                        id:1,
                        name: "Karl Mark dfsvsd asdfvsd",
                        author: "KAZUO ISHIGUROs sdfsdf sdfv",
                        image: "https://media.glamour.com/photos/5e28a12e3fd2250008501147/master/w_400%2Cc_limit/Screen%2520Shot%25202020-01-22%2520at%25202.22.58%2520PM.png"
                    },
                    {
                        id:2,
                        name: "Karl Mark",
                        author: "KAZUO ISHIGURO",
                        image: "https://media.glamour.com/photos/5e28a12e3fd2250008501147/master/w_400%2Cc_limit/Screen%2520Shot%25202020-01-22%2520at%25202.22.58%2520PM.png"
                    },
                    {
                        id:3,
                        name: "Karl Mark",
                        author: "KAZUO ISHIGURO",
                        image: "https://media.glamour.com/photos/5e28a12e3fd2250008501147/master/w_400%2Cc_limit/Screen%2520Shot%25202020-01-22%2520at%25202.22.58%2520PM.png"
                    },
                    {
                        id:4,
                        name: "Karl Mark",
                        author: "KAZUO ISHIGURO",
                        image: "https://media.glamour.com/photos/5e28a12e3fd2250008501147/master/w_400%2Cc_limit/Screen%2520Shot%25202020-01-22%2520at%25202.22.58%2520PM.png"
                    },
                    {
                        id:5,
                        name: "Karl Mark",
                        author: "KAZUO ISHIGURO",
                        image: "https://media.glamour.com/photos/5e28a12e3fd2250008501147/master/w_400%2Cc_limit/Screen%2520Shot%25202020-01-22%2520at%25202.22.58%2520PM.png"
                    },
                    {
                        id:6,
                        name: "Karl Mark",
                        author: "KAZUO ISHIGURO",
                        image: "https://media.glamour.com/photos/5e28a12e3fd2250008501147/master/w_400%2Cc_limit/Screen%2520Shot%25202020-01-22%2520at%25202.22.58%2520PM.png"
                    }
                ],
            tops:[
                {name: "By date"},
                {name: "By name"},
                {name: "By author"},
                {name: "By rating"}
            ]

        }
    }

    searchChangeHandle = (text)=>{
        this.setState((prevState)=>{
            return(
                {searchText: text}
            )
        })
        console.log(this.state.searchText);
    }

    subMenuHandler(name){
        alert(name);
    }

    render() {
        return(
            <div>
                <HeaderComponent
                    searchText={this.state.searchText}
                    searchChangeHandler={this.searchChangeHandle}
                />
                <MenuComponent/>
                <BooksContent
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