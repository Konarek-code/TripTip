import React, { useEffect, useMemo, useState } from "react";
import Traveler from "../../assets/Traveler1.png";
import TravelerW from "../../assets/travelerW.png";
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

interface TravelBlog {
  name: string;
  details: string;
  url: string;
  author?: string;
  language?: string;
  img?: string;
}

const BestTravelBlogs: React.FC = () => {
  const [blogs] = useState<TravelBlog[]>([
    {
      name: "Busem Przez Świat",
      details:
        "Polski blog podróżniczy, którego autorzy pokazują, jak odkrywać świat na własnych zasadach.",
      url: "https://www.busemprzezswiat.pl",
      author: "Karol",
      language: "PL",
      img: Traveler,
    },
    {
      name: "The Blonde Abroad",
      details:
        "Blog podróżniczy prowadzony przez Kiki, pełen wskazówek dla solo podróżniczek.",
      url: "https://www.theblondeabroad.com",
      author: "Kiki",
      language: "EN",
      img: TravelerW,
    },
    {
      name: "Nomadic Matt",
      details:
        "Jeden z najpopularniejszych blogów podróżniczych, pełen praktycznych wskazówek i porad.",
      url: "https://www.nomadicmatt.com",
      author: "Matt",
      language: "EN",
      img: Traveler,
    },
    {
      name: "Polka w Podróży",
      details:
        "Blog prowadzony przez Polkę z pasją do podróżowania po Europie i świecie.",
      url: "https://www.polkawpodrozy.pl",
      author: "Izabela",
      language: "PL",
      img: TravelerW,
    },
    {
      name: "Be My Travel Muse",
      details:
        "Blog Kristin, który inspiruje kobiety do samodzielnych podróży.",
      url: "https://www.bemytravelmuse.com",
      author: "Kristin",
      language: "EN",
      img: TravelerW,
    },
    {
      name: "El Viaje de Sofía",
      details:
        "Blog podróżniczy w języku hiszpańskim, który zabiera swoich czytelników w podróż po najbardziej fascynujących zakątkach świata.",
      url: "https://www.elviajedesofia.com",
      author: "Sofía",
      language: "ES",
      img: TravelerW,
    },
    {
      name: "Viajando con Carmen",
      details:
        "Blog podróżniczy Carmen, który dzieli się swoimi doświadczeniami z podróży po Ameryce Łacińskiej.",
      url: "https://www.viajandoconcarmen.com",
      author: "Carmen",
      language: "ES",
      img: TravelerW,
    },
    {
      name: "Mochileando por el Mundo",
      details:
        "Blog podróżniczy, który oferuje porady na temat taniego podróżowania, backpackingu i kultury różnych krajów.",
      url: "https://www.mochileandoporelmundo.com",
      author: "Carlos",
      language: "ES",
      img: Traveler,
    },
    {
      name: "Reisedepesche",
      details:
        "Blog podróżniczy w języku niemieckim, który oferuje inspiracje i porady dla miłośników podróży po Europie i świecie.",
      url: "https://www.reisedepesche.de",
      author: "Anna",
      language: "DE",
      img: TravelerW,
    },
    {
      name: "Weltenbummler",
      details:
        "Blog o podróżach w języku niemieckim, oferujący praktyczne informacje i ciekawe historie z podróży po Azji i Ameryce Południowej.",
      url: "https://www.weltenbummler.de",
      author: "Lukas",
      language: "DE",
      img: Traveler,
    },
    {
      name: "Abenteuerlust",
      details:
        "Blog dla miłośników przygód, którzy chcą poznać różne strony świata w sposób aktywny i pełen pasji.",
      url: "https://www.abenteuerlust.de",
      author: "Mia",
      language: "DE",
      img: TravelerW,
    },
    {
      name: "Le Blog de Lili",
      details:
        "Francuski blog podróżniczy, w którym Lili dzieli się swoimi podróżami do egzotycznych miejsc oraz najlepszymi miejscami do odwiedzenia w Europie.",
      url: "https://www.leblogdelili.com",
      author: "Lili",
      language: "FR",
      img: TravelerW,
    },
    {
      name: "Carnets de Voyage",
      details:
        "Blog podróżniczy prowadzony przez francuską parę, która dokumentuje swoje podróże po Azji, Ameryce i Afryce.",
      url: "https://www.carnetsdevoyage.fr",
      author: "Pierre & Claire",
      language: "FR",
      img: TravelerW,
    },
    {
      name: "Le Tour du Monde de Julie",
      details:
        "Blog w języku francuskim, który śledzi podróże Julii po całym świecie, oferując wskazówki dotyczące kultury, jedzenia i przygód.",
      url: "https://www.letourdumondedejulie.com",
      author: "Julie",
      language: "FR",
      img: Traveler,
    },
    {
      name: "La Viaggiatrice",
      details:
        "Blog podróżniczy w języku włoskim, który inspirowany jest pasją do odkrywania piękna świata, zwłaszcza Europy.",
      url: "https://www.laviaggiatrice.com",
      author: "Giulia",
      language: "IT",
      img: TravelerW,
    },
    {
      name: "Viaggiando con Silvia",
      details:
        "Silvia dzieli się swoimi podróżami po Włoszech i całym świecie, oferując inspiracje i porady dla podróżujących.",
      url: "https://www.viaggiandoconSilvia.com",
      author: "Silvia",
      language: "IT",
      img: Traveler,
    },
    {
      name: "Il Mondo di Travel Blogger",
      details:
        "Blog w języku włoskim poświęcony doświadczeniom podróżniczym i recenzjom miejsc, które warto odwiedzić.",
      url: "https://www.ilmondoditravelblogger.com",
      author: "Marco",
      language: "IT",
      img: TravelerW,
    },
  ]);
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
      <BlogsContainer>
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
          <h3> Author Info</h3>
          <p>Author name: {filteredBlogs[currentIndex].author}</p>
          <p>Blog Language: {filteredBlogs[currentIndex].language}</p>
        </BlogAuthor>
      </BlogsContainer>
    </>
  );
};

export default BestTravelBlogs;
