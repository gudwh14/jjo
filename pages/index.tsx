import type { NextPage } from 'next';
import Profile from '@components/Profile';
import styled from '@emotion/styled';
import { FlexCenter } from '@components/style';
import Intro from '@components/Intro';
import Work from '@components/Work';
import Project from '@components/Project';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Profile />
      <Intro />
      <Work />
      <Project />
    </AppLayout>
  );
};

const AppLayout = styled(FlexCenter)`
  flex-direction: column;
  max-width: 140rem;
  background-color: white;
`;

export default Home;
