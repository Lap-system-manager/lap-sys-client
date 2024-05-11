import React, { useEffect, useState } from 'react';
import { Autocomplete, Card, Container, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import useLocales from '../../../locals/useLocals';
import useResponsive from '../../../hooks/useResponsive';
import Page from '../../../components/Page';
import Markdown from '../../../components/Markdown';
import { Language } from '../../../constant';
import _mock from '../../../_mock';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

const RESEARCH_DETAIL = loader('../../../graphql/queries/collections/DetailCollection.graphql');

export default function ResearchDetail() {
  const options = [
    { label: _mock.text.title(1), id: 1 }, // Lấy tiêu đề từ _mock
    { label: _mock.text.title(2), id: 2 },
    { label: _mock.text.title(3), id: 3 },
    { label: _mock.text.title(4), id: 4 },
    { label: _mock.text.title(5), id: 5 },
  ];

  // const { id } = useParams();
  const [post, setPost] = useState(null);
  const [idResearch] = useState(1);
  const { data: getPost } = useQuery(RESEARCH_DETAIL, {
    variables: {
      id: Number(idResearch),
    },
  });
  useEffect(() => {
    if (getPost) {
      setPost(getPost?.collection);
    }
  }, [getPost]);

  console.log('post', post);

  const { t, currentLang } = useLocales();
  const isMobile = useResponsive('between', 'xs', 'xs', 'sm');

  console.log('currentLang', currentLang);
  return (
    <Page title={t('research.page1')}>
      <RootStyle>
        <Grid container spacing={1} alignItems="center" sx={{ paddingBottom: 5, px: 3 }}>
          {isMobile ? (
            <>
              <Grid item xs={12} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Typography variant="h4"> {t('research.title')}</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  fullWidth
                  renderInput={(params) => <TextField {...params} label="Search" />}
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12}>
                <Typography variant="h4">{t('research.title')}</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  fullWidth
                  renderInput={(params) => <TextField {...params} label="Search" />}
                />
              </Grid>
            </>
          )}
        </Grid>

        {currentLang.value === Language.VietNam && post?.title !== '' && (
          <Container maxWidth={false}>
            {post && (
              <Card>
                <Box sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography variant="h5" sx={{ mb: 5 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 5 }}>
                    {post.description}
                  </Typography>
                  <Markdown children={post.collection_Vietnamese} />
                </Box>
              </Card>
            )}
          </Container>
        )}

        {currentLang.value === Language.English && post?.title_english !== '' && (
          <Container maxWidth={false}>
            {post && (
              <Card>
                <Box sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography variant="h5" sx={{ mb: 5 }}>
                    {post.title_english}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 5 }}>
                    {post.description_english}
                  </Typography>
                  <Markdown children={post.collection_Vietnamese} />
                </Box>
              </Card>
            )}
          </Container>
        )}
      </RootStyle>
    </Page>
  );
}
