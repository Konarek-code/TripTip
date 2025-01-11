import { Wrapper, List } from "../checklist/checklist.style";
import { Title } from "../percent-panels/percent-panels.style";

const SafetyTips: React.FC = () => {
  return (
    <Wrapper>
      <Title>Bezpieczeństwo i ubezpieczenia</Title>
      <List>
        <li>
          <a
            href="https://www.gov.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rządowe ostrzeżenia dla podróżnych
          </a>
        </li>
        <li>Sprawdź, czy kraj docelowy wymaga szczepień</li>
      </List>
    </Wrapper>
  );
};

export default SafetyTips;
