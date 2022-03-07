import { useState } from "react"; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMesssage] = useState('You are not logged In'); 


const changeValues = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if(name === 'username') {
        setUsername(value)
    } else if(name === 'password') {
        setPassword(value);
    }
}

const formSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content_type': 'application/json'
        },
        body: JSON.stringify({username, password})
    }).then(data => data.json());

    const token = res.token;
    if(token) {
        setMesssage('You are logged in');
    } else {
        setMesssage('Something is wrong');
    }

}

    return (<>
    <h1>{message}</h1>
    <form onSubmit={formSubmit}>
        <input name="username" placeholder="username" type="text" value={username} onChange={changeValues}></input>
        <br /><br />
        <input name="password" placeholder="password" type="password" value={password} onChange={changeValues}></input>
        <br /><br />
        <button type="submit">SUBMIT</button>
    </form>
    </>)
}

export default Login;