import { useState, useEffect } from "react"
// import { getSearch } from "../fetch/fetch";

export default function SearchBar () {

    const [searchVideo, setSearchVideo] = useState("");


    function handleTextChange (event) {
        const search = event.target.value;
        setSearchVideo(search);
    }

    return (
        <>
            <div className="content-center">
                <input className=" w-96 rounded justify-center pl-2"
                placeholder="Search Video"
                type="text"
                value={searchVideo}
                onChange={handleTextChange}
                />
            </div>
        </>
    )
}