// form
import { useFormContext } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { Button, Grid, Stack, Typography } from '@mui/material';
// routes
// components
import PropTypes from 'prop-types';
import React from 'react';
import { RHFEditor, RHFTextField } from '../../../components/hook-form';
//

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

// ----------------------------------------------------------------------

ResearchPostEnglishStack.propTypes = {
  onBack: PropTypes.func,
};

export default function ResearchPostEnglishStack({ onBack }) {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <>
      <Stack spacing={3}>
        <RHFTextField name="titleEnglish" label="Post Title" />

        <RHFTextField name="descriptionEnglish" label="Description" multiline rows={3} />

        <div>
          <LabelStyle>Content</LabelStyle>
          <RHFEditor name="contentEnglish" />
        </div>
      </Stack>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-around" spacing={1.5} sx={{ mt: 3 }}>
          <Button fullWidth variant="contained" size="medium" onClick={() => onBack(1)}>
            Trở lại
          </Button>
          <LoadingButton fullWidth type="submit" variant="contained" size="medium" loading={isSubmitting}>
            Đăng bài
          </LoadingButton>
        </Stack>
      </Grid>
    </>
  );
}
