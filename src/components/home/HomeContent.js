import React from "react";
import BooksCarousel from "./BooksCarousel/BooksCarousel";

const style = {
    contentBlocks : {
        width: "100%",
        height: "450px",
    },
    contentBlocksTitle: {
        width: "100%",
        height: "15%",
        borderBottom: "1px solid rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "end",
        paddingLeft: "10%",
        fontSize: "1.8rem"
    },
    carouselBooksWrapper:{
        width: "100%",
        height: "85%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.3rem",
        padding: "30px 10% 0 10%"
    },
    contentWrapper:{
        width: "100%",
        display:"flex"
    },
    content: {
        width: "85%",
        borderRight: "1px solid rgba(0,0,0,0.3)"
    },
    reklama:{
        width: "15%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
    }

}

const HomeContent  = (props)=> {

    return (
        <div style={{
            width: "100%",
            padding: "20px 0 20px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexWrap: "wrap",
        }}>

                <div style={style.contentWrapper}>
                <div style={style.content}>
                    {
                        props.content.genders.map((item, index) => {
                            return (
                                <div key={index} style={style.contentBlocks}>
                                    <div style={style.contentBlocksTitle}>{item.name}</div>
                                    <div style={style.carouselBooksWrapper}>
                                        <BooksCarousel books={item.books}/>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                    <div style={style.reklama}>
                        Reclama
                    </div>
                </div>
        </div>
    )
}

export default HomeContent;