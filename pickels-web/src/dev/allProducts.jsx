import api from '../api';
import { useEffect, useState } from 'react';
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
  const [formData, setFormData] = useState({
    file1: null,
    file2: null,
    title: '',
    startingPrice: '',
    stock: 0,
    category: '',
    subcategory: '',
  });
  const [formValid, setFormValid] = useState(false);
const[url1,setUrl1]=useState('')
const [url2,setUrl2]=useState('')
  const handleAddPrice = () => {
    const newPrice = {
      price: '',
      quantity: '',
      unit: 'kg', 
    };

    setPriceList([...priceList, newPrice]);

    // Log the updated object with all options
    console.log('Updated Options:', {
      priceList: [...priceList, newPrice],
    });
    validateForm();
  };
 

  const handleRemovePrice = (index) => {
    const updatedPriceList = [...priceList];
    updatedPriceList.splice(index, 1);
    setPriceList(updatedPriceList);
    // Log the updated object with all options
    console.log('Updated Options:', {
      priceList: updatedPriceList,
    });
    validateForm();
  };

  const handlePriceChange = (index, field, value) => {
    const updatedPriceList = [...priceList];
    updatedPriceList[index][field] = value;

    setPriceList(updatedPriceList);

    // Log the updated object with all options
    console.log('Updated Options:', {
      priceList: updatedPriceList,
    });
    validateForm();
  };

  const handleFileChange = (e, imageNumber) => {
    const fileValue = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`file${imageNumber}`]: fileValue,
    }));
    validateForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm();
  };

  const validateForm = () => {
    // Check if all required fields are filled
    const isFormValid =
      formData.title !== '' &&
      formData.startingPrice !== '' &&
      formData.stock !== 0 &&
      formData.category !== '' &&
      formData.subcategory !== '' &&
      formData.file1 !== null &&
      formData.file2 !== null &&
      priceList.length > 0 &&
      priceList.every((price) => price.price !== '' && price.quantity !== '');
    setFormValid(isFormValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const files = [formData.file1, formData.file2];
      const uploadPromises = files.map(async (file, index) => {
        const formDataToSend = new FormData();
        formDataToSend.append('file', file);
        const response = await api.post('/user/upload', formDataToSend);
        const imageUrl = response.imageUrl;
        return imageUrl;
      });
  
      // Wait for all image uploads to complete
      const [url1, url2] = await Promise.all(uploadPromises);
  
      // Continue with the API call after image uploads
      let document = { ...formData };
      delete document.file1;
      delete document.file2;
      document.url = url1;
      document.url1 = url2;
      document.pricelist = JSON.stringify(priceList);
  
          const createItemResponse = await api.post('/user/createItem', {document});
      if (!createItemResponse.success){
        throw new Error('something went wroung');
      }
      console.log('Item created successfully:', createItemResponse);
    } catch (error) {
      console.error('Error uploading images or creating item:', error);
    }
  };
  

  return (
    <>
      <MainMenu/>

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

              <TextField
                select
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                fullWidth
                style={{ marginBottom: '15px' }}
              >
                <MenuItem value="chicken">Non-Veg</MenuItem>
                <MenuItem value="mutton">Veg</MenuItem>
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
                    </div>
                    <div style={{ height: '10vh', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        src={URL.createObjectURL(formData.file2)}
                        alt="Preview2"
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                      />
                    </div>
                  </div>
                )}
              </FormControl>

              <Button type="submit" variant="contained" color="primary" fullWidth disabled={!formValid}>
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
