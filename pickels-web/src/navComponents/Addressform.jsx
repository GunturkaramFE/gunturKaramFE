import React, { useEffect, useState } from 'react';
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
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { countriesWithStates } from '../asserts/countriesWithstates';
import { useSelector } from 'react-redux';
import api from '../api';

const EditAddressForm = ({ handleToggle }) => {
  const [data, setData] = useState({
    name: '',
    mobile: '',
    housenumber: '',
    street: '',
    village: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
  });

  const [pincodeError, setPincodeError] = useState('');
  const prefilledDetails = useSelector((state) => state.shippingAddress.address);
  const [edit, setEdit] = useState(prefilledDetails?false:true);
  const[isediting,setIsEditing]=useState(false)
  useEffect(() => {
     if (prefilledDetails) {
        setData({
        name: prefilledDetails.name || '',
        mobile: prefilledDetails.mobile || '',
        housenumber: prefilledDetails.housenumber || '',
        street: prefilledDetails.street || '',
        village: prefilledDetails.village || '',
        landmark: prefilledDetails.landmark || '',
        city: prefilledDetails.city || '',
        state: prefilledDetails.state || '',
        pincode: prefilledDetails.pincode || '',
        country: prefilledDetails.country || '',
      });
    }
  }, [prefilledDetails]);

  const handleChange = (e) => {
if(isediting){
  setIsEditing(false)
}
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setEdit(true);
  };
const handleAddAdress=async()=>{
  setIsEditing(true)
  let isallow=true;
  Object.keys(data).forEach((key) => {
    if (key === 'mobile' && !isValidMobileNumber(data[key])) {
      isallow=false
    } else if (key === 'pincode' && !isValidPincode(data[key])) {
     isallow=false
    } else if (key !== 'mobile' && key !== 'pincode' && data[key].trim().length < 3) {
      isallow=false
    }
  });
  setPincodeError('');
if(!isallow){
  return
}
try {
let  body={
    document:{...data}
  }
  await api.post('/user/addShippingAddress', body);

} catch (error) {
  console.log(error)
} finally{
  handleToggle(1);
  setIsEditing(false)
}


}
  const handleSaveClick = async () => {
    setIsEditing(true)
    let isallow=true;
    Object.keys(data).forEach((key) => {
      if (key === 'mobile' && !isValidMobileNumber(data[key])) {
        isallow=false
      } else if (key === 'pincode' && !isValidPincode(data[key])) {
       isallow=false
      } else if (key !== 'mobile' && key !== 'pincode' && data[key].trim().length < 3) {
        isallow=false
      }
    });

    setPincodeError('');
    const changedFields = Object.keys(data).reduce((changed, key) => {
      if (data[key] !== prefilledDetails[key]) {
        changed[key] = data[key];
      }
      return changed;
    }, {});
    if (Object.keys(changedFields).length === 0) {
      console.log('No changes to save.');
      setEdit(false);
      return;
    }
if(!isallow){
  return
}
    try {
      let body = {
        filter: {
          shipping_id: +prefilledDetails.shipping_id,
        },
        document: {
          ...changedFields,
        },
      };
      await api.put('/user/saveAddress', body);
      handleToggle(1);
    } catch (error) {
      // Handle error
    } finally {
      setEdit(false);
    }
  };

  const handleDiscardClick = () => {
    setPincodeError('');
    setEdit(false);
    handleToggle(1);
  };

  const isValidPincode = (pincode) => {
    const pincodeRegex = /^\d{6}$/;
    return pincodeRegex.test(pincode);
  };

  const isValidMobileNumber = (mobileNumber) => {
    const mobileNumberRegex = /^\d{10}$/;
    return mobileNumberRegex.test(mobileNumber);
  };

  return (
    <Box width="100%">
      <IconButton sx={{ alignSelf: 'flex-start' }} disabled={false} onClick={() => handleToggle(1)}>
        <ArrowBackIcon color="primary" />
      </IconButton>

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
          error={isediting&&data.name.trim().length < 3}
          helperText={data.name.trim().length < 3 ? 'Field should have at least 3 characters.' : ''}
        />

        <TextField
          label="Mobile"
          name="mobile"
          value={data.mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
          disabled={!edit}
          error={isediting&&Boolean(data.mobile.trim() && !isValidMobileNumber(data.mobile))}
          helperText={data.mobile.trim() && !isValidMobileNumber(data.mobile) ? 'Invalid mobile number.' : ''}
        />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="H.no"
              name="housenumber"
              value={data.housenumber}
              onChange={handleChange}
              placeholder="Enter your H.no"
              disabled={!edit}
              error={isediting&&data.housenumber.trim().length < 3}
              helperText={data.housenumber.trim().length < 3 ? 'Field should have at least 3 characters.' : ''}
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
              error={isediting&&data.street.trim().length < 3}
              helperText={data.street.trim().length < 3 ? 'Field should have at least 3 characters.' : ''}
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
              error={isediting&&data.village.trim().length < 3}
              helperText={data.village.trim().length < 3 ? 'Field should have at least 3 characters.' : ''}
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
              error={isediting&&data.landmark.trim().length < 3}
              helperText={data.landmark.trim().length < 3 ? 'Field should have at least 3 characters.' : ''}
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
              error={isediting&&data.city.trim().length < 3}
              helperText={data.city.trim().length < 3 ? 'Field should have at least 3 characters.' : ''}
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
              error={isediting&&Boolean(pincodeError || (data.pincode.trim() && !isValidPincode(data.pincode)))}
              helperText={
                pincodeError || (data.pincode.trim() && !isValidPincode(data.pincode))
                  ? pincodeError || 'Invalid PIN code.'
                  : ''
              }
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
          { prefilledDetails?<><Button variant="outlined" color="success" onClick={handleSaveClick} sx={{ width: '120px', mr: 2 }}>
              Save
            </Button>
            <Button variant="outlined" color="error" onClick={handleDiscardClick} sx={{ width: '120px' }}>
              Discard Changes
            </Button></>:<>
            <Button variant="outlined" color="success" onClick={handleAddAdress} sx={{ width: '120px', mr: 2 }}>
              ADD 
            </Button>
            </>}
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

export default EditAddressForm;
