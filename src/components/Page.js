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
import dataJson from '../data/bib-urbana.json';
import ciudad from '../img/ciudad-bolivia.jpeg';
import logoLab from '../img/foto-perfil.png';
import Link from '@mui/material/Link';
import GraphView from './GraphView';

const theme = createTheme();

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
        <Container maxWidth="sm" sx={{ mt: 3 }}>
          <Search setQuery={setQuery} setMostrar={setMostrar} nRes={dataFilter.length} />
          {mostrar && <GraphView data={dataFilter}/>}

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
                    publisher={el.editorial_institución}
                    link={el.url}
                    type={el.tipo_doc}
                    city={el.ciudad}
                    place={el.departamento}
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
            <Typography variant="body2" align="center"><Link href="https://github.com/lab-tecnosocial/datos-biburbana/blob/main/bib-urbana.bib" target="_blank">BibTeX</Link></Typography>
            <Typography variant="body2" align="center"><Link href="https://docs.google.com/spreadsheets/d/12JtW_QCgC5xUJisGymGyF9IxsZPrkD2bKXJwuPCd_ZI/edit#gid=0" target="_blank">Google Sheets</Link></Typography>
            </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="center"><b>Contribuye</b></Typography>
            <Typography variant="body2" align="center"><Link href="https://github.com/lab-tecnosocial/datos-biburbana" target="_blank">Por GitHub</Link></Typography>
            <Typography variant="body2" align="center"><Link href="https://docs.google.com/forms/d/e/1FAIpQLSepvVhuofrXn4bTg0kCgbsBj_vnfN3FdJrmCr6IdatBR21x0g/viewform" target="_blank">Por Google Forms</Link></Typography>
            </Grid>
          <Grid item xs={12}><Typography variant="body2" align="center" color="text.secondary">Datos provenientes del artículo de <Link href="https://www.academia.edu/81465997/Una_exploraci%C3%B3n_bibliom%C3%A9trica_y_digital_de_los_estudios_urbanos_en_Bolivia" target="_blank" color="text.secondary">"Una exploración bibliométrica y digital de los estudios urbanos en Bolivia"</Link> de Valeria Peredo.
</Typography></Grid>
        </Grid>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}