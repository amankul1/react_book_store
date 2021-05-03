import React from "react";
import HeaderComponent from "../general/header/HeaderComponent";
import MenuComponent from "../general/menu/MenuComponent";
import FooterComponent from "../general/footer/FooterComponent";
import CategoryContent from "../category/CategoryContent/CategoryContent";
import {getAxios} from "../withAxios/withAxios";

class  Category extends React.Component{
    myAxios;

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
                    }
                ],
            genders:[]

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
        this.myAxios = getAxios();
        try{
            const response =  await this.myAxios.get('/category');
            let arr = [];
            if(response.data.length > 0){
                response.data.forEach((item)=>{
                    arr.push({name: item.name})
                })
                const tempState = {...this.state}
                tempState.genders = arr;
                this.setState(tempState);
            }
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

                <CategoryContent
                    onClick={this.subMenuHandler}
                    books = {this.state.books}
                    genders = {this.state.genders}
                />

                <FooterComponent/>
            </div>
        )
    }
}

export default Category;