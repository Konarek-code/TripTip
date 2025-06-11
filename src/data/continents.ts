import Europe from "../assets/euro.png";
import Africa from "../assets/africa.png";
import NorthAmerica from "../assets/namerica.png";
import SouthAmerica from "../assets/south-america.png";
import Asia from "../assets/asia.png";
import Australia from "../assets/australia.png";
import Antarctic from "../assets/antarctic.png";
import ALL from "../assets/All.png";

export interface Continent {
  name: string;
  image: string;
}

export const continents: Continent[] = [
  { name: "All", image: ALL },
  { name: "Europe", image: Europe },
  { name: "Africa", image: Africa },
  { name: "North America", image: NorthAmerica },
  { name: "South America", image: SouthAmerica },
  { name: "Asia", image: Asia },
  { name: "Australia", image: Australia },
  { name: "Antarctica", image: Antarctic },
];
