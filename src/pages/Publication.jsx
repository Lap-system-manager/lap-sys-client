// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));
// ----------------------------------------------------------------------

export default function Publication() {
  return (
    <Page title="Công bố khoa học">
      <RootStyle>
        <h1>Publication</h1>
    
      </RootStyle>
    </Page>
  );
}
