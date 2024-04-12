// @mui
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
// components
import React from 'react';
import Page from '../../../components/Page';
import ResearchMain from '../../../sections/research/ResearchMain';
// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));
// ----------------------------------------------------------------------

export default function ResearchList() {
  const { pathname } = useLocation();

  const isDashboard = pathname.includes('dashboard');
  return (
    <Page title="Vận hành">
      {isDashboard ? (
        <h1>Vận hành</h1>
      ) : (
        <RootStyle>
          <ResearchMain />
        </RootStyle>
      )}
    </Page>
  );
}