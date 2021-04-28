import React from "react";
import HeaderComponent from "../general/header/HeaderComponent";
import MenuComponent from "../general/menu/MenuComponent";
import FooterComponent from "../general/footer/FooterComponent";
import HomeSlider from "./HomeSlider";
import HomeContent from "./HomeContent";
import SliderData from "./SliderData";


class  HomePage extends React.Component {
    state = {
        searchText: '',
        content: {
            genders: [
                {
                    name: "Popular",
                    books: [
                        {
                            id:1,
                            name: "A",
                            author: "A",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:2,
                            name: "B",
                            author: "B",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:3,
                            name: "C",
                            author: "C",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:4,
                            name: "D",
                            author: "D",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:5,
                            name: "E",
                            author: "E",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:6,
                            name: "G",
                            author: "G",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:7,
                            name: "J",
                            author: "J",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:8,
                            name: "I",
                            author: "I",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        }
                    ]
                },
                {
                    name: "New books",
                    books: [
                        {
                            id:1,
                            name: "A",
                            author: "A",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:2,
                            name: "B",
                            author: "B",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:3,
                            name: "C",
                            author: "C",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:4,
                            name: "D",
                            author: "D",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:5,
                            name: "E",
                            author: "E",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:6,
                            name: "G",
                            author: "G",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:7,
                            name: "J",
                            author: "J",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:8,
                            name: "I",
                            author: "I",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        }
                    ]
                },
                {
                    name: "Old Books",
                    books: [
                        {
                            id:1,
                            name: "A",
                            author: "A",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:2,
                            name: "B",
                            author: "B",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:3,
                            name: "C",
                            author: "C",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:4,
                            name: "D",
                            author: "D",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:5,
                            name: "E",
                            author: "E",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:6,
                            name: "G",
                            author: "G",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:7,
                            name: "J",
                            author: "J",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        },
                        {
                            id:8,
                            name: "I",
                            author: "I",
                            info: "Послушайте хиты Кендрика Ламара, Cardi B, Леди Гаги, Post Malone, Арианы Гранде и других исполнителей, которые 10 февраля в Лос-Анджелесе будут бороться за престижную музыкальную награду."
                        }
                    ]
                }
            ]
        }
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
                <HomeContent content={this.state.content}/>
                <FooterComponent/>
            </div>
        )
    }
}

export default HomePage;