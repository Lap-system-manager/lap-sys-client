import React, { useState } from 'react';
// @mui
import { Box, Button, Grid, Typography } from '@mui/material';
// components
import Stack from '@mui/material/Stack';
import { useLocation } from 'react-router-dom';
import Page from '../components/Page';
import Professor from '../sections/people/Professor';
import Student from '../sections/people/Students';

import useLocales from '../locals/useLocals';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import useResponsive from '../hooks/useResponsive';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
export default function People() {
  const { t } = useLocales();
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setCurrentTab(tabIndex);
  };

  const isMobile = useResponsive('between', 'xs', 'xs', 'sm');
  const { pathname } = useLocation();

  const isDashboard = pathname.includes('dashboard');

  return (
    <Page title={t('people.page')}>
      <Box>
        <Grid container justifyContent="center" alignItems="center" sx={{ mb: 8, mt: 1, pt: 5 }}>
          {isMobile ? (
            <Grid item xs={12} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', pb: 3 }}>
              <Typography variant="h4"> {t('people.page')}</Typography>
            </Grid>
          ) : (
            <Grid item xs={12} sx={{ px: 5 }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h4">{t('people.page')}</Typography>
                {isDashboard ? (
                  <></>
                ) : (
                  <HeaderBreadcrumbs
                    links={[
                      { name: t('profile.Home'), href: '/' },
                      {
                        name: currentTab === 1 ? t('people.tab1') : t('people.tab2'),
                      },
                    ]}
                  />
                )}
              </Stack>
            </Grid>
          )}
          <Grid item xs={6} md={3} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <Button
              sx={{ width: '100%', height: '100%', borderRadius: 0 }}
              size="large"
              variant="outlined"
              style={
                currentTab === 1
                  ? { backgroundColor: '#4BD578', color: '#fff' }
                  : { backgroundColor: '#fff', color: '#000' }
              }
              onClick={() => handleTabClick(1)}
              className={currentTab === 1 ? 'active' : ''}
            >
              <Typography variant="h5">{t('people.tab1')}</Typography>
            </Button>
          </Grid>
          <Grid item xs={6} md={3} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <Button
              sx={{ width: '100%', height: '100%', borderRadius: 0 }}
              size="large"
              variant="outlined"
              style={
                currentTab === 2
                  ? { backgroundColor: '#4BD578', color: '#fff' }
                  : { backgroundColor: '#fff', color: '#000' }
              }
              onClick={() => handleTabClick(2)}
              className={currentTab === 2 ? 'active' : ''}
            >
              <Typography variant="h5">{t('people.tab2')}</Typography>
            </Button>
          </Grid>
        </Grid>
        {currentTab === 1 && (
          <Box>
            <Professor idProfessor={1} />
          </Box>
        )}
        {currentTab === 2 && (
          <Box>
            <Student />
          </Box>
        )}
      </Box>
    </Page>
  );
}
