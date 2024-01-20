import React, { useState } from 'react';
import {
  Typography,
  Button,
  Box,
  TextField,
  Select,
  MenuItem,
  Grid,
  InputLabel,
  FormControl,
} from '@mui/material';
import { countriesWithStates } from '../asserts/countriesWithstates';

const AddressForm = () => {
  const [data, setData] = useState({
    name: '',
    phone: '',
    hno: '',
    street: '',
    village: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
  });

  const [edit, setEdit] = useState(false);
  const [pincodeError, setPincodeError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleSaveClick = () => {
    if (!isValidPincode(data.pincode)) {
      setPincodeError('Invalid PIN code. Please enter a valid 6-digit PIN.');
      return;
    }

    // Clear the error message when PIN code is valid
    setPincodeError('');

    // Your save logic here
    console.log('Saved:', data);
    setEdit(false);
  };

  const handleDiscardClick = () => {
    // Reset data to the original state
    setData({
      name: '',
      phone: '',
      hno: '',
      street: '',
      village: '',
      landmark: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
    });

    // Clear the PIN code error message
    setPincodeError('');

    // Set the edit mode to false
    setEdit(false);
  };

  const isValidPincode = (pincode) => {
    const pincodeRegex = /^\d{6}$/;
    return pincodeRegex.test(pincode);
  };

  return (
    <Box width="100%">
      <Typography variant="h6" component="div" align="center" sx={{ mb: 2 }}>
        Address
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Full Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Enter your name"
          disabled={!edit}
        />

        <TextField
          label="Phone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          disabled={!edit}
        />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="H.no"
              name="hno"
              value={data.hno}
              onChange={handleChange}
              placeholder="Enter your H.no"
              disabled={!edit}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Street"
              name="street"
              value={data.street}
              onChange={handleChange}
              placeholder="Enter your street"
              disabled={!edit}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Village"
              name="village"
              value={data.village}
              onChange={handleChange}
              placeholder="Enter your Village"
              disabled={!edit}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Landmark"
              name="landmark"
              value={data.landmark}
              onChange={handleChange}
              placeholder="Enter your Landmark"
              disabled={!edit}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="City"
              name="city"
              value={data.city}
              onChange={handleChange}
              placeholder="Enter your City"
              disabled={!edit}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="state">State</InputLabel>
              <Select
                label="State"
                name="state"
                value={data.state}
                onChange={handleChange}
                disabled={!edit}
              >
                {countriesWithStates.find((country) => country.country === data.country)?.states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Pincode"
              name="pincode"
              value={data.pincode}
              onChange={handleChange}
              placeholder="Enter your Pincode"
              disabled={!edit}
              error={Boolean(pincodeError)}
              helperText={pincodeError}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="country">Country</InputLabel>
              <Select
                label="Country"
                name="country"
                value={data.country}
                onChange={handleChange}
                disabled={!edit}
              >
                {countriesWithStates.map((country) => (
                  <MenuItem key={country.country} value={country.country}>
                    {country.country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {edit ? (
          <>
            <Button variant="outlined" color="success" onClick={handleSaveClick} sx={{ width: '120px', mr: 2 }}>
              Save
            </Button>
            <Button variant="outlined" color="error" onClick={handleDiscardClick} sx={{ width: '120px' }}>
              Discard Changes
            </Button>
          </>
        ) : (
          <Button variant="outlined" color="success" onClick={handleEditClick} sx={{ width: '120px' }}>
            Edit
          </Button>
        )}
      </Box>
    </Box>
  );
};
export default AddressForm;
