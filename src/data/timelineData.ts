import anquity from "../assets/anquity.png";
import medival from "../assets/medieval.png";
import renaissance from "../assets/Renaissance.png";
import modern from "../assets/Modern.png";

import dawnAsia from "../assets/dawnAsia.jpg";
import classicalAsia from "../assets/classicalAsia.jpg";
import medievalAsia from "../assets/medievalAsia.jpg";
import modernAsia from "../assets/modernAsia.jpg";

import ancientAfrica from "../assets/ancientAfrica.jpg";
import medievalAfrica from "../assets/medievalAfrica.jpg";
import earlyModernAfrica from "../assets/earlyModernAfrica.png";
import modernAfrica from "../assets/modernAfrica.jpg";

import nativeAmerica from "../assets/nativeAmerica.jpg";
import colonialAmerica from "../assets/colonialAmerica.jpg";
import independenceAmerica from "../assets/independenceAmerica.jpg";
import modernAmerica from "../assets/modernAmerica.jpg";

import preColumbus from "../assets/preColumbus.jpg";
import colonialSA from "../assets/colonialSA.jpg";
import independenceSA from "../assets/independenceSA.jpg";
import modernSA from "../assets/modernSA.jpg";

import aboriginal from "../assets/aboriginal.jpg";
import colonialOceania from "../assets/colonialOceania.png";
import federation from "../assets/federation.jpg";
import modernOceania from "../assets/modernOceania.jpg";

import earlyExploration from "../assets/earlyExploration.jpg";
import heroicAge from "../assets/heroicAge.jpg";
import postwarScience from "../assets/postwarScience.jpg";
import conservation from "../assets/conservation.jpg";

const EUROPE_TIMELINE = [
  {
    id: "ancient",
    label: "Ancient",
    description:
      "Ancient Europe was shaped by powerful civilizations like the Greeks and Romans. Their contributions to philosophy, law, architecture, and governance laid the groundwork for Western culture. From the Acropolis of Athens to the Colosseum in Rome, the echoes of antiquity still influence modern Europe.",
    image: anquity,
  },
  {
    id: "medieval",
    label: "Medieval",
    description:
      "The Middle Ages in Europe, spanning roughly from the 5th to the 15th century, were marked by feudalism, religious dominance, and frequent warfare. Castles and fortified cities rose across the landscape, while kingdoms and empires clashed in battles that shaped the continent’s political and cultural future. Despite the conflicts, it was also a time of growing identity, artistic expression, and the foundations of modern Europe",
    image: medival,
  },
  {
    id: "renaissance",
    label: "Renaissance",
    description:
      "Emerging from the shadows of the Middle Ages, the Renaissance sparked a revival of classical knowledge, art, and science. Later, the Enlightenment championed reason, rights, and reform — laying the intellectual foundation for modern Europe.",
    image: renaissance,
  },
  {
    id: "modern",
    label: "Modernity",
    description:
      "Europe in the modern era has been shaped by revolutions, empires, world wars, and unification efforts. From the French Revolution to the formation of the European Union, the continent has continually reinvented itsel",
    image: modern,
  },
];

const ASIA_TIMELINE = [
  {
    id: "ancient",
    label: "Ancient",
    description:
      "Ancient Asia saw the rise of Hinduism and Buddhism in the Indian subcontinent, the dynastic Shang and Zhou in China, and the development of writing, metallurgy, and trade along early Silk Roads.",
    image: dawnAsia,
  },
  {
    id: "classical",
    label: "Classical",
    description:
      "During the classical period, empires like the Maurya, Gupta, Han, and Tang flourished. Philosophers, poets, and scientists advanced knowledge in astronomy, mathematics, philosophy, and medicine.",
    image: classicalAsia,
  },
  {
    id: "medieval",
    label: "Medieval",
    description:
      "Medieval Asia was defined by the rise and expansion of Islamic caliphates, the Mongol Empire, and flourishing trade and cultural exchange across continents.",
    image: medievalAsia,
  },
  {
    id: "modern",
    label: "Modernity",
    description:
      "From the colonial period to independence movements and rapid modernization, Asia underwent dramatic political, technological, and economic transformations.",
    image: modernAsia,
  },
];

const AFRICA_TIMELINE = [
  {
    id: "ancient",
    label: "Ancient",
    description:
      "Ancient Africa hosted great empires such as Egypt, Kush, and Carthage, with achievements in architecture, writing (hieroglyphs, Ge'ez), and early trade across the Sahara.",
    image: ancientAfrica,
  },
  {
    id: "medieval",
    label: "Medieval",
    description:
      "Medieval Africa saw the rise of powerful inland empires like Ghana, Mali (with Timbuktu’s university), and Great Zimbabwe—centers of trade, learning, and gold.",
    image: medievalAfrica,
  },
  {
    id: "early-modern",
    label: "Early Modern",
    description:
      "From the 15th century, Portuguese, Dutch, and others arrived—leading to coastal trade posts, slave trade, resistance, and cultural exchanges.",
    image: earlyModernAfrica,
  },
  {
    id: "modern",
    label: "Modernity",
    description:
      "Colonial rule reshaped Africa until mid-20th century, followed by independence movements, nation-building, and contemporary efforts in economic growth and cultural resurgence.",
    image: modernAfrica,
  },
];

