import { LanguageBarWrapper, LanguageButton } from "./languageBar.styles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLanguage } from "../../store/blogs/blogs.reducer";
import { selectCurrentLanguage } from "../../store/blogs/blogs.selector";

const LanguageBar: React.FC = () => {
  const dispatch = useDispatch();

  const languages = ["EN", "PL", "ES", "DE", "FR", "IT"];

  const handleLanguageChange = (language: string): void => {
    if (selectedLanguage === language) {
      dispatch(setCurrentLanguage(null));
    } else {
      dispatch(setCurrentLanguage(language));
    }
  };
  const selectedLanguage = useSelector(selectCurrentLanguage);

  return (
    <LanguageBarWrapper>
      {languages.map((lang) => (
        <LanguageButton
          key={lang}
          isActive={selectedLanguage === lang}
          onClick={() => {
            handleLanguageChange(lang);
          }}
        >
          {lang}
        </LanguageButton>
      ))}
    </LanguageBarWrapper>
  );
};

export default LanguageBar;
