import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useState } from 'react';

export default function Search({setQuery, setMostrar}) {
  const [q, setQ] = useState('');
    return (
        <form onSubmit={(e) => {
          e.preventDefault();
          setQuery(q);
          setMostrar(true);
          }}>
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
          fullWidth
        />
      </form>
    )
}
