const URL = import.meta.env.VITE_API_BASE_URL;

export function latestShow() {
  return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=8&key=${URL}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Fetching API was not successful")
    }
    return response.json();
  })
}
//Use this to get most new / popular videos:
// https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=8&key=${URL}

//Use this to get channel information for specific video
//https://www.googleapis.com/youtube/v3/channels?key=${URL}&part=snippet&id=UCOhtMAg7xh8wv_wUHMgFc-Q

export function getChannel(channelId) {
  return fetch(`https://www.googleapis.com/youtube/v3/channels?key=${URL}&part=snippet,statistics&id=${channelId}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Fetching channel information was not successful")
    }
    return response.json();
  })
}

export function getSearch (search) {
    return fetch(`https://www.googleapis.com/youtube/v3/search?key=${URL}&q=${search}&type=video&part=snippet&maxResults=8&chart=mostPopular`)
    .then(res => {
        if (!res.ok) {
            throw new Error("Fetching channel information was not successful");
        }
       return res.json()
    })
}

export function getSearchStatistics(videoId) {
  return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${URL}`)
  .then((response) => {
    if(!response.ok) {
      throw new Error("Fetching Stats information was not successful")
    }
    return response.json();
  })
}