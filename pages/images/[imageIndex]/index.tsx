import { useRouter } from "next/router";
import Link from 'next/link'
import NavBar from '../../../components/NavBar'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/');
    const data = await res.json();
    let ar = data;
    ar = ar.slice(0, 10);

    const paths = ar.map((crr) => {
        return {
            params: {
                imageIndex: crr.id.toString(),
            } 
        }
    })

    console.log(paths)
    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps(context) {
    console.log(context)
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${context.params.imageIndex}`);
    const data = await res.json();


    return {
        props: {
            images: data
        }
    }
}

const particularImage = (props) => {
    const router = useRouter();
    console.log(props)
    return (<>
    <NavBar></NavBar>
    <h1>This is image of id : {props.images.id}</h1>
    <img src={props.images.url} width={200} height={200}></img><br /><br />
    <Link href="/" replace><a>Go Home</a></Link>
    </>)

}
export default particularImage;