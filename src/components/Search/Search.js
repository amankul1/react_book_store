import React from "react";
import HeaderComponent from "../general/header/HeaderComponent";
import FooterComponent from "../general/footer/FooterComponent";
import MenuComponent from "../general/menu/MenuComponent";
import classes from './Search.module.css'
import axios from "axios";
import {NavLink} from "react-router-dom";
import defBookImage from '../UserRoom/UserRoomIcons/default_book_image.png';
import authorImage from "../UserRoom/UserRoomIcons/author_image.png"

class Search extends React.Component{

    state={
        searchText: '',
        searchButValid: true,
        resultData: [],
    }

    searchHandler = (e)=>{
        this.setState({searchButValid: true});
        e.preventDefault();
        axios.get(`https://pj-bookstore.herokuapp.com/search?name=${this.state.searchText}`).then(
            response=>{
                this.setState({resultData: response.data});
                this.setState({searchButValid: false});
            }
        ).catch(
            e=>{
                alert(e.message);
            }
        )
    }

    searchChangeHandler=(e)=>{
        this.setState({searchText: e.target.value});
        if(e.target.value.length>0){
            this.setState({searchButValid: false})
        }else{
            this.setState({searchButValid: true})
        }
    }

    render() {
        console.log(this.state.resultData);
        return(
            <div>
                <HeaderComponent/>
                <MenuComponent/>
                <div className={classes.searchWrapper}>
                    <div className={classes.search}>
                        <form>
                            <label>Enter search text: </label>
                            <input type='text' value={this.state.searchText} onChange={this.searchChangeHandler}/>
                            <button disabled={this.state.searchButValid} onClick={this.searchHandler} className='btn btn-light'>Search</button>
                        </form>
                    </div>
                    <div className={classes.searchResult}>
                        {
                            this.state.resultData.length>1?
                                <>
                                    {
                                        this.state.resultData.map((item, index)=>{
                                            return(
                                                    !!item.type?
                                                        <NavLink to={`/book/info/${item.id}`}>
                                                            <div key={index} className={classes.card}>
                                                                <img src={defBookImage}  alt='' />
                                                                <span>{item.name}</span>
                                                            </div>
                                                        </NavLink>
                                                        :
                                                        item.name?
                                                            <NavLink to={`/book/author/${item.id}`}>
                                                                <div key={index} className={classes.card}>
                                                                    <img src={authorImage}  alt='' />
                                                                    <span>{item.name}</span>
                                                                </div>
                                                            </NavLink>:
                                                            null
                                            )
                                        })
                                    }
                                </>:
                                'Nothing'
                        }
                    </div>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}

export default Search;