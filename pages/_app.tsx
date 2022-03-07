import { createContext } from 'react';
import '../styles/globals.css';
const Val = createContext('');

function MyApp({ Component, pageProps }) {
  return <>
  <Val.Provider value={`abc`}>
  <Component {...pageProps}></Component>
  </Val.Provider>
  </>
}

export default MyApp;
export {Val}
