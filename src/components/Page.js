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
import ciudad from '../img/ciudad-bolivia.jpeg';
import Paper from '@mui/material/Paper'


const theme = createTheme();

export default function Page({ title, description }) {
  const [query, setQuery] = useState('');
  const [mostrar, setMostrar] = useState(false);
  const [results, setResults] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      {/* Header */}
      <AppBar position="relative" sx={{bgcolor: 'white'}} >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>

          </Typography>
        </Toolbar>
      </AppBar>
      {/* End Header */}

      <main>
        <Box
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ciudad})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary.contrastText"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" align="center" color="primary.contrastText" paragraph>
              {description}
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="sm" sx={{mt: 3}}>
            <Search setQuery={setQuery} setMostrar={setMostrar} />
        </Container>
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
                    type={el.tipo_doc}
                    city={el.ciudad}
                    topics={el.temas}
                    journal={el.nombre_revista_compilacion}
                    numJournal={el.numero_revista}
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