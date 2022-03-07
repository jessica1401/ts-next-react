import { createContext, useState } from "react";
import NavBar from '../../components/NavBar';

const IncDec = () => {
    
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count == 0) {
            setCount(0);
            return;
        }
        setCount(count - 1);
    }
    return(
        <>
        <NavBar></NavBar>
        <button onClick={increment}>+</button>
        <h1>
            {count}
        </h1>
        <button onClick={decrement}>-</button>
        </>
    )
}

export default IncDec;