import { useParams } from "react-router-dom";
import Video from "../components/Video";

export default function VideoList ({searchedVideos}) {

    return (
        <>
            <div className="grid grid-cols-4 w-[95%] mx-auto mt-12 gap-2">
            {searchedVideos.map(video => {
                return <Video video={video}  key={video.id.videoId}/>
                })}
            </div>
        </>
    )
}