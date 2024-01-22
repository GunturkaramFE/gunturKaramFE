import React, { useEffect, useState } from 'react';
import { Button, Card, CircularProgress, Container, Radio, Typography } from '@mui/material';
import api from '../api';

const AddressPopup = ({selectAddress}) => {
  const [address, setAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isloading,setLoading]=useState()

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        setLoading(true)
        const response = await api.get('/user/getShippingAddress');
        if (response.success) {
          setAddress(response?.shippingAddresses);
        } else {
          setAddress([]);
        }
      } catch (error) {
        console.error('Error fetching addresses:', error);
        setAddress([]);
      } finally{
        setLoading(false)
      }
    };
    fetchAddress();
  }, []);

  const handleRadioChange = (shipping_id) => {
    const obj=address?.find((x)=>x.shipping_id==shipping_id)
    setSelectedAddress(obj)

    
     };

  const handleSelectButtonClick = () => {
       selectAddress(selectedAddress)
    
  };

  return (
    <>
      {address.length > 0 ? (
        <div style={{ width: '100%', height: '100%' }}>
          <Card
            className="card border"
            style={{
              width: '100%',
              height: '260px',
              overflow: 'scroll',
              overflowX: 'hidden',
              gap: '5px',
              padding: '2px'
            }}
          >
            {address.map((data) => (
              <Container
                key={data.shipping_id}
                className="Container border"
                style={{
                  width: '100%',
                  height: '80px',
                  display: 'flex',
                  flexDirection: 'row', // Set to 'row' for content in a row direction
                  justifyContent: 'space-between', // Adjust as needed
                  alignItems: 'center',
                  padding: '10px',
                  borderRadius: '5px'
                }}
              >
                <Radio
                  style={{ color: 'green' }}
                  value={data.shipping_id}
                  checked={selectedAddress && selectedAddress.shipping_id === data.shipping_id}
                  onChange={()=>{handleRadioChange(data.shipping_id)}}
                />
                <div style={{ flex: 1 }}>
                  <Typography>
                    {`${data.name}, ${data.housenumber}, ${data.street}, ${data.city}, ${data.state}, ${data.country}.`}
                  </Typography>
                </div>
              </Container>
            ))}
          </Card>
        </div>
      ) : (
        <> <Card
        className="card border"
        style={{
          width: '100%',
          height: '260px',
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          gap: '5px',
          padding: '2px'
        }}
      >{isloading?<><CircularProgress color="inherit" /></>:<>No Address Found</>}</Card></>
      )}

      <div style={{ display: 'flex', justifyContent: 'end', gap: '10px', paddingTop: '10px' }}>
        <Button variant="contained" color="success" onClick={handleSelectButtonClick}>
        Add New Address
        </Button>
       {address.length > 0&& <Button variant="contained" color="success" onClick={handleSelectButtonClick}>
          Select
        </Button>}
      </div>
    </>
  );
};

export default AddressPopup;
