import NavBar from '../components/NavBar'
import styles from '../styles/home.module.css'

const Home = () => {
  return(<>
  <NavBar></NavBar>
  <h1 className={styles.heading}>This is Home page</h1>
  </>)
};

export default Home;