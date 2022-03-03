import Link from 'next/link';
import NavBar from '../../components/NavBar'
const Images = (props) => {
    let ar = (props.images);
    ar = ar.slice(0, 10);
    // console.log(ar)
    return (<>
    <NavBar></NavBar>
    <h1>This is iamges page</h1>
    {ar.map(image => {
        return (<div key={image.id}>
            <Link href={`/images/${image.id}`}><a><img src={image.url} width={200} height={200}></img></a></Link>
        </div>)
    })}
    </>)
};

export default Images;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();


    return {
        props: {
            images: data
        }
    }
}