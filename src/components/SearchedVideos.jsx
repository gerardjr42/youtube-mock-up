import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getChannel } from "../fetch/fetch";

export default function SearchedVideos ({ video }) {

    const [channel, setChannel] = useState({});

    useEffect(() => {
        getChannel(video.snippet.channelId)
          .then((response) => {
            setChannel(response.items[0]);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [video.snippet.channelId]);

    return (
         <Link 
            to={`/watch/${video.snippet.channelTitle.replaceAll(" ", "")}/${video.id}`} 
            state={{
                videoData: video,
                channelData: channel
                }}>
                <img
                src={video.snippet.thumbnails.high.url}
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
        </Link>
    )
}

