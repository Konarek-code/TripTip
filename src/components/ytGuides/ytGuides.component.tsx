import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Wrapper,
  Title,
  Category,
  VideoList,
  VideoItem,
} from "./ytGuides.style";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

interface YouTubeApiResponse {
  items: Array<{
    id: { videoId: string };
    snippet: {
      title: string;
      thumbnails: {
        medium: { url: string };
      };
    };
  }>;
}

const YouTubeGuides: React.FC = () => {
  const [videosByCategory, setVideosByCategory] = useState<
    Record<string, Video[]>
  >({});

  const API_KEY = process.env.REACTAPP_API_KEY;

  const categoryQueries: Record<string, string> = {
    travel: "travel",
    tutorial: "travel tutorial",
    culture: "culture",
    technology: "Safety travek tips",
  };
  const maxResults = 10;
  const fetchVideos = async (category: string): Promise<void> => {
    try {
      const response = await axios.get<YouTubeApiResponse>(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            key: API_KEY,
            q: categoryQueries[category],
            type: "video",
            maxResults: maxResults,
            part: "snippet",
          },
        },
      );

      const fetchedVideos = response.data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      }));

      setVideosByCategory((prev) => ({
        ...prev,
        [category]: fetchedVideos,
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          `Error fetching videos for ${category}:`,
          error.response?.data,
        );
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  useEffect(() => {
    Object.keys(categoryQueries).forEach((category) => {
      void fetchVideos(category);
    });
  }, []);

  return (
    <Wrapper>
      <Title>Wybrane Filmy z YouTube</Title>
      {Object.keys(categoryQueries).map((category) => (
        <Category key={category}>
          <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
          <VideoList>
            {videosByCategory[category]?.length > 0 ? (
              videosByCategory[category].map((video) => (
                <VideoItem key={video.id}>
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <img src={video.thumbnail} alt={video.title} />
                    <p>{video.title}</p>
                  </a>
                </VideoItem>
              ))
            ) : (
              <p>Brak filmów do wyświetlenia.</p>
            )}
          </VideoList>
        </Category>
      ))}
    </Wrapper>
  );
};

export default YouTubeGuides;
