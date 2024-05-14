import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"

export default function NavBar ({setSearchedVideos}) {
    return (
        <div className=' NavBar bg-red-500 space-x-4 gap:4px px-3  text-white  flex flex-auto h-10 '> 
            <Link to="/"><img src="https://pbs.twimg.com/media/GNeiDwEXUAA23WW?format=jpg&name=900x900" className="m-1 w-16 rounded-md"/></Link>
            <Link to="/about"><p className="m-2">About</p></Link>
            <SearchBar setSearchedVideos={setSearchedVideos}/>
        </div>


    );
}