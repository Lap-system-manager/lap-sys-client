// @mui
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import isString from 'lodash/isString';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Button, Container, Typography, DialogActions } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import { useLocation, useParams } from 'react-router-dom';
// components
import Image from '../../../components/Image';
import PublicationNewForm from '../../../sections/publication/PublicationNewForm';
import { PATH_DASHBOARD } from '../../../routes/paths';
import Page from '../../../components/Page';
import useSettings from '../../../hooks/useSettings';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import useLocales from '../../../locals/useLocals';


// ----------------------------------------------------------------------
const RootStyle = styled('div')(() => ({
  height: '100%',
}));
// ----------------------------------------------------------------------
const DETAIL_COLLECTION = loader('../../../graphql/queries/collections/DetailCollection.graphql');

export default function PublictionCreate() {
  const { pathname } = useLocation();

  const [postUpdate, setPostUpdate] = useState();

  const { id: idNews } = useParams();

  const { data: detailCollection } = useQuery(DETAIL_COLLECTION, {
    variables: {
      id: idNews,
    },
  });

  useEffect(() => {
    if (detailCollection) {
      setPostUpdate(detailCollection?.collection);
    }
  }, [idNews, detailCollection]);

  const isEdit = pathname.includes('edit');

  const { t } = useLocales();

  const { themeStretch } = useSettings();
  return (
    <Page title="Blog: New Post">
      <Container maxWidth={themeStretch ? false : 'lg'}>

        <PublicationNewForm isEdit={isEdit} dataPostUpdate={postUpdate} />
      </Container>
    </Page>
  );
}
