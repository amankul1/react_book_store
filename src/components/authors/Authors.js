import React from "react";
import HeaderComponent from "../general/header/HeaderComponent";
import MenuComponent from "../general/menu/MenuComponent";
import FooterComponent from "../general/footer/FooterComponent";
import AuthorsContent from "./AuthorsContent/AuthorsContent";
import author_image from '../UserRoom/UserRoomIcons/author_image.png'
import axios from "axios";

class  Authors extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    componentDidMount() {

        axios.get('http://pj-bookstore.herokuapp.com/author').then(
            response=>{
                let arr = [];
                if(response.data.length>0){
                    response.data.forEach((item)=>{
                        arr.push({
                            id: item.id,
                            name: item.name,
                            image: item.image?item.image.url: author_image
                        })
                    })
                }
                this.setState({authors: arr});
            }
        ).catch(e=>{
            alert(e.message);
        })

    }

    subMenuHandler(name){
        alert(name);
    }

    render() {
        return(
            <div>
                <HeaderComponent/>
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