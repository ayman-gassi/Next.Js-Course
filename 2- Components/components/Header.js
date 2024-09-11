import Link from "next/link";

const Header = () => {
    return ( 
        <div>
            <Link href="/">Home</Link><br></br>
            <Link href={'/about'} >About</Link>
        </div>
     );
}
 
export default Header;