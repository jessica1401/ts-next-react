import Link from 'next/link';
const NavBar = (props) => {
    return (
        <>
        <ul>
            <Link href="/"><a><li>Home</li></a></Link>
            <Link href="/images"><a><li>images</li></a></Link>
            <Link href={"/inc-dec"}><a><li>Increment / decrement</li></a></Link>
            <Link href={`/form`}><a><li>React Form Implementation</li></a></Link>
        </ul>
        </>
    )
}



export default NavBar;