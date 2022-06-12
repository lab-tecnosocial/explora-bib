import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Item from './Item';
import Tarjeta from './Tarjeta';
import Search from './Search';
import dataJson from '../data/bib-urbana.json';


const theme = createTheme();

export default function Page({ title, description }) {
  const [query, setQuery] = useState('');
  const [mostrar, setMostrar] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {/* Header */}
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {title}
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
              {title}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {description}
            </Typography>
            <Search setQuery={setQuery} setMostrar={setMostrar} />
          </Container>
        </Box>
        {
          mostrar && (<Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {dataJson
              .filter((el) => el.titulo.toLowerCase().includes(query.toLocaleLowerCase()))
              .map((el) =>
                <Tarjeta
                  id={el.id}
                  img={el.img}
                  title={el.titulo}
                  author={el.autor}
                  year={el.anio}
                  publisher={el.editorial_institución}
                  link={el.url}
                />)}
          </Grid>
        </Container>)

        }
        
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