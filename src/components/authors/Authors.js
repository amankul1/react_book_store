import React from "react";
import HeaderComponent from "../general/header/HeaderComponent";
import MenuComponent from "../general/menu/MenuComponent";
import FooterComponent from "../general/footer/FooterComponent";
import AuthorsContent from "./AuthorsContent/AuthorsContent";

class  Authors extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            booksList : {
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
                ]
            },
            genders:[
                {
                    name: "Author Name"
                },
                {
                    name: "Author Name"
                },
                {
                    name: "Author Name"
                },{
                    name: "Author Name"
                },
                {
                    name: "Author Name"
                },
                {
                    name: "Author Name"
                }
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

    render() {
        return(
            <div>
                <HeaderComponent
                    searchText={this.state.searchText}
                    searchChangeHandler={this.searchChangeHandle}
                />
                <MenuComponent/>

                <AuthorsContent
                    booksList = {this.state.booksList}
                    genders = {this.state.genders}
                />

                <FooterComponent/>
            </div>
        )
    }
}

export default Authors;