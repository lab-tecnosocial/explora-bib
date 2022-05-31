
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Item({ id, img, title, author, year, publisher, link }) {
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image={img}
          alt=""
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>
            <b>Autor:</b> {author}
          </Typography>
          <Typography>
            <b>Año:</b> {year}
          </Typography>
          <Typography>
            <b>Editorial:</b> {publisher}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={link} target="_blank">Visitar</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Item;