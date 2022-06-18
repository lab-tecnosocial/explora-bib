import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tarjeta from './Tarjeta';
import Search from './Search';
import dataJson from '../data/bib-digital.json';
import conectividad from '../img/conectividad.jpeg';
import logoLab from '../img/foto-perfil.png';
import Link from '@mui/material/Link';
import { green, teal, lightBlue } from '@mui/material/colors';


const theme = createTheme(
  {
    palette: {
      primary: green
    },
  }
);

export default function Page({ title, description }) {
  const [query, setQuery] = useState('null');
  const [mostrar, setMostrar] = useState(false);

  let dataFilter = dataJson
    .filter(
      el => el.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query.toLocaleLowerCase()) ||
        el.temas.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query.toLocaleLowerCase())
    );

  return (
    <ThemeProvider theme={theme}>
      {/* Header */}
      {/* <AppBar position="relative" sx={{ bgcolor: 'white' }} >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>

          </Typography>
        </Toolbar>
      </AppBar> */}
      {/* End Header */}

      <main>
        <Box
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${conectividad})`,
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
              color="common.white"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" align="center" color="common.white" paragraph>
              {description}
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="sm" sx={{ mt: 3 }}>
          <Search setQuery={setQuery} setMostrar={setMostrar} nRes={dataFilter.length} />
        </Container>
        {
          mostrar && (<Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
              {dataFilter.map((el) =>
                  <Tarjeta
                    id={el.id}
                    img={el.img}
                    title={el.titulo}
                    author={el.autor}
                    year={el.anio}
                    publisher={el.editorial_institucion}
                    link={el.url}
                    type={el.tipo_doc}
                    city={el.ciudad}
                    topics={el.temas}
                    journal={el.nombre_revista_compilacion}
                  />)}
            </Grid>
          </Container>)

        }

      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Box
          display="flex"
          justifyContent="center"
        >
          <img src={logoLab} width="120px" alt="Logo Lab"></img>
          </Box>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
        >
          Explorador bibliográfico
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Typography variant="body2" align="center"><b>Datos abiertos</b></Typography>
            <Typography variant="body2" align="center"><Link href="https://github.com/lab-tecnosocial/datos-bibdigital/blob/main/bib-digital.bib" target="_blank">BibTeX</Link></Typography>
            <Typography variant="body2" align="center"><Link href="https://docs.google.com/spreadsheets/d/103_8pRtRd5JQj71NfNn__ITdzs66hbRW5PnOh7QvZqA/edit?usp=sharing" target="_blank">Google Sheets</Link></Typography>
            </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="center"><b>Contribuye</b></Typography>
            <Typography variant="body2" align="center"><Link href="https://github.com/lab-tecnosocial/datos-bibdigital" target="_blank">Por GitHub</Link></Typography>
            <Typography variant="body2" align="center"><Link href="https://forms.gle/pZh8C2W61JURzfBFA" target="_blank">Por Google Forms</Link></Typography>
            </Grid>
          <Grid item xs={12}><Typography variant="body2" align="center" color="text.secondary">Datos provenientes del artículo de <Link href="http://www.scielo.org.bo/scielo.php?pid=S0040-29152022000100169&script=sci_arttext" target="_blank" color="text.secondary">"Estudios sociales de digitalización en Bolivia, 2000-2020"</Link> de Alex Ojeda Copa.
</Typography></Grid>
        </Grid>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}