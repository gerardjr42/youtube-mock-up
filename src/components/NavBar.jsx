import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"

export default function NavBar ({setSearchedVideos}) {
    return (
        <div className='flex w-full items-center justify-start bg-[#0F0F0F] py-2 text-white'> 
            <Link to="/"><img src="/assets/images/Youtube-Logo-White.png" className="w-22 h-7 items-center ml-6"/></Link>
            <Link to="/about"><p className="ml-8 px-4 hover:text-pink-300">AboutUs</p></Link>
            <SearchBar setSearchedVideos={setSearchedVideos} />
        </div>
    );
}