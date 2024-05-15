import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSearch, getStatistics } from "../fetch/fetch";

export default function SearchBar({ setSearchedVideos }) {
  const [searchVideo, setSearchVideo] = useState("");

  const navigate = useNavigate();

  function resetSearch() {
    setSearchVideo("");
  }

  function handleTextChange(event) {
    const search = event.target.value;
    setSearchVideo(search);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getSearch(searchVideo)
      .then((response) => {
        response.items.map((item) => {
          getStatistics(item.id.videoId).then((res) =>
            res.items.map((x) =>
              response.items.map((o) => (o.statistics = x.statistics)),
            ),
          );
        });
        setSearchedVideos(response.items);
      })
      .then(() => navigate(`/results/${searchVideo}`));
  }

  return (
    <>
      <div className="flex w-full items-center justify-start bg-[#0F0F0F] py-3 text-white">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="search-bar"
            className="ml-72 flex items-center justify-center text-[#828282]"
          >
            <input
              className="w-[535px] rounded-l-full border border-gray-600 bg-[#0F0F0F] py-1 pl-3 text-white outline-none focus:border-blue-500"
              required
              placeholder="Search"
              type="text"
              value={searchVideo}
              onChange={handleTextChange}
              id="search-bar"
              name="search-bar"
              />
          <button className="py-1">
            <img
              src="/assets/images/search-logo.png"
              alt="search icon"
              className="rounded-r-full border border-gray-600 bg-[#222] px-4 py-2"
              />
          </button>
          <button className=" ml-5 rounded-full bg-[#222] p-[8px] hover:bg-[#3C3D3D]">
            <img src="/assets/images/Mic-Logo.png" alt="mic logo" />
          </button>
          {/* <span onClick={resetSearch} className="bg-white mr-1  text-black p-1 cursor-pointer">X</span>
                    <button type="submit"> Search </button> */}
        </label>
        </form>
      </div>
    </>
  );
}
