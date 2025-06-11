import europe1 from "../assets/Paris.png";
import europe2 from "../assets/Rome.png";
import europe3 from "../assets/Barcelona.jpg";

export type Continent =
  | "Europe"
  | "Asia"
  | "Africa"
  | "North America"
  | "South America"
  | "Australia"
  | "Antarctica";

interface ContentItem {
  image: string;
  title: string;
  description: string;
}

type ContentMap = {
  [key in Continent]: ContentItem[];
};

const contentData: ContentMap = {
  Europe: [
    {
      image: europe1,
      title: "Paris, France",
      description:
        "The city of lights with rich history and romantic vibes, From The Eifel Tower to charming Cafes. Paris invitites you to wander and dream",
    },
    {
      image: europe2,
      title: "Rome, Italy",
      description:
        "The Eternal City, known for its nearly 3,000 years of globally influential art, architecture, and culture.",
    },
    {
      image: europe3,
      title: "Barcelona, Spain",
      description:
        "The capital of Catalonia, known for its art and architecture, including the famous Sagrada Família basilica.",
    },
  ],
  Asia: [],
  Africa: [],
  "North America": [],
  "South America": [],
  Australia: [],
  Antarctica: [],
};

export default contentData;

// "Europe is a continent steeped in history, culture, and innovation. From the mythologies of ancient Greece to the grandeur of the Roman Empire, from medieval castles to Renaissance art, every corner of Europe tells a story that has shaped the world as we know it. Europe is rich in history, with ancient cities like Rome, Athens, and Paris offering a deep look into human civilization. Walking its cobblestone streets is like stepping back in time, where centuries of empires, revolutions, and artistic revolutions still echo through grand cathedrals, public squares, and iconic museums. Whether you’re exploring the snowy Alps, sun-soaked Mediterranean coasts, or vibrant capitals full of art, food, and architecture, Europe offers a unique blend of tradition and modernity found nowhere else.",
