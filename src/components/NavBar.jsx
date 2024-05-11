import { Link } from "react-router-dom";

export default function NavBar () {
    return (
        <div className=' NavBar bg-red-500 space-x-4 gap:4px px-3  text-white justify-start flex flex-auto' > 
            <Link to="/"><p>YouTube</p></Link>
            <Link to="/about"><p>About</p></Link>
        </div>


    );
}