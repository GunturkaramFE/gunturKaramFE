import React, { useEffect, useState } from 'react';
import '../styles/filter.css';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setAllProducts } from '../store/allProductsSlicer';
import api from '../api';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);
  const [searchInput, setSearchInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const products = await api.get('/user/get-all-products');
      if (products.success) {
        const updatedSuggestions = products.items.map(product => ({
          title: product.title,
          id: product.id
        }));
        dispatch(setAllProducts(products?.items || []));
        setSuggestions(updatedSuggestions);
        setShowSuggestions(true);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = event => {
    setSearchInput(event.target.value);
  };

  const handleSuggestionClick = (title, id) => {
    setSuggestions([])
    setShowSuggestions(false)
    window.open(`/ViewProduct/${id}`, '_self');
  };

  useEffect(() => {
    if (searchInput.length === 1) {
      if (!allProducts.length) {
        fetchAllProducts();
      }
    }
    if (searchInput.length >= 1) {
      const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      const suggestedTitles = filteredProducts.map(product => ({
        title: product.title,
        id: product.id
      }));
      setSuggestions(suggestedTitles);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchInput, allProducts]);

  return (
    <div className="filter">
      <Grid
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          borderRadius: 'none',
          position: 'relative',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Products"
          inputProps={{ 'aria-label': 'search products' }}
          value={searchInput}
          onChange={handleInputChange}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Grid>
      {(showSuggestions && suggestions.length) && (
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            top: '90%',
            left: '25%',
            width: '50%',
            zIndex: 10000,
            maxHeight: '200px',
            overflowY: 'auto',
          }}
        >
          <List>
            {suggestions.map((suggestion, index) => (
              <ListItem 
                key={index} 
                onClick={() => handleSuggestionClick(suggestion.title, suggestion.id)}
                sx={{
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#f0f0f0', // Change to the desired hover background color
                  },
                  '&:active': {
                    backgroundColor: '#e0e0e0', // Change to the desired active background color
                  },
                }}
              > 
                <ListItemText primary={suggestion.title} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default SearchFilter;
