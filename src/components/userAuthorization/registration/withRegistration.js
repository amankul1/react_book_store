import axios from "axios";
 const withRegistration = async (getInfo)=>{

     //return  await fetch('http://pj-bookstore.herokuapp.com/user');

    return await axios.get('http://pj-bookstore.herokuapp.com/user');
}

export default withRegistration;