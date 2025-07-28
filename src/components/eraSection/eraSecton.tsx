import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Section,
  ContentWrapper,
  Sidebar,
  Step,
  Circle,
  Label,
  EraTitle,
  EraDescription,
} from "../history/history.styles";

interface Era {
  id: string;
  label: string;
  description: string;
  image: string;
}

interface Props {
  era: Era;
  activeEra: string;
  setActiveEra: (id: string) => void;
  timeline: Era[];
}

const EraSection: React.FC<Props> = ({
  era,
  activeEra,
  setActiveEra,
  timeline,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && era.id !== activeEra) {
      setActiveEra(era.id);
    }
  }, [inView, era.id, activeEra, setActiveEra]);

  return (
    <Section ref={ref} background={era.image}>
      <ContentWrapper
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <Sidebar>
          {timeline.map((stepEra) => (
            <Step key={stepEra.id} active={stepEra.id === activeEra}>
              <Circle active={stepEra.id === activeEra} />
              <Label>{stepEra.label}</Label>
            </Step>
          ))}
        </Sidebar>
        <EraTitle>{era.label}</EraTitle>
        <EraDescription>{era.description}</EraDescription>
      </ContentWrapper>
    </Section>
  );
};

export default EraSection;
