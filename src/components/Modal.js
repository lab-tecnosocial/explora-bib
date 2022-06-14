import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import upperFirst from 'lodash.upperfirst';

export default function Modal({title, type, city, topics, journal, numJournal}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        Detalles
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom><b>Tipo de item: </b>{upperFirst(type)}</Typography>
          {journal && numJournal && (<Typography gutterBottom><b>Revista: </b>{journal + ' ' + numJournal}</Typography>)}
          <Typography gutterBottom><b>Ciudad: </b> {city}</Typography>
          <Typography gutterBottom><b>Temas: </b> {upperFirst(topics.replaceAll(',', ' - '))}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
