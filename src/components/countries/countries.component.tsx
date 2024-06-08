import { countriesData } from "../countriesItems/countries.Data";
import CountriesItems from "../countriesItems/countriesItems.component";
import { CountriesContainer } from "./countries.style";

const Countries: React.FC = () => {
  return (
    <CountriesContainer>
      {countriesData.map((land) => {
        return <CountriesItems key={land.id} land={land} />;
      })}
    </CountriesContainer>
  );
};
export default Countries;
