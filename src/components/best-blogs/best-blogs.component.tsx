import React, { useState } from "react";
import {
  BlogsContainer,
  Title,
  BlogList,
  BlogItem,
  BlogName,
  BlogDetails,
  BlogLink,
} from "./best-blog.style";

interface TravelBlog {
  name: string;
  details: string;
  url: string;
}

const BestTravelBlogs: React.FC = () => {
  const [blogs] = useState<TravelBlog[]>([
    {
      name: "Busem Przez Świat",
      details:
        "Polski blog podróżniczy, którego autorzy pokazują, jak odkrywać świat na własnych zasadach.",
      url: "https://www.busemprzezswiat.pl",
    },
    {
      name: "The Blonde Abroad",
      details:
        "Blog podróżniczy prowadzony przez Kiki, pełen wskazówek dla solo podróżniczek.",
      url: "https://www.theblondeabroad.com",
    },
    {
      name: "Nomadic Matt",
      details:
        "Jeden z najpopularniejszych blogów podróżniczych, pełen praktycznych wskazówek i porad.",
      url: "https://www.nomadicmatt.com",
    },
    {
      name: "Polka w Podróży",
      details:
        "Blog prowadzony przez Polkę z pasją do podróżowania po Europie i świecie.",
      url: "https://www.polkawpodrozy.pl",
    },
    {
      name: "Be My Travel Muse",
      details:
        "Blog Kristin, który inspiruje kobiety do samodzielnych podróży.",
      url: "https://www.bemytravelmuse.com",
    },
  ]);

  return (
    <BlogsContainer>
      <Title>Best Travel Blogs</Title>
      <BlogList>
        {blogs.map((blog, index) => (
          <BlogItem key={index}>
            <BlogName>{blog.name}</BlogName>
            <BlogDetails>{blog.details}</BlogDetails>
            <BlogLink href={blog.url} target="_blank" rel="noopener noreferrer">
              Visit {blog.name}
            </BlogLink>
          </BlogItem>
        ))}
      </BlogList>
    </BlogsContainer>
  );
};

export default BestTravelBlogs;
