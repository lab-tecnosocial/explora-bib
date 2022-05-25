
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Item(props){
    return (
        <Grid item key={props.card} xs={12} sm={6} md={4}>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image="https://source.unsplash.com/random"
            alt=""
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography>
              <b>Autor:</b> {props.author}
            </Typography>
            <Typography>
              <b>Año:</b> {props.year}
            </Typography>
            <Typography>
              <b>Editorial:</b> {props.publisher}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={props.link}>Visitar</Button>
          </CardActions>
        </Card>
      </Grid>
    );
}

export default Item;