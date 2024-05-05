// @mui
import { useMutation, useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { loader } from 'graphql.macro';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { PATH_DASHBOARD } from '../../routes/paths';
import Iconify from '../../components/Iconify';
import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';
import { TypeCollection } from '../../constant';
import useTabs from '../../hooks/useTabs';
import useLocales from '../../locals/useLocals';
import PublicationPostCard from './PublicationCard';

// components

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(2),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));
// ----------------------------------------------------------------------

const TABS = [
  {
    value: 1,
    label: 'Công bố',
    color: 'success',
  },
  {
    value: 0,
    label: 'Chờ Duyệt',
    color: 'info',
  },
  {
    value: 2,
    label: 'Ẩn',
    color: 'default',
  },
];
const top100Films = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];
const LIST_ALL_PUBLICATION = loader('../../graphql/queries/collections/ListCollections.graphql');
const DELETE_COLLECTION = loader('../../graphql/mutations/collections/deleteCollection.graphql');
const EDIT_STATUS_COLLECTION = loader('../../graphql/mutations/collections/editCollection.graphql');

export default function Publiction() {
  const { t, currentLang } = useLocales();

  const { enqueueSnackbar } = useSnackbar();

  const { user } = useAuth();

  const { currentTab: filterStatus, onChangeTab: onFilterStatus } = useTabs(1);

  // const { pathname } = useLocation();
  // const isDashboard = pathname.includes('dashboard');

  const [info, setInfo] = useState([]);

  const { data: collection, refetch } = useQuery(LIST_ALL_PUBLICATION, {
    variables: {
      input: {
        status_collection: filterStatus,
        type_collection: TypeCollection.Publication,
      },
    },
  });

  useEffect(() => {
    if (collection) {
      setInfo(collection?.collections);
    }
  }, [collection]);

  const dataFiltered = applySortFilter({
    tableData: info,
    filterLanguage: currentLang.value,
  });

  const isMobile = useResponsive('between', 'xs', 'xs', 'sm');

  const [deleteCollection] = useMutation(DELETE_COLLECTION, {
    onCompleted: () => {
      enqueueSnackbar('Xóa tin tức thành công', {
        variant: 'success',
      });
    },

    onError: (error) => {
      enqueueSnackbar(`Xóa tin tức không thành công. Nguyên nhân: ${error.message}`, {
        variant: 'error',
      });
    },
  });

  const [editStatusCollection] = useMutation(EDIT_STATUS_COLLECTION, {
    onCompleted: () => {
      enqueueSnackbar('Cập nhật trạng thái thành công!', {
        variant: 'success',
      });
    },
    onError: (error) => {
      enqueueSnackbar(`Cập nhật trạng thái không thành công!. Nguyên nhân: ${error.message}`, {
        variant: 'error',
      });
    },
  });

  const handleDeleteCollection = async (idCollection) => {
    await deleteCollection({
      variables: {
        id: Number(idCollection),
      },
    });
    await refetch();
  };

  const handleEditStatusCollection = async (id, statusId) => {
    await editStatusCollection({
      variables: {
        input: {
          id,
          status: statusId,
        },
      },
    });

    await refetch();
  };

  return (
    <RootStyle>
      <Grid container spacing={5} alignItems="center">
        {isMobile ? (
          <>
            <Grid item xs={7}>
              <Typography variant="h4">{t('publication.publication')}</Typography>
            </Grid>

            <Grid item xs={5}>
              <Stack>
                {user && (
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to={PATH_DASHBOARD.research.new}
                    startIcon={<Iconify icon={'eva:plus-fill'} />}
                  >
                    Tạo mới
                  </Button>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                fullWidth
                renderInput={(params) => <TextField {...params} label="Search" />}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={10}>
              <Typography variant="h4">{t('publication.publication')}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Stack>
                {user && (
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to={PATH_DASHBOARD.publication.new}
                    startIcon={<Iconify icon={'eva:plus-fill'} />}
                  >
                    Tạo mới
                  </Button>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                fullWidth
                renderInput={(params) => <TextField {...params} label="Search" />}
              />
            </Grid>
          </>
        )}
      </Grid>
      <Tabs
        allowScrollButtonsMobile
        variant="scrollable"
        scrollButtons="auto"
        value={filterStatus}
        onChange={onFilterStatus}
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        {TABS.map((tab, idx) => (
          <Tab
            disableRipple
            key={idx + 1}
            value={tab.value}
            label={
              <Stack spacing={1} direction="row" alignItems="center">
                <div>{tab.label}</div>
              </Stack>
            }
          />
        ))}
      </Tabs>

      {dataFiltered.length === 0 && (
        <Card sx={{ pt: 3, px: 5, minHeight: 100, mt: 3 }}>
          <Typography textAlign={'center'} variant="h6">
            Chưa có bài viết nào
          </Typography>
        </Card>
      )}

      <Grid container spacing={3}>
        {dataFiltered.length > 0 &&
          dataFiltered.map((post, index) => (
            <Grid key={post?.id} item xs={12} sm={6} md={4}>
              <PublicationPostCard
                post={post}
                index={index}
                handleDeletePublication={handleDeleteCollection}
                onEditStatusCollection={handleEditStatusCollection}
                currentLang={currentLang.value}
              />
            </Grid>
          ))}
      </Grid>
    </RootStyle>
  );
}

function applySortFilter({ tableData, filterLanguage }) {
  if (filterLanguage === 'en') {
    tableData = tableData.filter((item) => item.title_english !== '');
  }
  if (filterLanguage === 'vi') {
    tableData = tableData.filter((item) => item.title !== '');
  }
  return tableData;
}
