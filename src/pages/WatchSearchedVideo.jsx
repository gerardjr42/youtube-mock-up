import YouTube from "react-youtube";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import CommentForm from "../components/CommentForm";

export default function WatchSearchedVideo() {
  const location = useLocation();
  const { videoData, channelData, stats, relativeTime } = location.state;

  const { videoId } = useParams();
  
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);

  let views = videoData.statistics.viewCount.split("");
  console.log(views)
  let subs = channelData.statistics.subscriberCount.split("");
  let likes = videoData.statistics.likeCount.split("");
  let comments = stats.statistics.commentCount;

  // const opts = {
  //   height: "680",
  //   width: "1210",
  //   playerVars: {
  //     // autoplay: 1,
  //   },
  // };

  const opts = {
    height: "680",
    width: "100%",
    playerVars: {
      // autoplay: 1,
    },
  };

  function checkComments(num) {
    return parseInt(num).toLocaleString();
  }

  function convert(num) {
    let arr = [];
    if (num.length === 4) {
      arr = num.slice(0, 1).join("") + "K";
    } else if (num.length === 5) {
      arr = num.slice(0, 2).join("") + "K";
    } else if (num.length === 6) {
      arr = num.slice(0, 3).join("") + "K";
    } else if (num.length === 7) {
      arr = num.slice(0, 1).join("") + "M";
    } else if (num.length === 8) {
      arr = num.slice(0, 2).join("") + "M";
    } else if (num.length === 9) {
      arr = num.slice(0, 3).join("") + "M";
    }
    return `${arr}`;
  }

  return (
    <>
      <YouTube videoId={videoId} opts={opts} className="ml-6 mt-3" />
      <h1 className="mb-2 ml-6 mt-4 text-xl text-white">
        {videoData.snippet.title}
      </h1>
      <div className="ml-6  flex align-middle">
        <img
          src={channelData.snippet.thumbnails.high.url}
          alt="logo"
          className="mr-3 h-9 w-9 rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="text-white">{videoData.snippet.channelTitle}</h3>
          {channelData.statistics && (
            <h3 className="text-xs text-[#AAA]">{`${convert(subs)} subscribers`}</h3>
          )}
        </div>
        <button
          className={
            isSubscribed
              ? `ml-8 flex items-center rounded-full bg-[#272727] px-4 py-2 align-middle text-sm font-semibold text-white`
              : `ml-8 rounded-full bg-[#F1F1F1] px-4 py-2 text-sm font-semibold`
          }
          onClick={() => setIsSubscribed(!isSubscribed)}
        >
          {isSubscribed ? (
            <>
              <img
                src="/assets/images/notification-logo.png"
                className="mr-2 h-5 w-5"
                alt="notification logo"
              />
              {"Subscribed"}
            </>
          ) : (
            "Subscribe"
          )}
        </button>
        <div className="ml-auto mr-auto flex items-center align-middle">
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
          <button className="mr-2 flex items-center  rounded-r-full bg-[#272727] px-4 py-2 align-middle text-sm font-semibold text-white">
            <img
              src="/assets/images/dislike-logo.png"
              alt="dislike logo"
              className=" h-5 w-5"
            />
          </button>
          <button className="mr-2 flex items-center  rounded-full bg-[#272727] px-4 py-2 align-middle text-sm font-semibold text-white">
            <img
              src="/assets/images/share-logo.png"
              alt="share logo"
              className="mr-2 h-5 w-5"
            />
            Share
          </button>
          <button className="mr-2 flex items-center  rounded-full bg-[#272727] px-4 py-2 align-middle text-sm font-semibold text-white">
            <img
              src="/assets/images/scissors-logo.png"
              alt="clip logo"
              className="mr-2 h-5 w-5"
            />
            Clip
          </button>
          <button className="mr-2 flex items-center  rounded-full bg-[#272727] px-4 py-2 align-middle text-sm font-semibold text-white">
            <img
              src="/assets/images/add-list-logo.png"
              alt="save logo"
              className="mr-2 h-5 w-5"
            />
            Save
          </button>
          <button className="flex items-center rounded-full  bg-[#272727] px-2 py-2 align-middle text-sm font-semibold text-white">
            <img
              src="/assets/images/dots-logo.png"
              alt="more logo"
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>
      <div className="ml-6 mt-4 w-[72%] rounded-xl bg-[#272727] px-3 py-2">
        <h3 className="font-semibold text-white">{`${convert(views)} views ${relativeTime}`}</h3>
        <h3 className="truncate text-sm text-white">
          {videoData.snippet.description}
        </h3>
      </div>
      <div className="flex flex-row items-center align-middle">
        <h1 className="mb-2 ml-6 mr-7 mt-4 text-xl font-bold text-white">{`${checkComments(comments)} Comments`}</h1>
        <img
          src="/assets/images/sortby-logo.png"
          alt="sortby logo"
          className="h-6 w-6"
        />
        <h1 className="text-base font-semibold text-white">Sort by</h1>
      </div>
      <CommentForm />
    </>
  );
}