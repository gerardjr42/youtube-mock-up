import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getChannel } from "../fetch/fetch";
import { formatDistanceToNow } from "date-fns";

export default function Video({ video}) {
  const [channel, setChannel] = useState({});

  const formattedDate = video.snippet.publishedAt
  const relativeTime = formatDistanceToNow(new Date(formattedDate), { addSuffix: true });
      

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

  let views = video.statistics.viewCount;
  let arr = views.split("");

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
    <Link 
      to={`/watch/${video.snippet.title.replaceAll(" ", "")}/${video.id}`} 
      state={{
        videoData: video,
        channelData: channel,
        relativeTime: relativeTime
        }}>
        {video.snippet.thumbnails.maxres ? (
              <img
                src={video.snippet.thumbnails.maxres.url}
                alt="thumbnail"
                className="mb-3 h-[215px] w-[380px] cursor-pointer rounded-xl shadow hover:rounded-none hover:delay-200"
                key={video.id}
              />
            ): (
              <img
                src={video.snippet.thumbnails.high.url}
                alt="thumbnail"
                className="mb-3 h-[215px] w-[380px] cursor-pointer rounded-xl shadow hover:rounded-none hover:delay-200"
                key={video.id}
              />
            )}
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
            {video.snippet.title}
          </h1>
        </div>
        <h3 className="ml-12 text-start text-sm text-[#AAA]">
          {video.snippet.channelTitle}
        </h3>
        <h3 className="mb-12 ml-12 text-start text-sm text-[#AAA]">{`${convert(arr)} ${relativeTime}`}</h3>
    </Link>
  );
}
