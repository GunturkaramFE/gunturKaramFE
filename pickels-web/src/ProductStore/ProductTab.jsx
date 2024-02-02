import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { setAllProducts } from '../store/allProductsSlicer';
import api from '../api';
import { CircularProgress, Grid } from '@mui/material';
import AddToCartPopUp from '../reusableComponents/addToCartPopUp';
import AddToCart from './AddToCart';

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
  const allProducts = useSelector(state => state.allProducts);
  const [pop, setPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const fetchAllProducts = async () => {
    const products = await api.get('/user/get-all-products');
    dispatch(setAllProducts(products?.items || []));
  };

  const handlePopup = (data) => {
    setPopUpData(data);
    setPopUp(!pop);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (allProducts.length) {
      if (value === 0) {
        setFilteredProducts(allProducts);
      } else {
        const subcategory = subcategories[value - 1];
        const filtered = allProducts.filter(product => product.subCategory === subcategory);
        setFilteredProducts(filtered);
      }
    }
  }, [value, allProducts]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMobile = window.innerWidth <= 600;
  const subcategories = ["chicken", "mutton", "fish", "prawn"];

  return (
    <>
      {allProducts.length ? (
        <Box sx={{ width: '100%'}}>
          {pop && (
            <div>
              <AddToCartPopUp
                ispop={pop}
                fun={handlePopup}
                formData={<AddToCart data={popUpData} fun={handlePopup} />}
              />
            </div>
          )}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', backgroundColor: 'white' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant={isMobile ? 'scrollable' : 'standard'}
              scrollButtons={isMobile ? 'auto' : 'off'}
            >
              <Tab label="All PRODUCTS" {...a11yProps(0)} />
              {subcategories.map((subcategory, index) => (
                <Tab key={index} label={subcategory.toUpperCase() + " PICKLES"} {...a11yProps(index + 1)} />
              ))}
            </Tabs>
          </Box>

          <Grid container justifyContent="center" sx={{ height: { xs: '91vh', sm: '75vh' } }}>
            <CustomTabPanel value={value} index={0} sx={{ height: { xs: '91vh', sm: '75vh' } }} width="100%" style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
              <Grid container justifyContent="center" rowGap='26px'>
                {filteredProducts.map((product, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{ paddingLeft: { xs: '30px', sm: '13px' } }}>
                    <Card data={product} PopUpHandler={handlePopup} width='100%'/>
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
            {subcategories.map((subcategory, index) => (
              <CustomTabPanel key={index} value={value} index={index + 1} sx={{ height: { xs: '91vh', sm: '75vh' } }} width="100%" style={{ overflowY: 'scroll', overflowX: 'hidden' ,zIndex:0 }}>
                <Grid container justifyContent="center" rowGap='26px'>
                  {filteredProducts.filter(product => product.subCategory === subcategory).map((product, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{ paddingLeft: { xs: '30px', sm: '13px' } }}>
                      <Card data={product} PopUpHandler={handlePopup} width='100%' />
                    </Grid>
                  ))}
                </Grid>
              </CustomTabPanel>
            ))}
          </Grid>
        </Box>
      ) : (
        <div style={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default ProductTab;
