import YouTube from "react-youtube";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import CommentForm from "../components/CommentForm";

export default function Watch() {
  const location = useLocation();
  const { videoData, channelData, relativeTime } = location.state;
  const { id } = useParams();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);

  let views = videoData.statistics.viewCount.split("");
  let subs = channelData.statistics.subscriberCount.split("");
  let likes = videoData.statistics.likeCount.split("");
  let comments = videoData.statistics.commentCount;

  function checkComments(num) {
    return parseInt(num).toLocaleString();
  }
  const opts = {
    height: "680",
    width: "100%",
    playerVars: {
      // autoplay: 1,
    },
  };

  function convert(num) {
    let arr = []
      if (num.length === 4) {
        arr = num.slice(0, 1).join("") + "K";
      } else if (num.length === 5 ) {
        arr = num.slice(0,2).join("") + "K"
      } else if (num.length === 6) {
        arr = num.slice(0, 3).join("") + "K";
      } else if (num.length === 7) {
        arr = num.slice(0,1).join("") + "M"
      } else if (num.length ===8) {
        arr = num.slice(0,2).join("") + "M"
      } else if (num.length === 9) {
        arr = num.slice(0,3).join("") + "M"
      }
      return `${arr}`;
    }

    return (
      <>
        <YouTube videoId={id} opts={opts} className="ml-6 mt-3" />
        <h1 className="text-white text-xl mt-4 mb-2 ml-6">{videoData.snippet.title}</h1>
        <div className="flex  align-middle ml-6">
          <img
            src={channelData.snippet.thumbnails.high.url}
            alt="logo"
            className="mr-3 h-9 w-9 rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="text-white">{videoData.snippet.channelTitle}</h3>
            {channelData.statistics && (
              <h3 className="text-[#AAA] text-xs">{`${convert(subs)} subscribers`}</h3>
            )}
          </div>
          <button 
          className={isSubscribed ? `bg-[#272727] rounded-full px-4 py-2 text-sm font-semibold ml-8 text-white flex align-middle items-center`: `bg-[#F1F1F1] rounded-full px-4 py-2 text-sm font-semibold ml-8`} 
          onClick={() => setIsSubscribed(!isSubscribed)}>
          {isSubscribed ? (
          <>
            <img src="/assets/images/notification-logo.png" className="w-5 h-5 mr-2" alt="notification logo"/>
            {"Subscribed"}
          </>
          ) : (
            "Subscribe"
          )}
        </button>
          <div className="ml-auto mr-auto flex align-middle items-center">
          <button
            className="flex items-center rounded-l-full border-r border-gray-500 bg-[#272727] px-4 py-2 align-middle text-sm font-semibold text-white"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <>
                <img
                  src="/assets/images/like-stat-logo.png"
                  alt="like logo"
                  className="mr-2 h-5 w-5 active:-translate-y-4 active:scale-110 duration-300"
                />
                {`${convert(likes)}`}
              </>
            ) : (
              <>
                <img
                  src="/assets/images/Like_logo.png"
                  alt="like logo"
                  className="mr-2 h-5 w-5 active:-translate-y-4 active:scale-110 duration-300"
                />
                {`${convert(likes)}`}
              </>
            )}
          </button>
          <button className="bg-[#272727] text-white rounded-r-full  px-4 py-2 text-sm font-semibold mr-2 flex align-middle items-center">
            <img src="/assets/images/dislike-logo.png" alt="dislike logo" className=" w-5 h-5"/>
          </button>
          <button className="bg-[#272727] text-white rounded-full  px-4 py-2 text-sm font-semibold mr-2 flex align-middle items-center">
            <img src="/assets/images/share-logo.png" alt="share logo" className="w-5 h-5 mr-2"/>
            Share
          </button>
          <button className="bg-[#272727] text-white rounded-full  px-4 py-2 text-sm font-semibold mr-2 flex align-middle items-center">
            <img src="/assets/images/scissors-logo.png" alt="clip logo" className="w-5 h-5 mr-2"/>
            Clip
          </button>
          <button className="bg-[#272727] text-white rounded-full  px-4 py-2 text-sm font-semibold mr-2 flex align-middle items-center">
            <img src="/assets/images/add-list-logo.png" alt="save logo" className="w-5 h-5 mr-2"/>
            Save
          </button>
          <button className="bg-[#272727] text-white rounded-full  px-2 py-2 text-sm font-semibold flex align-middle items-center">
            <img src="/assets/images/dots-logo.png" alt="more logo" className="w-5 h-5"/>
          </button>
          </div>
        </div>
        <div className="bg-[#272727] ml-6 rounded-xl w-[72%] mt-4 py-2 px-3">
        <h3 className="text-white font-semibold">{`${convert(views)} views ${relativeTime}`}</h3>
        <h3 className="text-white text-sm truncate">{videoData.snippet.description}</h3>
        </div>
        <div className="flex flex-row items-center align-middle">
      <h1 className="text-white text-xl font-bold mt-4 mb-2 ml-6 mr-7">{`${checkComments(comments)} Comments`}</h1>
      <img src="/assets/images/sortby-logo.png" alt="sortby logo" className="w-6 h-6" />
      <h1 className="text-white text-base font-semibold">Sort by</h1>
      </div>
      <CommentForm />
      </>
    );
  }
