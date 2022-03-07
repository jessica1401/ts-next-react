import { createContext, useContext, useState } from "react";
import NavBar from "../../components/NavBar";
import {Val} from '../_app';
const Login = () => {
    const va = useContext(Val)
    const [inputFiels, setInputFiels] = useState({
        name: '',
        contact: '',
        email: ''
    })
  const submitForm = (event) => {
    event.preventDefault();
    setInputFiels((preValue) => {
        return {
            name: '',
            contact: '',
            email: ''
        }
    })
  };

  const inputChanged = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputFiels((preValue) => {
          return {
              ...preValue,
              [name]: value
          }
      })
  }
  return (
    <>
        <NavBar></NavBar>
      <h1>This is login Form</h1>
      <p>{va}</p>
      <p>{inputFiels.name}</p>
      <p>{inputFiels.contact}</p>
      <p>{inputFiels.email}</p>
      <form onSubmit={submitForm}>
        <input value={inputFiels.name} onChange={inputChanged} type={`text`} placeholder="Enter name" name="name"></input>
        <br />
        <br />
        <input value={inputFiels.contact} onChange={inputChanged} type={`number`} placeholder="Enter phone number" name="contact"></input>
        <br />
        <br />
        <input value={inputFiels.email} onChange={inputChanged} type={`email`} placeholder={`Enter Email`} name="email"></input>
        <br />
        <br />
        <button>Submit</button>
      </form>
  
    </>
    
  );
};

export default Login;