import { useState} from "react"
import { getSearch, getStatistics } from "../fetch/fetch";
import { useNavigate } from "react-router-dom";

export default function SearchBar ({setSearchedVideos}) {

    const [searchVideo, setSearchVideo] = useState("");
    
    const navigate = useNavigate();

    function resetSearch () {
        setSearchVideo("")
    }

    function handleTextChange (event) {
        const search = event.target.value;
        setSearchVideo(search);
    }

    function handleSubmit (event) {
        event.preventDefault();
        getSearch(searchVideo)
        .then(response => {
            response.items.map(item => {
                getStatistics(item.id.videoId)
                .then(res => res.items.map(x => response.items.map(o => o.statistics = x.statistics)))
            })
            setSearchedVideos(response.items);

        }).then(() => navigate(`/results/${searchVideo}`))
    }


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search-bar">
                        <input className="text-black rounded-l-lg w-96 mt-1.5 pl-2"
                        required
                        placeholder="Search Video"
                        type="text"
                        value={searchVideo}
                        onChange={handleTextChange}
                        id="search-bar"
                        name="search-bar"
                        />
                    </label><span onClick={resetSearch} className="bg-white mr-1  text-black p-1 cursor-pointer">X</span>
                    <button type="submit"> Search </button>
                </form>
            </div>
        </>
    )
}