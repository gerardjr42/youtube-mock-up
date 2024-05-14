import SearchedVideos from "../components/SearchedVideos"


export default function VideoList ({searchedVideos}) {

    return (
        <>
            <div className="grid grid-cols-4 w-[95%] mx-auto mt-12 gap-2">
            {searchedVideos.map(video => {
                return <SearchedVideos video={video}  key={video.id.videoId}/>
                })}
            </div>
        </>
    )
}