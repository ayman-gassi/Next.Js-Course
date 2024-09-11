import { useRouter } from "next/router";
import { useEffect } from "react";
const PageNotFound = () => {
    const Navigation = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            Navigation.push('/')
        },3000)
    },[])
    return ( <p>Sorry <br></br> Page Not Found</p> );
}
 
export default PageNotFound;