import { useState, useEffect } from "react"
import { getSearch, getStatistics } from "../fetch/fetch";

export default function SearchBar ({setSearchedVideos}) {

    const [searchVideo, setSearchVideo] = useState("");



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
        })
    }


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search-bar">
                        <input className="text-black"
                        required
                        placeholder="Search Video"
                        type="text"
                        value={searchVideo}
                        onChange={handleTextChange}
                        id="search-bar"
                        name="search-bar"
                        />
                    </label>
                    <button type="submit"> Search </button>
                </form>
            </div>
        </>
    )
};