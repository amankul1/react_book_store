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
            genders:[],
            tempBooks:[],
            isProgress: false
        }
    }

    async componentDidMount() {
        this.myAxios = getAxios();
        try{
            this.setState({isProgress: true});
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
                        author: item.author? item.author.name: 'No name',
                        image: item.image?item.image.url:defImageBook,
                        category: item.category?item.category.name:null
                    });
                })
                const tempState = {...this.state}
                tempState.books = array;
                this.setState(tempState);
                this.subMenuHandler(this.state.activeGender);
            }
            this.setState({isProgress: false});
        }catch (e){
            alert("What went wrong 1 !");
        }
    }

    subMenuHandler = (name)=>{
        try{
            let st = {...this.state};
            st.activeGender = name;
            st.tempBooks=[];
            st.books.forEach((item)=>{
                if(item.category===name){
                    st.tempBooks.push(item);
                }
            })
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
                    books = {this.state.tempBooks}
                    genders = {this.state.genders}
                    activeGender = {this.state.activeGender}
                    isProgress= {this.state.isProgress}
                />

                <FooterComponent/>
            </div>
        )
    }
}

export default Category;