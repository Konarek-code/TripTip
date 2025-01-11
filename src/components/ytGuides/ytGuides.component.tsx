import React from "react";
import { Wrapper, Title } from "./ytGuides.style";

// interface Video {
//   id: string;
//   title: string;
//   thumbnail: string;
//   url: string;
// }

const YouTubeGuides: React.FC = () => {
  // const [videos, setVideos] = useState<Video[]>([]);

  // useEffect(() => {
  //   const fetchVideos = async () => {
  // const response = await fetch(
  // );
  // const data = await response.json();
  //   const videoList = data.items.map((item: any) => ({
  //     id: item.id.videoId,
  //     title: item.snippet.title,
  //     thumbnail: item.snippet.thumbnails.default.url,
  //     url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
  //   }));
  //   setVideos(videoList);
  // };

  //   fetchVideos();
  // }, []);

  return (
    <Wrapper>
      <Title>Poradniki YouTube</Title>
      {/* <VideoList>
        {videos.map((video) => (
          <VideoItem key={video.id}>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.title}</p>
            </a>
          </VideoItem>
        ))}
      </VideoList> */}
    </Wrapper>
  );
};

export default YouTubeGuides;
