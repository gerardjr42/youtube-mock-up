import { useEffect} from "react";
import Video from "../components/Video";
import { latestShow } from "../fetch/fetch";
import { useLocation } from "react-router-dom";

export default function Home({videos, setVideos}) {
const location = useLocation();

  useEffect(() => {
    latestShow()
      .then((response) => {
        setVideos(response.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [location]);
  // console.log(videos)

  return (
    <div className="grid grid-cols-4 w-[95%] mx-auto mt-12 gap-2">
      {videos.map((video) => {
        return (
          <Video video={video} key={video.id.videoId} />
        )
      })}
    </div>
  );
}
