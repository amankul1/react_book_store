import React from "react";
import HeaderComponent from "../general/header/HeaderComponent";
import MenuComponent from "../general/menu/MenuComponent";
import FooterComponent from "../general/footer/FooterComponent";
import CategoryContent from "../category/CategoryContent/CategoryContent";
import {getAxios} from "../withAxios/withAxios";
import defImageBook from "../UserRoom/UserRoomIcons/default_book_image.png"

class  Category extends React.Component{
    myAxios;

    constructor(props) {
        super(props);
        this.state = {
            activeGender: '',
            books:[],
            genders:[]

        }
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
                tempState.activeGender = arr[0].name;
                this.setState(tempState);
            }
        }catch (e){
            alert("What went wrong !")
        }
        try{
            const response =  await this.myAxios.get('/book');
            let array = [];
            if(response.data.length > 0){
                response.data.forEach((item)=>{
                    array.push({
                        id: item.id,
                        name: item.name,
                        author: item.author.name,
                        image: item.image?item.image.url:defImageBook
                    });
                })
                const tempState = {...this.state}
                tempState.books = array;
                this.setState(tempState);
            }
        }catch (e){
            alert("What went wrong !")
        }
    }

    subMenuHandler = (name)=>{
        try{
            let st = {...this.state};
            st.activeGender = name;
            this.setState(st);
        }catch (e){
            alert(e.message);
        }
    }

    render() {
        return(
            <div>
                <HeaderComponent/>
                <MenuComponent/>

                <CategoryContent
                    onClick={this.subMenuHandler}
                    books = {this.state.books}
                    genders = {this.state.genders}
                    activeGender = {this.state.activeGender}
                />

                <FooterComponent/>
            </div>
        )
    }
}

export default Category;