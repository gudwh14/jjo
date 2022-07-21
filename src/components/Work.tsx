import styled from '@emotion/styled';
import { Container, Title } from '../../styles/style';
import '@fontsource/bungee-shade';

const WorkInfos: Array<{ corp: string; ko: string; depart: string; period: string; form: string }> = [
  {
    corp: 'Samsung Electronics',
    ko: '삼성전자',
    depart: 'Mobile Experience SW',
    period: '2022.07 - now',
    form: '정규직',
  },
  {
    corp: 'KB Kookmin Bank',
    ko: 'KB 국민은행',
    depart: 'IT',
    period: '2022.06 - 2022.06',
    form: '정규직',
  },
];

function Work() {
  return (
    <Wrapper>
      <Title>Work Experiences</Title>
      <div>
        {WorkInfos.map(info => (
          <InfoBox key={info.corp}>
            <div>
              <span className="info-corp">{info.corp}</span>
              <span className="info-ko">{info.ko}</span>
            </div>
            <span className="info-depart">{info.depart}</span>
            <div className="info-sub-box">
              <span className="info-period">{info.period}</span>
              <span className="info-form">{info.form}</span>
            </div>
          </InfoBox>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  width: 100%;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin-top: 2.5rem;

  div {
    display: flex;
    align-items: center;
  }

  .info-corp {
    font-weight: 500;
    font-size: 1.8rem;
    margin-right: 0.5rem;
  }

  .info-ko {
    font-weight: 400;
    font-size: 0.8rem;
    margin-left: auto;
  }

  .info-depart {
    margin-top: 0.2rem;
    font-size: 1rem;
  }

  .info-sub-box {
    font-size: 0.8rem;
    opacity: 0.7;
    margin-top: 0.2rem;
  }

  .info-period {
    margin-left: auto;
    margin-right: 0.5rem;
  }

  .info-form {
  }
`;

export default Work;
