import React from "react";

const BookInfo = ({match, location})=> {

    return (
        <h1>
            {match.params['bookId']}
        </h1>
    )
}

export default BookInfo;