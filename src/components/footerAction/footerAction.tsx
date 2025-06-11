import {
  Wrapper,
  BackToStartWrapper,
  BackToStartButton,
  BackToStartLabel,
  SignUpWrapper,
  SignUpLabel,
  SignUpButton,
  Container,
} from "./footerAction.style";

import FooterActionImage from "../../assets/FooterActionImage.png";
import { HiOutlineArrowUp } from "react-icons/hi";

const FooterAction: React.FC = () => {
  return (
    <Wrapper backgroundImage={FooterActionImage}>
      <Container>
        <SignUpWrapper>
          <SignUpLabel>Get started</SignUpLabel>
          <SignUpButton>Sign Up</SignUpButton>
        </SignUpWrapper>
        <BackToStartWrapper>
          <BackToStartButton>
            Back to Start
            <HiOutlineArrowUp />
          </BackToStartButton>
          <BackToStartLabel>OR</BackToStartLabel>
        </BackToStartWrapper>
      </Container>
    </Wrapper>
  );
};

export default FooterAction;
