import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Modal from './Modal';
import BibView from './BibView';


function Tarjeta({ id, img, title, author, year, publisher, link, type, city, topics, journal, numJournal }) {
  return (
    <Grid item key={id} xs={12} md={6}>
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h6">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {year + ' - ' + publisher.replaceAll(',', ', ')}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {author.replaceAll(',', ', ')}
          </Typography>
          <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
            {/* <Button size="small" >Detalles</Button> */}
            <Modal title={title} type={type} city={city} topics={topics} journal={journal} numJournal={numJournal}/>
            <BibView type={type} author={author} title={title} year={year} publisher={publisher}/>
            <Button size="small" href={link} target="_blank">Visitar</Button>
          </CardActions>
        </CardContent>

        <CardMedia
          component="img"
          sx={{ width: '40%', height: '60%', objectFit: 'contain' }}
          image={img}
        />

      </Card>
    </Grid>
  );
}


export default Tarjeta;