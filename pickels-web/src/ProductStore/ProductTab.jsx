import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { setAllProducts } from '../store/allProductsSlicer';
import api from '../api';
import { Grid } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Grid
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Grid>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProductTab = () => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const allproducts = useSelector(state => state.allProducts);

  const fetchAllProducts = async () => {
    const products = await api.get('/user/get-all-products');
    dispatch(setAllProducts(products?.items || []));
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    console.log(allproducts);
  }, [allproducts]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMobile = window.innerWidth <= 600;

  return (
    <>
      <Box sx={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%',position:'fixed',height:'7.8vh',backgroundColor:'white' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant={isMobile ? 'scrollable' : 'standard'}
            scrollButtons={isMobile ? 'auto' : 'off'}
          >
            <Tab label="All PRODUCTS" {...a11yProps(0)} />
            <Tab label="CHICKEN PICKLES" {...a11yProps(1)} />
            <Tab label="MUTTON PICKLES" {...a11yProps(2)} />
            <Tab label="FISH PICKLES" {...a11yProps(3)} />
            <Tab label="PRAWN PICKLES" {...a11yProps(4)} />
          </Tabs>
        </Box>

  <Grid container justifyContent="center" zIndex="-3" position="absolute"  >
 <CustomTabPanel value={value} index={0}  height="84vh" width="100%"  style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
  <Grid container spacing={3} justifyContent="center" marginTop={2.5}>
    {allproducts?.map((product, index) => (
      <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
        <Card data={product} />
      </Grid>
    ))}
  </Grid>
</CustomTabPanel>
       <CustomTabPanel value={value} index={1} overflow="scroll" height="84vh" width="100%"  style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
              <Grid container spacing={3} justifyContent="center" marginTop={2.5}  >
                {allproducts?.map((product, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card data={product} />
                  </Grid>
                ))}
         </Grid>
       </CustomTabPanel>
       <CustomTabPanel value={value} index={2} overflow="scroll" height="84vh" width="100%" style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
              <Grid container spacing={3} justifyContent="center"  marginTop={2.5}  >
                {allproducts?.map((product, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card data={product} />
                  </Grid>
                ))}
     </Grid>
       </CustomTabPanel>
       <CustomTabPanel value={value} index={3} overflow="scroll" height="84vh" width="100%" style={{ overflowY: 'scroll', overflowX: 'hidden' }} >
              <Grid container spacing={3} justifyContent="center"  marginTop={2.5}  >
                {allproducts?.map((product, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card data={product} />
                  </Grid>
                ))}
     </Grid>
       </CustomTabPanel>
       <CustomTabPanel value={value} index={4} overflow="scroll" height="84vh" width="100%" style={{ overflowY: 'scroll', overflowX: 'hidden' }} >
              <Grid container spacing={3} justifyContent="center"  marginTop={2.5}  >
                {allproducts?.map((product, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card data={product} />
                  </Grid>
                ))}
     </Grid>
       </CustomTabPanel>
          {/* Other CustomTabPanel components */}
    </Grid>
      </Box>
    </>
  );
};

export default ProductTab;
