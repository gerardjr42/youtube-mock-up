
export default function WatchSearchedVideo ( ) {
    const location = useLocation();
    const { videoData, channelData } = location.state;
    const { id, title } = useParams();
    const [isSubscribed, setIsSubscribed] = useState(false)
    // console.log(videoData);
    // console.log(channelData);
    // console.log(title);
  
    let views = videoData.statistics.viewCount.split("");
    let subs = channelData.statistics.subscriberCount.split("");
    let likes = videoData.statistics.likeCount.split("");
  
    const opts = {
      height: "680",
      width: "1210",
      playerVars: {
        // autoplay: 1,
      },
    };
  
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
        <>
          <YouTube videoId={id} opts={opts} className="ml-6 mt-3" />
          <h1 className="text-white text-xl mt-4 mb-2 ml-6">{videoData.snippet.title}</h1>
          <div className="flex  align-middle ml-6">
            <img
              src={channelData.snippet.thumbnails.high.url} // Access channel logo URL
              alt="logo"
              className="mr-3 h-9 w-9 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="text-white">{videoData.snippet.channelTitle}</h3>
              {/* <h3 className="text-white">{channelData.statistics.subscriberCount}</h3> */}
              {channelData.statistics && (
                <h3 className="text-[#AAA] text-xs">{`${convert(subs)} subscribers`}</h3>
              )}
            </div>
            <button 
            className={isSubscribed ? `bg-[#272727] rounded-full px-4 py-2 text-sm font-semibold ml-8 text-white flex align-middle items-center`: `bg-[#F1F1F1] rounded-full px-4 py-2 text-sm font-semibold ml-8`} 
            onClick={() => setIsSubscribed(!isSubscribed)}>
            {isSubscribed ? (
            <>
              <img src="/assets/images/notification-logo.png" className="w-5 h-5 mr-2" alt="notification logo"/>
              {"Subscribed"}
            </>
            ) : (
              "Subscribe"
            )}
          </button>
            <div className="ml-auto mr-auto flex align-middle items-center">
            <button className="bg-[#272727] text-white rounded-l-full border-r border-gray-500 px-4 py-2 text-sm font-semibold flex align-middle items-center">
              <img src="/assets/images/Like_logo.png" alt="like logo" className="mr-2 w-5 h-5"/>
              {`${convert(likes)}`}
            </button>
            <button className="bg-[#272727] text-white rounded-r-full  px-4 py-2 text-sm font-semibold mr-2 flex align-middle items-center">
              <img src="/assets/images/dislike-logo.png" alt="dislike logo" className=" w-5 h-5"/>
            </button>
            <button className="bg-[#272727] text-white rounded-full  px-4 py-2 text-sm font-semibold mr-2 flex align-middle items-center">
              <img src="/assets/images/share-logo.png" alt="share logo" className="w-5 h-5 mr-2"/>
              Share
            </button>
            <button className="bg-[#272727] text-white rounded-full  px-4 py-2 text-sm font-semibold mr-2 flex align-middle items-center">
              <img src="/assets/images/scissors-logo.png" alt="clip logo" className="w-5 h-5 mr-2"/>
              Clip
            </button>
            <button className="bg-[#272727] text-white rounded-full  px-4 py-2 text-sm font-semibold mr-2 flex align-middle items-center">
              <img src="/assets/images/add-list-logo.png" alt="save logo" className="w-5 h-5 mr-2"/>
              Save
            </button>
            <button className="bg-[#272727] text-white rounded-full  px-2 py-2 text-sm font-semibold flex align-middle items-center">
              <img src="/assets/images/dots-logo.png" alt="more logo" className="w-5 h-5"/>
            </button>
            </div>
          </div>
          <div className="bg-[#272727] ml-6 rounded-xl w-[72%] mt-4 py-2 px-3">
          <h3 className="text-white font-semibold">{`${convert(views)} views ${videoData.snippet.publishedAt}`}</h3>
          <h3 className="text-white text-sm truncate">{videoData.snippet.description}</h3>
          </div>
        </>
      );
    }