import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Tarjeta({ id, img, title, author, year, publisher, link }) {
return (
    <Grid item key={id} xs={12} md={6}>
      <CardActionArea component="a" href={link}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h6">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {year + ' - ' + publisher}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {author}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160 }}
            image={img}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}


export default Tarjeta;