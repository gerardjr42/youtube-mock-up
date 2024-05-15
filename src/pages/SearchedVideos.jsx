import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getChannel, getStatistics } from "../fetch/fetch";

export default function SearchedVideos({ video }) {
  const [channel, setChannel] = useState({});
  const [videoStats, setVideoStats] = useState({});

  useEffect(() => {
    getStatistics(video.id.videoId)
      .then((response) => {
        setVideoStats(response.items[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [video.id.videoId]);

  //useEffect to mount the channel logo to each Video
  useEffect(() => {
    getChannel(video.snippet.channelId)
      .then((response) => {
        setChannel(response.items[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [video.snippet.channelId]);

  let views;
  if (videoStats && videoStats.statistics) {
    views = videoStats.statistics.viewCount.split("");
  }

  let formattedDate;
  let relativeTime;
  if (videoStats && videoStats.snippet) {
    formattedDate = videoStats.snippet.publishedAt;
    relativeTime = formatDistanceToNow(new Date(formattedDate), {
      addSuffix: true,
    });
  }

  function convert(num) {
    let arr = "";
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
    <div>
      {videoStats && videoStats.snippet && (
        <div>
          <Link
            to={`/results/${video.snippet.title.replaceAll(" ", "")}/${video.id.videoId}`}
            state={{
              videoData: video,
              channelData: channel,
              stats: videoStats,
              relativeTime: relativeTime,
            }}
          >
            {videoStats.snippet.thumbnails.maxres ? (
              <img
                src={videoStats.snippet.thumbnails.maxres.url}
                alt="thumbnail"
                className="mb-3 h-[215px] w-[380px] cursor-pointer rounded-xl shadow hover:rounded-none hover:delay-200"
                key={videoStats.id}
              />
            ) : (
              <img
                src={videoStats.snippet.thumbnails.high.url}
                alt="thumbnail"
                className="mb-3 h-[215px] w-[380px] cursor-pointer rounded-xl shadow hover:rounded-none hover:delay-200"
                key={videoStats.id}
              />
            )}
          </Link>
          <div className="flex items-start align-top">
            {channel && channel.snippet && (
              <img
                src={channel.snippet.thumbnails.high.url}
                alt="logo"
                className="mr-3 h-9 w-9 rounded-full"
                key={channel.id}
              />
            )}
            <h1 className="mt-2 truncate text-start text-white">
              {videoStats.snippet.title}
            </h1>
          </div>
          <h3 className="ml-12 text-start text-sm text-[#AAA]">
            {videoStats.snippet.channelTitle}
          </h3>
          <h3 className="mb-12 ml-12 text-start text-sm text-[#AAA]">{`${convert(views)} • ${relativeTime}`}</h3>
        </div>
      )}
    </div>
  );
}