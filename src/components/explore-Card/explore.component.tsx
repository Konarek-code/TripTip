import React from "react";
import {
  ExploreContainer,
  ImageContainer,
  Caption,
} from "./explore.component.style";

import Ski from "../../assets/Ski.jpg";
import DisneyLand from "../../assets/disneyland.jpg";
import Parachute from "../../assets/parachute.jpg";

const ExploreComponent: React.FC = () => {
  return (
    <ExploreContainer>
      <h2>Your Adventure Awaits</h2>

      <ImageContainer>
        <img src={DisneyLand} alt="Disneyland" className="main-image" />
        <Caption>
          Experience the magic of Disneyland, where dreams come to life.
        </Caption>
      </ImageContainer>

      <ImageContainer>
        <img src={Ski} alt="Ski" className="offset-up" />
        <Caption>
          Feel the thrill on the slopes, surrounded by breathtaking views.
        </Caption>
      </ImageContainer>

      <ImageContainer>
        <img src={Parachute} alt="Parachute" className="offset-down" />
        <Caption>Embrace the adrenaline as you soar through the skies.</Caption>
      </ImageContainer>
    </ExploreContainer>
  );
};

export default ExploreComponent;
