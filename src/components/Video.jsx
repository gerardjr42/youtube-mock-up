import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getChannel } from "../fetch/fetch";

export default function Video({ video}) {
  const [channel, setChannel] = useState({});

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

  //Video views is displayed as a regular numerical number, convert it to how youtube has it:
  //Function should loop through the string, and if length > 4 & <=6 than add a "k" -> Ex: 312,231 = 300k
  //If length > 7 than add a "M" -> Ex: 2123123 = 2M

  let views = video.statistics.viewCount;
  let arr = views.split("");

  function convert(num) {
    if (num.length >= 4 && num.length <= 6) {
      arr = num.slice(0, 3).join("") + "K";
    } else if (num.length > 6) {
      arr = num.slice(0, 3).join("") + "M";
    } else if (num < 3) {
      return num;
    }
    return `${arr} •`;
  }
  return (
    <Link 
      to={`/watch/${video.snippet.channelTitle.replaceAll(" ", "")}/${video.id}`} 
      state={{
        videoData: video,
        channelData: channel
        }}>
        <img
          src={video.snippet.thumbnails.maxres.url}
          alt="thumbnail"
          className="mb-3 h-[215px] w-[380px] cursor-pointer rounded-xl shadow hover:rounded-none hover:delay-200"
        />
        <div className="flex items-start align-top">
          {channel.snippet && (
            <img
              src={channel.snippet.thumbnails.high.url} // Access channel logo URL
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
        <h3 className="mb-12 ml-12 text-start text-sm text-[#AAA]">{`${convert(arr)} ${video.snippet.publishedAt}`}</h3>
    </Link>
  );
}
