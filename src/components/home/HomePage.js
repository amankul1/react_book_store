import React from "react";
import HeaderComponent from "../general/header/HeaderComponent";
import MenuComponent from "../general/menu/MenuComponent";
import FooterComponent from "../general/footer/FooterComponent";
import HomeSlider from "./HomeSlider";
import HomeContent from "./HomeContent";
import SliderData from "./SliderData";
import {getAxios} from "../withAxios/withAxios";
import {array} from "prop-types";


class  HomePage extends React.Component {
    state = {
        searchText: '',
        oldBooks: {
            title: "Old Books",
            books: []
        },
        newBooks: {
            title: "New Books",
            books: []
        },

    }

    getBooks = async (myAxios, type)=>{
        try {
            const tempArr = [];
            const response = await myAxios.get(`https://pj-bookstore.herokuapp.com/carousel/?type=${type}`);
            response.data.forEach((item)=>{
                const authorName = item.author ? item.author.name : 'No name';
                tempArr.push({id: item.id, name: item.name, author: authorName, rating: item.averageRating, date: item.dateCreated, image: item.image})
            })

            if(type==='old'){
                const myState = {...this.state.oldBooks};
                myState.title = "Old Books";
                myState.books = tempArr;
                this.setState({oldBooks: myState});
            }else{
                const myState = {...this.state.newBooks};
                myState.title = "New Books";
                myState.books = tempArr;
                this.setState({newBooks: myState});
            }
        }catch (e){
            alert(e.message);
        }
    }

    componentDidMount() {
        this.getBooks(getAxios(), 'old');
        this.getBooks(getAxios(), 'NEW');
    }


    searchChangeHandle = (text) => {
        this.setState((prevState) => {
            return (
                {searchText: text}
            )
        })
        console.log(this.state.searchText);
    }

    render() {
        return (
            <div>
                <HeaderComponent
                    searchText={this.state.searchText}
                    searchChangeHandler={this.searchChangeHandle}
                />
                <MenuComponent/>
                <HomeSlider slides={SliderData}/>
                <HomeContent oldBooks={this.state.oldBooks} newBooks={this.state.newBooks}/>
                <FooterComponent/>
            </div>
        )
    }
}

export default HomePage;