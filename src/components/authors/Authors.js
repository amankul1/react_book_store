import React from "react";
import HeaderComponent from "../general/header/HeaderComponent";
import MenuComponent from "../general/menu/MenuComponent";
import FooterComponent from "../general/footer/FooterComponent";
import AuthorsContent from "./AuthorsContent/AuthorsContent";
import axios from "axios";

class  Authors extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            authors: []
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

    async componentDidMount() {
        try{
            const response =  await axios.get('http://pj-bookstore.herokuapp.com/author');
            let arr = [];
            response.data.forEach((item)=>{
                arr.push({id: item.id, name: item.name, image: item.image})
            })
            const tempState = {...this.state}
            tempState.authors = arr;
            this.setState(tempState);

        }catch (e){
            alert("What went wrong !")
        }
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

                <AuthorsContent
                    onClick={this.subMenuHandler}
                    authors = {this.state.authors}
                />

                <FooterComponent/>
            </div>
        )
    }
}

export default Authors;