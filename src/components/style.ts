import styled from '@emotion/styled';

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px;

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const Title2 = styled.span`
  font-weight: normal;
  width: 100%;
  font-family: "Bungee Shade", cursive;

  font-size: 3rem;
  background: linear-gradient(-45deg,
  #4bc0c8 25%,
  #feac5e 25%,
  #feac5e 50%,
  #4bc0c8 50%,
  #4bc0c8 75%,
  #feac5e 75%,
  #feac5e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 20px 20px;
  background-position: 0 0;
  animation: stripes 1s linear infinite;

  @keyframes stripes {
    100% {
      background-position: 20px 0, 20px 0, 20px 0;
    }
`;

export const Title = styled.span`
  font-weight: normal;
  width: 100%;
  font-family: "Bungee Shade", cursive;

  font-size: 3rem;
  background: linear-gradient(-45deg,
  black, black);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 20px 20px;
  background-position: 0 0;
  animation: stripes 1s linear infinite;

  @keyframes stripes {
    100% {
      background-position: 20px 0, 20px 0, 20px 0;
    }
`;
