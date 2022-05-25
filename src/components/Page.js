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


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
            {cards.map((el) => <Item id={el} />)}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}