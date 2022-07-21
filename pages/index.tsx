import type { NextPage } from 'next';
import Profile from '@components/Profile';
import styled from '@emotion/styled';
import { FlexCenter } from '../styles/style';
import Intro from '@components/Intro';
import Work from '@components/Work';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Profile />
      <Intro />
      <Work />
    </AppLayout>
  );
};

const AppLayout = styled(FlexCenter)`
  flex-direction: column;
  max-width: 140rem;
  background-color: white;
`;

export default Home;
