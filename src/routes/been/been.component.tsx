import { BeenMapContainer } from "./been.component.style";
import BeenList from "../../components/been-list/been-list.component";
import ScorePanel from "../../components/ScorePanel/score-panel.component";

const Been: React.FC = () => {
  return (
    <div>
      <BeenMapContainer>
        <ScorePanel></ScorePanel>
        <BeenList></BeenList>
      </BeenMapContainer>
    </div>
  );
};

export default Been;
