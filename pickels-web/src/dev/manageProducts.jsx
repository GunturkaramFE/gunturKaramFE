import React, { useEffect, useState } from 'react';
import api from '../api';
import logo from '../asserts/logo.png';
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Grid,
  IconButton,
  Box,
  Typography,
  Pagination,
  CircularProgress,
  Button,
  Tooltip,
  Backdrop,
  Rating,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PopupForm from '../Pop-up/PopupForm';
import DeletePop from './DeletePop';

const ManageProducts = () => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [deletepop, setDeletepop] = useState({});
  const [loading, setLoading] = useState(false);
  const [filterKey, setFilterKey] = useState('id');
  const [filterValue, setFilterValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [backdrop, setBackdrop] = useState(false);
  const [itemsPerPage] = useState(3);

  const fetchProducts = async () => {
    const response = await api.get('/user/get-all-products');
    if (response.success) {
      setFetchedProducts(response.items);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const keysForDropdown = fetchedProducts?.length > 0 ? Object.keys(fetchedProducts[0]) : [];

  const AddtoTrend = async (productId) => {
    setBackdrop(true); // Show backdrop

    try {
      const response = await api.post('/user/trending-items/add', { document: { itemid: +productId } });

      if (response.success) {
        // handle success
      } else {
        alert('something went wrong');
      }
    } catch (error) {
      // Handle error
    } finally {
      setBackdrop(false); // Hide backdrop whether success or failure
    }
  };

  const DeleteProduct = async (productId) => {
    try {
      const payload = {
        filter: {
          id: productId,
        },
        dataToUpdate: {
          isDeleted: true,
        },
      };
      await api.put('/user/delete-Item', { ...payload });
    } catch (error) {
      // Handle error
    } finally {
      setDeletepop({ ...deletepop, [productId]: false });
    }
  };

  const handleDeletePopup = (productId) => {
    setDeletepop({ ...deletepop, [productId]: !deletepop[productId] });
  };

  const handleEdit = (productId) => {
    // Handle edit logic here
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredProducts = fetchedProducts && fetchedProducts.length > 0
    ? fetchedProducts.filter((product) => product[filterKey].toString().includes(filterValue))
    : [];

  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Grid container spacing={2} style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Card sx={{ width: '100%', height: '100%' }}>
                <CardContent>
                  <FormControl fullWidth>
                    <Select
                      labelId="filter-key-label"
                      id="filter-key-select"
                      value={filterKey}
                      onChange={(e) => setFilterKey(e.target.value)}
                    >
                      {keysForDropdown.map((key) => (
                        <MenuItem key={key} value={key}>
                          {key}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Card sx={{ width: '100%', height: '100%' }}>
                <CardContent>
                  <TextField
                    fullWidth
                    label={`Filter by ${filterKey}`}
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <div>
          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={backdrop}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
        {fetchedProducts.length && !loading ? (
          <Grid item xs={12}>
            {currentItems.map((product) => (
              <Card
                key={product.id}
                sx={{ width: '100%', marginBottom: 2, padding: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
              >
                <CardContent>
                  <Grid container>
                    <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Box style={{ height: '25vh' }}>
                        <img src={product.url} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8} style={{ paddingLeft: '15px' }}>
                      <Typography variant="subtitle1" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                        {product.title}
                      </Typography>
                      <Typography variant="body2" style={{ fontSize: '14px', color: '#666' }}>
                        Product ID: {product.id}
                      </Typography>
                      <Typography variant="body2" style={{ fontSize: '14px', color: '#666' }}>
                        Price: {product.startingPrice}
                      </Typography>
                      <Typography variant="body2" style={{ fontSize: '14px', color: '#666' }}>
                        Available Stock: {product.stock}
                      </Typography>
                      <select
                        aria-label="Small select example"
                        style={{ border: '1px solid #0d6efd', borderRadius: '3px' }}
                      >
                        {JSON.parse(product.pricelist).map((x, y) => (
                          <option key={y} value={y}>
                            {x.price + ' --- ' + x.quantity}
                          </option>
                        ))}
                      </select>
                      <Box component="fieldset" borderColor="transparent">
                        <Rating name={`rating-${product.id}`} value={product.rating} readOnly />
                      </Box>
                      <Grid container justifyContent="flex-end" marginTop="1rem">
                        <Tooltip title="Make product as trending">
                          <TrendingUpIcon onClick={() => { AddtoTrend(product.id) }} sx={{ marginTop: "10px" }} />
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton style={{ color: '#ff4d4f' }} onClick={() => handleDeletePopup(product.id)}>
                            <DeleteIcon />
                            {deletepop[product.id] && <DeletePop onConfirm={() => DeleteProduct(product.id)} onCancel={() => handleDeletePopup(product.id)} />}
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEdit(product.id)} style={{ color: '#1890ff' }}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Grid>
        ) : (
          <div className="d-flex align-items-center justify-content-center" style={{ height: "80%", width: "100%" }}>
            <CircularProgress color="primary" variant="indeterminate" />
          </div>
        )}
        {/* Pagination */}
        <Grid item xs={12} style={{ marginTop: '20px', textAlign: 'center' }}>
          <Pagination
            count={Math.ceil(filteredProducts.length / itemsPerPage)}
            page={currentPage}
            onChange={(event, value) => paginate(value)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ManageProducts;
