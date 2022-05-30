import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Item from './Item'
import Search from './Search'
import dataJson from '../data/bib-urbana.json'


const theme = createTheme();

export default function Page(props) {
  return (
    <ThemeProvider theme={theme}>
      {/* Header */}
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      {/* End Header */}

      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {props.title}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {props.description}
            </Typography>
            <Search />
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {dataJson.map((el) => 
            <Item 
              id={el.id} 
              img={el.img} 
              title={el.titulo} 
              author={el.autor} 
              year={el.anio} 
              publisher={el.editorial_institución} 
              link={el.url} 
            />)}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Lab TecnoSocial
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Explorador bibliográfico
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}