import SearchedVideos from "./SearchedVideos";

export default function VideoList({ searchedVideos }) {
  return (
    <>
      <div className="mx-auto mt-4 grid w-[95%] grid-cols-4 gap-2">
        {searchedVideos.map((video) => {
          return <SearchedVideos video={video} key={video.id.videoId} />;
        })}
      </div>
    </>
  );
}
