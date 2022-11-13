import styled from '@emotion/styled';
import { Container, Title } from './style';
import colors from '@constants/colors';

interface IProject {
  en: string;
  ko: string;
  sub: string;
  role: string;
  link: string;
}

const Projects: Array<IProject> = [
  {
    en: 'MEYOU',
    ko: '미유',
    sub: '커플 다이어리 감정 분석 어플리케이션',
    role: 'FE',
    link: 'https://github.com/TEAM-MEYOU',
  },
  {
    en: 'GOLFANI',
    ko: '골아니',
    sub: 'MZ세대들을 위한 골프 플랫폼',
    role: 'FE',
    link: 'https://github.com/golfani/golfani-FE',
  },
  {
    en: 'Travelus',
    ko: '트레블어스',
    sub: '나만의 여행계획 추천 서비스',
    role: 'FE',
    link: 'https://github.com/travleus/TRAVELUS-FE',
  },
];

function Project() {
  return (
    <Wrapper>
      <Title>PROJECTS</Title>
      {Projects.map(project => (
        <ProjectBox key={project.en} onClick={() => window.open(project.link)}>
          <span className="project-en">{project.en}</span>
          <span className="project-ko">{project.ko}</span>
          <span className="project-sub">{project.sub}</span>
          <span className="project-role">{project.role}</span>
        </ProjectBox>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  width: 100%;
`;

const ProjectBox = styled.div`
  width: 15rem;
  height: 80px;
  margin-top: 2.5rem;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    border-bottom: 0.1rem solid ${colors.highlight};

    .project-en,
    .project-ko {
      transition: 0.3s;
      color: ${colors.highlight};
    }
  }

  .project-en {
    display: block;
    font-weight: 500;
    font-size: 1rem;
  }

  .project-ko {
    display: block;
    font-weight: 500;
    font-size: 1rem;
  }

  .project-sub {
    display: block;
    margin-top: 0.2rem;
    font-size: 0.8rem;
  }

  .project-role {
    float: right;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
`;

export default Project;
