import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DataObjectIcon from '@mui/icons-material/DataObject';

export default function BibView({type, author, title, year, publisher, journal, numJournal}) {
  const [open, setOpen] = useState(false);

  const formatBib = function(type, author, title, year, publisher, journal, numJournal){
    let bibtex = '';
    if(type.includes(['book'])) bibtex += '@book';
    else bibtex += '@article';
  bibtex += `{${author.split(', ')[0]}${year},
  author = "${author}",
  title = "${title}",
  year = ${year},`
  if(type.includes(['journalArticle'])) {
    bibtex += `
  journal = "${journal}",
  number = ${numJournal}
  }`;
  }
  else {
    bibtex += `
  publisher = "${publisher}"
  }`
  }
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
      {/* <Button size="small" >
        BibTex
      </Button> */}
      <IconButton size="small" onClick={handleClickOpen} color="primary">
        <DataObjectIcon fontSize="small" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          Entrada BibTeX
        </DialogTitle>
        <DialogContent dividers sx={{whiteSpace: 'pre'}}>
          <code style={{fontSize: '0.8em'}}>
          {formatBib(type, author, title, year, publisher, journal, numJournal)}
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
