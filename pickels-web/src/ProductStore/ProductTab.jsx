import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
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
    </div>
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



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMobile = window.innerWidth <= 600; // Set your own breakpoint

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
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
        <CustomTabPanel value={value} index={0}>
          <Card />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        Chicken-Pickles
      </CustomTabPanel>   
      <CustomTabPanel value={value} index={2}>
        Mutton-Pickles
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Fish-Pickles
      </CustomTabPanel> 
      <CustomTabPanel value={value} index={4}>
        Prawn-Pickles
      </CustomTabPanel> 
      </Box>
    </div>
  );
};

export default ProductTab;
