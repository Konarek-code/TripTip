import Blog from "../assets/Blogs.jpg";
import Books from "../assets/books.jpg";
import Checklistimg from "../assets/checklist.jpg";
import Yt from "../assets/yt.jpg";

export interface TipCardData {
  cardName: string;
  imageUrl: string;
  title: string;
}

export const tipsCardsData: TipCardData[] = [
  { cardName: "BestTravelBlogs", imageUrl: Blog, title: "Travel Blogs" },
  { cardName: "TravelBooks", imageUrl: Books, title: "Books before trips" },
  { cardName: "ChecklistTable", imageUrl: Checklistimg, title: "Checklist" },
  { cardName: "YouTubeGuides", imageUrl: Yt, title: "YouTube Guides" },
];

export default tipsCardsData;
