import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

export default function Search({query, setQuery}) {
    return (
        <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setQuery(e.target.value);
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
