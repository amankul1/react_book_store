import './App.css';
import Registration from "./components/userAuthorization/registration/Registration";
import Authentication from "./components/userAuthorization/authentication/Authentication"

function Car(props){
  return(
      <div>
        <div> Name: {props.name}</div>
        <div> Model: {props.model} </div>
        <div>Year: {props.year}</div>
      </div>
  )
}

function App() {
  return (
       <Registration/>
       //<Authentication/>
  );
}

export default App;
