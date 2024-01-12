import { IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import indianStates from '../ProductStore/IndainStates';
import countries from '../asserts/Countries';
import EditIcon from '@mui/icons-material/Edit';

const Addressform = () => {
  const [Data, setData] = useState({
    name: '',
    phone: '',
    hno:'',
    Street:'',
    Village:'',
    Landmark:'',
    City:'',
    State:'',
    Pincode:'',
    Country:''
  });

  const [edit, setEdit] = useState(false);

  const InputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const EditClick = () => {
    setEdit(true);
  };

  const SaveClick = () => {
    // Add your save logic here
    console.log('Saved:', Data);
    setEdit(false);
  };
  return (
    <div style={{width:'100%'}}>
      <form>
       <div style={{width:'100%',display:'flex',marginBottom:'6px',justifyContent:'space-between'}}>
            <Typography variant="h6" component="div" align="center">
              Address
            </Typography>
            <IconButton id='editButton' onClick={EditClick} size="large" style={{color:"green"}}>
            <EditIcon />
          </IconButton>
       </div>
      <div className="form-group mb-2">
        <label htmlFor="name">Full Name :</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={Data.name}
          onChange={InputChange}
          placeholder="Enter your name"
          disabled={!edit}
        />
      </div>
      
      <div className="form-group mb-2">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={Data.phone}
          onChange={InputChange}
          placeholder="Enter your phone number"
          disabled={!edit}
        />
      </div>
  <div className="form-group mb-2" style={{ display: 'flex' }}>
  <div style={{ width: '50%', marginRight: '10px' }}>
    <label htmlFor="hno">H.no:</label>
    <input
      type="text"
      className="form-control"
      id="hno"
      name="hno"
      value={Data.hno}
      onChange={InputChange}
      placeholder="Enter your H.no"
      disabled={!edit}
    />
  </div>

  <div style={{ width: '50%' }}>
    <label htmlFor="Street">Street:</label>
    <input
      type="text"
      className="form-control"
      id="Street"
      name="Street"
      value={Data.Street}
      onChange={InputChange}
      placeholder="Enter your street"
      disabled={!edit}
    />
  </div>
</div>
<div className="form-group mb-2" style={{ display: 'flex' }}>
  <div style={{ width: '50%', marginRight: '10px' }}>
    <label htmlFor="hno">Village:</label>
    <input
      type="text"
      className="form-control"
      id="Village"
      name="Village"
      value={Data.Village}
      onChange={InputChange}
      placeholder="Enter your Village"
      disabled={!edit}
    />
  </div>

  <div style={{ width: '50%' }}>
    <label htmlFor="street">Landmark:</label>
    <input
      type="text"
      className="form-control"
      id="Landmark"
      name="Landmark"
      value={Data.Landmark}
      onChange={InputChange}
      placeholder="Enter your Landmark"
      disabled={!edit}
    />
  </div>
</div>
<div className="form-group mb-2" style={{ display: 'flex' }}>
  <div style={{ width: '50%', marginRight: '10px' }}>
    <label htmlFor="hno">City:</label>
    <input
      type="text"
      className="form-control"
      id="City"
      name="City"
      value={Data.City}
      onChange={InputChange}
      placeholder="Enter your City"
      disabled={!edit}
    />
  </div>

  <div style={{ width: '50%' }}>
    <label htmlFor="street">State:</label>
    <select
  className="form-control"
  id="State"
  name="State"
  value={Data.State}
  onChange={InputChange}
  disabled={!edit}
  placeholder='Enter State'
>
  {indianStates.map((state) => (
    <option key={state} value={state}>
      {state}
    </option>
  ))}
</select>
  </div>
</div>
<div className="form-group mb-2" style={{ display: 'flex' }}>
  <div style={{ width: '50%', marginRight: '10px' }}>
    <label htmlFor="hno">Pincode:</label>
    <input
      type="text"
      className="form-control"
      id="Pincode"
      name="Pincode"
      value={Data.Pincode}
      onChange={InputChange}
      placeholder="Enter your Pincode"
      disabled={!edit}
    />
  </div>

  <div style={{ width: '50%' }}>
    <label htmlFor="street">Country:</label>
    <select
  className="form-control"
  id="Country"
  name="Country"
  value={Data.Country}
  onChange={InputChange}
  disabled={!edit}
>
  {countries.map((country) => (
    <option key={country} value={country}>
      {country}
    </option>
  ))}
</select>
  </div>
</div>
{edit && (
  <div style={{ display: 'flex', justifyContent: 'center', color: 'grey' ,marginTop:'10px'}}>
    <button type="button" className="btn btn-outline-success" onClick={SaveClick} style={{ width: '100px' }}>
      Save
    </button>
  </div>
)}
</form>
</div>
)
}

export default Addressform
