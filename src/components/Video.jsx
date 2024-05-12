import { useEffect, useState } from "react";
import { getChannel } from "../fetch/fetch";

export default function Video({ video }) {
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
  // let views = video.statistics.viewCount;
  // let arr = views.split("");
  
  // function convert(num) {
  //   if(num.length >= 4 && num.length <= 6) {
  //     arr = num.slice(0,3).join("") + "K"
  //   } else if (num.length > 6) {
  //     arr = num.slice(0,3).join("") + "M"
  //   } else if (num < 3) {
  //     return num
  //   }
  //   return `${arr} •`;
  // }

  return (
    <div className="">
      <img
        src={video.snippet.thumbnails.high.url}
        alt="thumbnail"
        className="h-[215px] w-[380px] cursor-pointer rounded-xl shadow hover:rounded-none hover:delay-200 mb-3"
      />
      <div className="flex items-start align-top">
        {channel.snippet && (
            <img
              src={channel.snippet.thumbnails.high.url} // Access channel logo URL
              alt="logo"
              className="rounded-full w-9 h-9 mr-3"
              key={channel.id}
            />
          )}
        <h1 className="mt-2 truncate text-start text-white">
          {video.snippet.title}
        </h1>
      </div>
      <h3 className="text-start text-[#AAA] ml-12 text-sm">
        {video.snippet.channelTitle}
      </h3>
      {/* <h3 className="text-start text-[#AAA] ml-12 mb-12 text-sm">{`${convert(arr)} ${video.snippet.publishedAt}`}</h3> */}
    </div>
  );
}
