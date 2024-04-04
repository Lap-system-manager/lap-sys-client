// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
import HomeHero from '../sections/home/HomeHero';
// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  // height: '100%',
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));
// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Trang chủ">
      <RootStyle>
        <HomeHero />
      </RootStyle>
    </Page>
  );
}
