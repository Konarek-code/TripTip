import europe1 from "../assets/Paris.png";
import europe2 from "../assets/Rome.png";
import europe3 from "../assets/Barcelona.jpg";
import asia1 from "../assets/Tokyo.jpg";
import asia2 from "../assets/Bangkok.jpg";
import asia3 from "../assets/Beijing.jpg";
import africa1 from "../assets/CapeTown.jpg";
import africa2 from "../assets/Marrakech.jpg";
import africa3 from "../assets/Nairobi.jpg";
import na1 from "../assets/NewYork.jpg";
import na2 from "../assets/Toronto.jpg";
import na3 from "../assets/MexicoCity.jpg";
import sa1 from "../assets/Rio.jpg";
import sa2 from "../assets/BuenosAires.jpg";
import sa3 from "../assets/Lima.jpg";
import aus1 from "../assets/Sydney.jpg";
import aus2 from "../assets/Melbourne.jpg";
import aus3 from "../assets/Brisbane.jpg";
import ant1 from "../assets/McMurdo.jpg";
import ant2 from "../assets/SouthPole.jpg";

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
        "The city of lights with rich history and romantic vibes. From the Eiffel Tower to charming cafes, Paris invites you to wander and dream.",
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
  Asia: [
    {
      image: asia1,
      title: "Tokyo, Japan",
      description:
        "A dazzling blend of traditional culture and futuristic innovation, Tokyo is a bustling metropolis of contrasts.",
    },
    {
      image: asia2,
      title: "Bangkok, Thailand",
      description:
        "Famous for ornate shrines and vibrant street life, Bangkok is Thailand’s capital and a hub for travelers in Southeast Asia.",
    },
    {
      image: asia3,
      title: "Beijing, China",
      description:
        "The capital of China, rich in history from the Forbidden City to the Great Wall, blending tradition with rapid modern development.",
    },
  ],
  Africa: [
    {
      image: africa1,
      title: "Cape Town, South Africa",
      description:
        "A stunning coastal city known for Table Mountain, diverse cultures, and rich history.",
    },
    {
      image: africa2,
      title: "Marrakech, Morocco",
      description:
        "A vibrant city known for its medina, souks, palaces, and distinctive red sandstone buildings.",
    },
    {
      image: africa3,
      title: "Nairobi, Kenya",
      description:
        "Kenya’s capital and gateway to safari adventures, blending urban life with wildlife conservation.",
    },
  ],
  "North America": [
    {
      image: na1,
      title: "New York City, USA",
      description:
        "The city that never sleeps, NYC is a melting pot of culture, commerce, and iconic landmarks like Times Square and Central Park.",
    },
    {
      image: na2,
      title: "Toronto, Canada",
      description:
        "A cosmopolitan city known for its diversity, skyline, and vibrant arts and food scene.",
    },
    {
      image: na3,
      title: "Mexico City, Mexico",
      description:
        "A cultural capital with Aztec roots, colorful neighborhoods, and world-class cuisine.",
    },
  ],
  "South America": [
    {
      image: sa1,
      title: "Rio de Janeiro, Brazil",
      description:
        "Famous for its Carnival, beaches, and the towering Christ the Redeemer statue, Rio pulses with energy.",
    },
    {
      image: sa2,
      title: "Buenos Aires, Argentina",
      description:
        "A city of tango, grand architecture, and rich European heritage blended with Latin spirit.",
    },
    {
      image: sa3,
      title: "Lima, Peru",
      description:
        "A coastal capital known for its colonial history and as a gateway to the ancient wonders of Peru.",
    },
  ],
  Australia: [
    {
      image: aus1,
      title: "Sydney, Australia",
      description:
        "Home to the Sydney Opera House and stunning beaches, it’s a vibrant harbor city with outdoor charm.",
    },
    {
      image: aus2,
      title: "Melbourne, Australia",
      description:
        "Known for arts, coffee culture, and sports, Melbourne is Australia's cultural capital.",
    },
    {
      image: aus3,
      title: "Brisbane, Australia",
      description:
        "A laid-back city with a warm climate, riverfront views, and access to the Great Barrier Reef.",
    },
  ],
  Antarctica: [
    {
      image: ant1,
      title: "McMurdo Station",
      description:
        "The largest research station in Antarctica, serving as a hub for scientific exploration on the icy continent.",
    },
    {
      image: ant2,
      title: "South Pole",
      description:
        "The southernmost point on Earth, marked by extreme conditions and hosting cutting-edge scientific observatories.",
    },
  ],
};

export default contentData;
