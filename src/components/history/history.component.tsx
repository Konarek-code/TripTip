import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentContinent } from "../../store/homeContinent/homeContinent.selector";
import { timelinesByContinent } from "../../data/timelineData";
import { Container } from "./history.styles";
import EraSection from "../eraSection/eraSecton";

const HistoryTimeline: React.FC = () => {
  const selectedContinent = useSelector(selectCurrentContinent);

  const timeline = React.useMemo(() => {
    if (
      typeof selectedContinent === "string" &&
      selectedContinent in timelinesByContinent
    ) {
      return timelinesByContinent[
        selectedContinent as keyof typeof timelinesByContinent
      ];
    }
    return [];
  }, [selectedContinent]);

  const [activeEra, setActiveEra] = useState<string>("");

  useEffect(() => {
    if (timeline.length > 0) {
      setActiveEra(timeline[0].id);
    } else {
      setActiveEra("");
    }
  }, [timeline]);

  if (typeof selectedContinent !== "string") {
    return <div>Wybierz kontynent, aby zobaczyć oś czasu historii.</div>;
  }

  return (
    <Container>
      {timeline.map((era) => (
        <EraSection
          key={era.id}
          era={era}
          activeEra={activeEra}
          setActiveEra={setActiveEra}
          timeline={timeline}
        />
      ))}
    </Container>
  );
};

export default HistoryTimeline;