const NORTH_AMERICA_TIMELINE = [
  {
    id: "precolonial",
    label: "Pre‑Colonial",
    description:
      "Before European arrival, North America was home to diverse Indigenous civilizations like the Mississippian culture, Ancestral Puebloans, Iroquois Confederacy—rich in systems of governance, agriculture, and trade.",
    image: nativeAmerica,
  },
  {
    id: "colonial",
    label: "Colonial",
    description:
      "European powers colonized the continent, establishing New Spain, New France, British colonies—marked by conflict, settlement, resource extraction, and cultural exchange.",
    image: colonialAmerica,
  },
  {
    id: "independence",
    label: "Independence",
    description:
      "Colonies across the continent fought for independence—leading to the United States, Haiti, and later Canadian and Latin American independence movements.",
    image: independenceAmerica,
  },
  {
    id: "modern",
    label: "Modernity",
    description:
      "The 20th century brought industrialization, migration, Civil Rights, the rise of the U.S. and Canada as global powers, technological innovation, and complex multicultural societies.",
    image: modernAmerica,
  },
];

const SOUTH_AMERICA_TIMELINE = [
  {
    id: "precolonial",
    label: "Pre‑Colonial",
    description:
      "Great civilizations like the Inca, Moche, and Chavín thrived—building advanced cities, agriculture terraces, road systems, and rich cultural traditions.",
    image: preColumbus,
  },
  {
    id: "colonial",
    label: "Colonial",
    description:
      "Spanish and Portuguese colonization brought forced labor, Catholic missions, and reshaped social and economic structures.",
    image: colonialSA,
  },
  {
    id: "independence",
    label: "Independence",
    description:
      "Early 19th-century independence movements led by Bolivar, San Martín, and others liberated nations—forming modern republics.",
    image: independenceSA,
  },
  {
    id: "modern",
    label: "Modernity",
    description:
      "The 20th century featured periods of democracy and dictatorship, economic booms and crises, urbanization, and cultural flourishing in literature, art, and music.",
    image: modernSA,
  },
];

const OCEANIA_TIMELINE = [
  {
    id: "prehistoric",
    label: "Prehistoric",
    description:
      "Indigenous peoples—Aboriginal Australians and Pacific Islanders—established rich oral traditions, navigation, astronomy, art, and sustainable societies spanning at least 50,000 years.",
    image: aboriginal,
  },
  {
    id: "colonial",
    label: "Colonial",
    description:
      "From late 18th century, British colonization reshaped settlement patterns, land tenure, and Indigenous societies.",
    image: colonialOceania,
  },
  {
    id: "federation",
    label: "Federation",
    description:
      "Australia and New Zealand developed self-governance; Australia federated in 1901, New Zealand gained dominion status—laying foundations for modern democracies.",
    image: federation,
  },
  {
    id: "modern",
    label: "Modernity",
    description:
      "The region today is characterized by multicultural societies, Pacific cooperation, economic diversity, and cultural revitalization of Indigenous communities.",
    image: modernOceania,
  },
];

const ANTARCTICA_TIMELINE = [
  {
    id: "exploration",
    label: "Exploration",
    description:
      "Early 19th-century explorers like Bellingshausen, Wilkes and later Scott and Shackleton charted the continent through perilous expeditions.",
    image: earlyExploration,
  },
  {
    id: "heroic",
    label: "Heroic Era",
    description:
      "1901–1917 saw notable missions by Scott, Amundsen and Shackleton—defined by extraordinary endurance and tragedy.",
    image: heroicAge,
  },
  {
    id: "scientific",
    label: "Scientific Era",
    description:
      "Post‑WWII era brought permanent research stations, international cooperation and breakthroughs in climate science and glaciology.",
    image: postwarScience,
  },
  {
    id: "conservation",
    label: "Conservation",
    description:
      "Since the 1959 Antarctic Treaty, the continent is preserved for peace and science, with protocols to protect its ecosystems from human impact.",
    image: conservation,
  },
];

export const timelinesByContinent = {
  Europe: EUROPE_TIMELINE,
  Asia: ASIA_TIMELINE,
  Africa: AFRICA_TIMELINE,
  "North America": NORTH_AMERICA_TIMELINE,
  "South America": SOUTH_AMERICA_TIMELINE,
  Australia: OCEANIA_TIMELINE,
  Antarctica: ANTARCTICA_TIMELINE,
};
