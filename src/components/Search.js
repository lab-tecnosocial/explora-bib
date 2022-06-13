import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function Search({ setQuery, setMostrar }) {
  const [q, setQ] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(q);
    setMostrar(true);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="search-bar"
          className="text"
          onChange={(e) => {
            setQ(e.target.value);
          }}
          label="Buscar..."
          variant="outlined"
          placeholder="Tema..."
          size="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={handleSubmit}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
         
          fullWidth
        />
      </form>
      <Typography variant="subtitle2" color="text.secondary" align="right">{0} resultados</Typography>
    </>

  )
}
