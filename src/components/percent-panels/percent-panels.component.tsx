import { FC } from "react";
import {
  PanelContainer,
  Title,
  Textcontainer,
  Percent,
} from "./percent-panels.style";

const PercentPanels: FC = () => {
  return (
    <PanelContainer>
      <Title>Region</Title>
      <Textcontainer>You visited:</Textcontainer>
      <Percent>10 %</Percent>
    </PanelContainer>
  );
};
export default PercentPanels;
