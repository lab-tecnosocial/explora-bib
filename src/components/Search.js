import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

export default function Search({query}) {
    return (
        <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            query(e.target.value);
          }}
          label="Buscar..."
          variant="outlined"
          placeholder="Search..."
          size="normal"
          fullWidth
        />
      </form>
    )
}
