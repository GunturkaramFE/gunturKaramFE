import '../styles/filter.css';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';

const SearchFilter = () => {
  return (
    <div className="filter">
      <Grid
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%',borderRadius:'none' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Products"
          inputProps={{ 'aria-label': 'search products' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Grid>
    </div>
  );
};

export default SearchFilter;
