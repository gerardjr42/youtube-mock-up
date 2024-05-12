import { useEffect} from "react";
import Video from "../components/Video";
import { latestShow } from "../fetch/fetch";

export default function Home({videos, setVideos}) {

  useEffect(() => {
    latestShow()
      .then((response) => {
        setVideos(response.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(videos)

  return (
    <div className="grid grid-cols-4 w-[95%] mx-auto mt-12 gap-2">
      {videos.map((video) => {
        return <Video video={video} key={video.id.videoId} />;
      })}
    </div>
  );
}
