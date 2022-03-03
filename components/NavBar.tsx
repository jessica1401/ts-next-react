import Link from 'next/link';
const NavBar = () => {
    return (
        <>
        <ul>
            <Link href="/"><a><li>Home</li></a></Link>
            <Link href="/images"><a><li>images</li></a></Link>
        </ul>
        </>
    )
}

export default NavBar;