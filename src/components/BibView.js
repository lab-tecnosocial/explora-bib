import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import upperFirst from 'lodash.upperfirst';

export default function BibView({type, author, title, year, publisher}) {
  const [open, setOpen] = useState(false);

  const formatBib = function(type, author, title, year, publisher){
    let bibtex = '';
    if(type.includes(['libro', 'informe', 'cartilla'])) bibtex += '@book';
    else bibtex += '@article';
  bibtex += `{${author.split(' ')[0]}${year},
  author = "${author}",
  title = "${title}",
  year = ${year},
  publisher = "${publisher}"
}`
    return bibtex;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        BibTex
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          Entrada BibTex
        </DialogTitle>
        <DialogContent dividers sx={{whiteSpace: 'pre'}}>
          <code style={{fontSize: '0.9em'}}>
          {formatBib(type, author, title, year, publisher)}
          </code>          
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
