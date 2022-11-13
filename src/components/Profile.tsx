import styled from '@emotion/styled';
import { Container } from './style';
import { keyframes } from '@emotion/react';

function Profile() {
  return (
    <Wrapper>
      <ProfileImage alt={'profile'} src={'profile.jpg'} />
      <NameText>HYEONG JO</NameText>
      <TextWrapper>
        <span>&quot;JJO</span>
        <span className="alias">쪼&quot;</span>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  width: 100%;
  height: 30rem;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid black;
`;

const TextLeftMoveAnimation = keyframes`
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0;
  }
`;

const TextRightMoveAnimation = keyframes`
  from {
    margin-right: 100%
  }
  to {
    margin-right: 0
  }`;

const NameText = styled.text`
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 0.5rem;
  margin-top: 1rem;
  white-space: nowrap;
  animation: ${TextLeftMoveAnimation} 1s forwards;
  animation-delay: 0.3s;
`;

const TextWrapper = styled.h1`
  margin: 0;
  font-size: 3rem;
  padding: 0;
  color: white;
  white-space: nowrap;
  animation: ${TextRightMoveAnimation} 1s forwards;
  animation-delay: 0.3s;
  text-shadow: 0 0.1em 20px rgba(0, 0, 0, 1), 0.05em -0.03em 0 rgba(0, 0, 0, 1), 0.05em 0.005em 0 rgba(0, 0, 0, 1),
    0em 0.08em 0 rgba(0, 0, 0, 1), 0.05em 0.08em 0 rgba(0, 0, 0, 1), 0px -0.03em 0 rgba(0, 0, 0, 1),
    -0.03em -0.03em 0 rgba(0, 0, 0, 1), -0.03em 0.08em 0 rgba(0, 0, 0, 1), -0.03em 0 0 rgba(0, 0, 0, 1);

  span {
    transform: scale(0.9);
    display: inline-block;
    margin: 0 10px;
  }

  .alias {
    margin-top: 0.5rem;
  }

  span:first-child {
    animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
  }

  span:last-child {
    animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
  }

  @keyframes bop {
    0% {
      transform: scale(0.9);
    }
    50%,
    100% {
      transform: scale(1);
    }
  }
  @keyframes bopB {
    0% {
      transform: scale(0.9);
    }
    80%,
    100% {
      transform: scale(1) rotateZ(-3deg);
    }
  }
`;

export default Profile;
