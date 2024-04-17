import React from 'react';
import { Box, Grid, Button, Stack, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import HubIcon from '@mui/icons-material/Hub';
import { Link as RouterLink } from 'react-router-dom';
import FitbitSharpIcon from '@mui/icons-material/FitbitSharp';
import GrainSharpIcon from '@mui/icons-material/GrainSharp';
import BlurOnSharpIcon from '@mui/icons-material/BlurOnSharp';
import isString from 'lodash/isString';
import { InlineIcon } from '@iconify/react';
import Image from '../../components/Image';
import _mock from '../../_mock';
import { _peopleData } from '../../_mock/_user';
import useResponsive from '../../hooks/useResponsive';



export default function Proccefer() {

  const isMobile = useResponsive('between', 'xs', 'xs', 'sm');

  const IconText = [
    <ListItem>
      <ListItemIcon>
        <FitbitSharpIcon sx={{ mr: 1, color: '#00FA9A' }} />
      </ListItemIcon>
    </ListItem>,
    <ListItem>
      <ListItemIcon>
        <GrainSharpIcon sx={{ fontSize: 'medium', color: '#66CDAA' }} />
      </ListItemIcon>
    </ListItem>
  ];

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Box>
            <Image
              alt="preview"
              src="https://www.chuphinhsanpham.vn/wp-content/uploads/2022/02/chup-hinh-cv-profile-hcm-0004.jpg"
              ratio="4/5"
              sx={{ borderRadius: 2 }}
            />
          </Box>
        </Grid>
        {isMobile? (
          <Grid item xs={12} md={9} sx={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <Box>
              <Box sx={{ pb: 2, ml: { xs: 10, md: 6 } }}>
                <h2>BÙI XUÂN TIẾN</h2>
              </Box>
              <Box sx={{ p: 3, pl: { xs: 1, md: 6 } }}>
                <Typography>★ {_mock.text.title(0)}</Typography>
                <Typography>★ {_mock.text.title(1)}</Typography>
              </Box>
              <Box sx={{ p: 3, pl: { xs: 1, md: 6 } }}>
                <Typography>★ {_mock.text.title(2)}</Typography>
                <Typography>★ {_mock.text.title(3)}</Typography>
                <Typography>★ {_mock.text.title(4)}</Typography>
                <Typography>★ {_mock.text.title(5)}</Typography>
              </Box>
              <Grid container>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Button
                    sx={{
                      width: 170,
                      ml: { xs: 1, md: 6 },
                      mt: { xs: 0, md: 6, mt: 4 },
                      mb: { xs: 0, md: 1 },
                      bgcolor: '#00FA9A',
                      borderRadius: 20,
                    }}
                    target="_blank"
                    variant="contained"
                    endIcon={<LaunchIcon />}
                    component={RouterLink}
                    href="http://scholar.google.co.kr/citations?user=GJHV48MAAAAJ"
                    to="http://scholar.google.co.kr/citations?user=GJHV48MAAAAJ"
                  >
                    Google Scholar
                  </Button>
                </Grid>
                <Grid item xs={12} sm={8} md={9} lg={10}>
                  <Button
                    sx={{ ml: { xs: 1, md: 6 }, mt: { xs: 0, md: 6, mt: 4 } }}
                    variant="textlink"
                    target="_blank"
                    component={RouterLink}
                    href="http://scholar.google.co.kr/citations?user=GJHV48MAAAAJ"
                    to="http://scholar.google.co.kr/citations?user=GJHV48MAAAAJ"
                  >
                    http://scholar.google.co.kr/citations?user=GJHV48MAAAAJ
                  </Button>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Button
                    sx={{ width: 170, ml: { xs: 1, md: 6 }, mt: 2, borderRadius: 20 }}
                    target="_blank"
                    variant="contained"
                    endIcon={<LaunchIcon />}
                    component={RouterLink}
                    href="http://www.researcherid.com/rid/B-7121-2011"
                    to="http://www.researcherid.com/rid/B-7121-2011"
                  >
                    Rearcher ID
                  </Button>
                </Grid>
                <Grid item xs={12} sm={8} md={9} lg={10}>
                  <Button
                    sx={{ ml: { xs: 1, md: 6 }, mt: 2 }}
                    target="_blank"
                    variant="textlink"
                    component={RouterLink}
                    href="http://www.researcherid.com/rid/B-7121-2011"
                    to="http://www.researcherid.com/rid/B-7121-2011"
                  >
                    http://www.researcherid.com/rid/B-7121-2011
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ): (
          <Grid item xs={12} md={9}>
            <Box>
              <Box sx={{ pb: 2, ml: { xs: 8, md: 6 } }}>
                <h2>BÙI XUÂN TIẾN</h2>
              </Box>
              <Box sx={{ p: 3, pl: { xs: 1, md: 6 } }}>
                <Typography>★ {_mock.text.title(0)}</Typography>
                <Typography>★ {_mock.text.title(1)}</Typography>
              </Box>
              <Box sx={{ p: 3, pl: { xs: 1, md: 6 } }}>
                <Typography>★ {_mock.text.title(2)}</Typography>
                <Typography>★ {_mock.text.title(3)}</Typography>
                <Typography>★ {_mock.text.title(4)}</Typography>
                <Typography>★ {_mock.text.title(5)}</Typography>
              </Box>
              <Grid container>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Button
                    sx={{
                      width: 170,
                      ml: { xs: 1, md: 6 },
                      mt: { xs: 0, md: 6, mt: 4 },
                      mb: { xs: 0, md: 1 },
                      bgcolor: '#00FA9A',
                      borderRadius: 20,
                    }}
                    target="_blank"
                    variant="contained"
                    endIcon={<LaunchIcon />}
                    component={RouterLink}
                    href="http://scholar.google.co.kr/citations?user=GJHV48MAAAAJ"
                    to="http://scholar.google.co.kr/citations?user=GJHV48MAAAAJ"
                  >
                    Google Scholar
                  </Button>
                </Grid>
                <Grid item xs={12} sm={8} md={9} lg={10}>
                  <Button
                    sx={{ ml: { xs: 1, md: 6 }, mt: { xs: 0, md: 6, mt: 4 } }}
                    variant="textlink"
                    target="_blank"
                    component={RouterLink}
                    href="http://scholar.google.co.kr/citations?user=GJHV48MAAAAJ"
                    to="http://scholar.google.co.kr/citations?user=GJHV48MAAAAJ"
                  >
                    http://scholar.google.co.kr/citations?user=GJHV48MAAAAJ
                  </Button>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Button
                    sx={{ width: 170, ml: { xs: 1, md: 6 }, mt: 2, borderRadius: 20 }}
                    target="_blank"
                    variant="contained"
                    endIcon={<LaunchIcon />}
                    component={RouterLink}
                    href="http://www.researcherid.com/rid/B-7121-2011"
                    to="http://www.researcherid.com/rid/B-7121-2011"
                  >
                    Rearcher ID
                  </Button>
                </Grid>
                <Grid item xs={12} sm={8} md={9} lg={10}>
                  <Button
                    sx={{ ml: { xs: 1, md: 6 }, mt: 2 }}
                    target="_blank"
                    variant="textlink"
                    component={RouterLink}
                    href="http://www.researcherid.com/rid/B-7121-2011"
                    to="http://www.researcherid.com/rid/B-7121-2011"
                  >
                    http://www.researcherid.com/rid/B-7121-2011
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        )}

      </Grid>
      {_peopleData.map((item, index) => (
        <Box sx={{ pt: 4, pr: { xs: 0, md: 6 } }} key={index}>
          <ListItem>
            <ListItemIcon>
              <FitbitSharpIcon sx={{ mr: 1, color: '#00FA9A' }} />
              <Typography variant="h6">{item.title}</Typography>
            </ListItemIcon>
          </ListItem>
          <List sx={{ ml: { md: 3 } }}>
            {item.data.map((data, idx) => (
              <ListItem key={idx}>
                <ListItemIcon>
                  <GrainSharpIcon sx={{ fontSize: 'medium', color: '#66CDAA' }} />
                </ListItemIcon>
                <Typography variant="body1">{data}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
}