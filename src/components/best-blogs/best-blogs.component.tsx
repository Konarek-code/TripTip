import React, { useEffect, useMemo, useState } from "react";
import { travelBlogs, TravelBlog } from "../../data/blogs";

import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion } from "framer-motion";
import {
  BlogsContainer,
  BlogInfo,
  BlogAuthor,
  PaginationCircles,
  BlogName,
  BlogLink,
} from "./best-blog.style";
import LanguageBar from "../languageBar/languageBar.component";
import { useSelector } from "react-redux";
import { selectCurrentLanguage } from "../../store/blogs/blogs.selector";

const BestTravelBlogs: React.FC = () => {
  const [blogs] = useState<TravelBlog[]>(travelBlogs);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === filteredBlogs.length - 1 ? 0 : prevIndex + 1,
      );
    },
    onSwipedRight: () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? filteredBlogs.length - 1 : prevIndex - 1,
      );
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const selectedLanguage = useSelector(selectCurrentLanguage);

  const filteredBlogs = useMemo(() => {
    if (selectedLanguage !== null) {
      return blogs.filter((blog) => blog.language === selectedLanguage);
    } else {
      const shuffledBlogs = [...blogs].sort(() => Math.random() - 0.5);
      return shuffledBlogs.slice(0, 4);
    }
  }, [selectedLanguage, blogs]);

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex >= filteredBlogs.length) {
      setCurrentIndex(0);
    }
  }, [filteredBlogs, currentIndex]);

  if (filteredBlogs.length === 0) {
    return (
      <div>
        <LanguageBar />
        <p>
          No blogs are available for the selected language. Please try again
          later.
        </p>
      </div>
    );
  }
  return (
    <>
      <LanguageBar />
      <BlogsContainer {...handlers}>
        <PaginationCircles>
          {filteredBlogs.map((_, index) => (
            <div
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => {
                setCurrentIndex(index);
              }}
            />
          ))}
        </PaginationCircles>
        <AnimatePresence mode="wait">
          <motion.div
            key={filteredBlogs[currentIndex].url}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              width: "100%",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <BlogInfo>
              <BlogName>{filteredBlogs[currentIndex].name}</BlogName>
              <p>{filteredBlogs[currentIndex].details}</p>
              <BlogLink
                href={filteredBlogs[currentIndex].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {filteredBlogs[currentIndex].name}
              </BlogLink>
            </BlogInfo>

            <BlogAuthor>
              <img src={filteredBlogs[currentIndex].img} alt="Traveler" />
              <h3>Author Info</h3>
              <p>Author: {filteredBlogs[currentIndex].author}</p>
              <p>Language: {filteredBlogs[currentIndex].language}</p>
            </BlogAuthor>
          </motion.div>
        </AnimatePresence>
      </BlogsContainer>
    </>
  );
};

export default BestTravelBlogs;
