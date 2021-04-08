
function api(){
    fetch("http://pj-bookstore.herokuapp.com/author").
        then(data=>{
            console.log(data)
    })
}

export default api;