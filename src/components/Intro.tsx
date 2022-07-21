import styled from '@emotion/styled';
import { Container } from '../../styles/style';

const profileLinks: Array<{ id: string; link: string }> = [
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/hyeongjo-cha-624b10244/',
  },
  { id: 'github', link: 'https://github.com/gudwh14' },
];

const introInfos: Array<{ id: string; value: string }> = [
  { id: 'Age', value: '26(1997)' },
  {
    id: 'Degree',
    value: 'Suwon University. Computer Science (2016 - 2022)',
  },
  {
    id: 'Contact',
    value: 'alxious@naver.com',
  },
];

function Intro() {
  return (
    <Wrapper>
      <div>
        <DevText>Android Software Developer & FrontEnd Developer</DevText>
      </div>

      <div className="link-box">
        {profileLinks.map(link => (
          <Link key={link.id} onClick={() => window.open(link.link)}>
            {link.id}
          </Link>
        ))}
      </div>

      <div className="info-box">
        {introInfos.map(info => (
          <InfoBox key={info.id}>
            <span className="info-id">{info.id}.</span>
            <span className="info-value">{info.value}</span>
          </InfoBox>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  width: 100%;

  .link-box {
    margin-top: 0.5rem;
  }

  .info-box {
    margin-top: 3rem;
  }
`;

const InfoBox = styled.div`
  margin-bottom: 1rem;

  .info-id {
    font-weight: 500;
    font-size: 1.3rem;
    margin-right: 0.5rem;
  }

  .info-value {
    font-size: 1.1rem;
    font-weight: 300;
  }
`;

const DevText = styled.text`
  font-weight: 500;
  font-size: 1.8rem;
`;

const Link = styled.span`
  display: inline-block;
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 1rem;
  font-weight: 300;
  color: cornflowerblue;
`;

export default Intro;
