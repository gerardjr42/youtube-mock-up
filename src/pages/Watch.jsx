import { useLocation, useParams } from "react-router-dom";
import YouTube from "react-youtube";

export default function Watch() {
  const location = useLocation();
  const { videoData, channelData } = location.state;
  const { id, title } = useParams();
  // console.log(videoData);
  // console.log(channelData);
  // console.log(title);

  const opts = {
    height: "680",
    width: "1210",
    playerVars: {
      // autoplay: 1,
    },
  };

  let views = videoData.statistics.viewCount;
  let arr = views.split("");

  function convert(num) {
    if (num.length >= 4 && num.length <= 6) {
      arr = num.slice(0, 3).join("") + "K";
    } else if (num.length > 6) {
      arr = num.slice(0, 3).join("") + "M";
    } else if (num < 3) {
      return num;
    }
    return `${arr}`;
  }

  return (
    <>
      <YouTube videoId={id} opts={opts} className="ml-6 mt-12" />
      <h1 className="text-white">{videoData.snippet.title}</h1>
      <h3 className="text-white">{`${convert(arr)} views ${videoData.snippet.publishedAt}`}</h3>
      <div className="flex items-start align-top">
        <img
          src={channelData.snippet.thumbnails.high.url} // Access channel logo URL
          alt="logo"
          className="mr-3 h-9 w-9 rounded-full"
        />
      </div>
    </>
  );
}
