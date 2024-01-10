import api from '../api';
import { useState } from 'react';
import MainMenu from './main';
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  Paper,
  Typography,
  Input,
  IconButton,
  InputLabel,
  FormControl,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const HandleAllProducts = () => {
  const [priceList, setPriceList] = useState([]);

  const handleAddPrice = () => {
    const newPrice = {
      price: '',
      quantity: '',
      unit: 'kg', // Default unit
    };

    setPriceList([...priceList, newPrice]);

    // Log the updated object with all options
    console.log('Updated Options:', {
      priceList: [...priceList, newPrice],
    });
  };

  const handleRemovePrice = (index) => {
    const updatedPriceList = [...priceList];
    updatedPriceList.splice(index, 1);

    setPriceList(updatedPriceList);

    // Log the updated object with all options
    console.log('Updated Options:', {
      priceList: updatedPriceList,
    });
  };

  const handlePriceChange = (index, field, value) => {
    const updatedPriceList = [...priceList];
    updatedPriceList[index][field] = value;

    setPriceList(updatedPriceList);

    // Log the updated object with all options
    console.log('Updated Options:', {
      priceList: updatedPriceList,
    });
  };
  const [formData, setFormData] = useState({
    file1: null,
    file2: null,
    title: '',
    startingPrice: '',
    stock: 0,
    category: '',
    subcategory: '',
  });

  const handleFileChange = (e, imageNumber) => {
    const fileValue = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`file${imageNumber}`]: fileValue,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('file1', formData.file1);
    formDataToSend.append('file2', formData.file2);
    formDataToSend.append('title', formData.title);
    formDataToSend.append('startingPrice', formData.startingPrice);
   
    formDataToSend.append('stock', formData.stock);
    formDataToSend.append('category', formData.category);

    try {
      const response = await api.post('/user/upload', formDataToSend);
      const imageUrl = response.data.imageUrl;
      console.log('Images uploaded successfully!', imageUrl);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <>
      <MainMenu />

      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="h4" color="primary" align="center" gutterBottom>
              Add Product
            </Typography>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                style={{ marginBottom: '15px' }}
              />

              <TextField
                label="Base Price"
                name="startingPrice"
                value={formData.startingPrice}
                onChange={handleChange}
                fullWidth
                style={{ marginBottom: '15px' }}
              />

              <TextField
                select
                label="Price List"
                name="priceList"                
                fullWidth
                style={{ marginBottom: '15px' }}
              >
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
              </TextField>





              <TextField
                type="number"
                label="Stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                fullWidth
                style={{ marginBottom: '15px' }}
              />
              <Button type="button" onClick={handleAddPrice} style={{ marginBottom: '15px' }}>
              Add Price
            </Button>
        
{priceList.map((price, index) => (
              <div key={index} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                <TextField
                  label={`Price ${index + 1}`}
                  type="number"
                  value={price.price}
                  onChange={(e) => handlePriceChange(index, 'price', e.target.value)}
                  style={{ marginRight: '10px' }}
                />
                <TextField
                  label={`Quantity ${index + 1}`}
                  type="number"
                  value={price.quantity}
                  onChange={(e) => handlePriceChange(index, 'quantity', e.target.value)}
                  style={{ marginRight: '10px' }}
                />
                <TextField
                  select
                  label={`Unit ${index + 1}`}
                  value={price.unit}
                  onChange={(e) => handlePriceChange(index, 'unit', e.target.value)}
                  style={{ marginRight: '10px', width: '80px' }}
                >
                  <MenuItem value="kg">kg</MenuItem>
                  <MenuItem value="grams">grams</MenuItem>
                </TextField>
                <IconButton onClick={() => handleRemovePrice(index)} aria-label={`Remove Price ${index + 1}`}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}

            {/* Add Price Button */}
            
              <TextField
                select
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                fullWidth
                style={{ marginBottom: '15px' }}
              >
                <MenuItem value="chicken">Chicken</MenuItem>
                <MenuItem value="mutton">Mutton</MenuItem>
              </TextField>

              <TextField
                select
                label="Subcategory"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                fullWidth
                style={{ marginBottom: '15px' }}
              >
                <MenuItem value="chicken-gongura">Chicken Gongura</MenuItem>
                <MenuItem value="mutton-gongura">Mutton Gongura</MenuItem>
              </TextField>

              <FormControl fullWidth style={{ marginBottom: '15px' }}>
                <InputLabel htmlFor="file-input1"></InputLabel>
                <Input
                  id="file-input1"
                  type="file"
                  name="file1"
                  onChange={(e) => handleFileChange(e, 1)}
                  style={{ display: 'none' }}
                />
                <InputLabel htmlFor="file-input2"></InputLabel>
                <Input
                  id="file-input2"
                  type="file"
                  name="file2"
                  onChange={(e) => handleFileChange(e, 2)}
                  style={{ display: 'none' }}
                />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                  <label htmlFor="file-input1">
                    <Button component="span" variant="contained" color="primary">
                      Choose image 1
                    </Button>
                  </label>
                  <label htmlFor="file-input2">
                    <Button component="span" variant="contained" color="primary">
                      Choose image 2
                    </Button>
                  </label>
                </div>

                {formData.file1 && formData.file2 && (
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ height: '10vh', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        src={URL.createObjectURL(formData.file1)}
                        alt="Preview1"
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                      />
                    </div>    <div style={{ height: '10vh', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        src={URL.createObjectURL(formData.file2)}
                        alt="Preview2"
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                      />
                    </div>
                  </div>
                )}
              </FormControl>

              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
       
           
            
    </>
  );
};

export default HandleAllProducts;