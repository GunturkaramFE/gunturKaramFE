import React, { useEffect, useState } from 'react';
import NavBar from '../navComponents/mainNav';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";  
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Card,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  ButtonBase,
  Typography,
  Checkbox,
  CircularProgress,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const MyOrders = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeFilter, setTimeFilter] = useState({ last30Days: false, lastSixMonths: false, lastYear: false });
  const [statusFilter, setStatusFilter] = useState({ Placed: true, Confirmed: true, Shipped: true, Delivered: true, cancelled: true, returned: true });

  const FetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/user/myorders');
      if (response.success) {
        setData(response.orders);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateString) {
    try {
      const dateObject = new Date(dateString);
      if (isNaN(dateObject)) {
        // Handle invalid date strings here
        return "Invalid Date";
      } else {
        return dateObject.toLocaleString();
      }
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  }

  const handleButtonClick = (event, orderId) => {
    event.stopPropagation();
    navigate(`/Orderdetails/${orderId}`, { replace: false });
  }

  useEffect(() => {
    FetchData();
  }, []);

  const isWithinLast30Days = (date) => {
    const today = new Date();
    const last30Days = new Date(today.setDate(today.getDate() - 30));
    return date >= last30Days;
  }

  const isWithinLastSixMonths = (date) => {
    const today = new Date();
    const lastSixMonths = new Date(today.setMonth(today.getMonth() - 6));
    return date >= lastSixMonths;
  }

  const isWithinLastYear = (date) => {
    const today = new Date();
    const lastYear = new Date(today.setFullYear(today.getFullYear() - 1));
    return date >= lastYear;
  }

  const filteredOrders = data.filter(order => {
    // Apply time filter
    if (timeFilter.last30Days && !isWithinLast30Days(new Date(order.OrderDate))) return false;
    if (timeFilter.lastSixMonths && !isWithinLastSixMonths(new Date(order.OrderDate))) return false;
    if (timeFilter.lastYear && !isWithinLastYear(new Date(order.OrderDate))) return false;
    
    // Apply status filter
    if (!(
      (statusFilter.Placed && order.OrderStatus === "Placed") ||
      (statusFilter.Confirmed && order.OrderStatus === "Confirmed") ||
      (statusFilter.Shipped && order.OrderStatus === "Shipped") ||
      (statusFilter.Delivered && order.OrderStatus === "Delivered") ||
      (statusFilter.cancelled && order.OrderStatus === "Cancelled") ||
      (statusFilter.returned && order.OrderStatus === "Returned")
    )) {
      return false;
    }
    
    return true;
  });
  

  return (
    <>
      <NavBar />
      {!loading ? (
        <Grid sx={{ height: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'column',md:"row",lg:'row' } }}>
          {/* Filters section */}
          <Grid variant="elevation" sx={{ width: { xs: '100%', sm: '100%',md:'15%',lg:'15%' }, height: { xs: '4%', sm: '10%' }, display: 'flex', flexDirection: { xs: 'row', sm: 'row',md:"column",lg:"column" }, justifyContent: 'center', alignItems: 'start' }}>
            <Grid sx={{ width: "100%", padding: '10px' }}>
              <Typography sx={{ margin: '10px 0px', fontWeight: "bold" }}>ORDER TIME</Typography>
              <hr />
              <Grid sm={{ display: 'flex', fontSize: '10px' }}> <Checkbox checked={timeFilter.last30Days} onChange={(e) => setTimeFilter({ ...timeFilter, last30Days: e.target.checked })} style={{ color: 'green' }} /> Last 30 days</Grid>
              <Grid sm={{ display: 'flex' }}> <Checkbox checked={timeFilter.lastSixMonths} onChange={(e) => setTimeFilter({ ...timeFilter, lastSixMonths: e.target.checked })} style={{ color: 'green' }} /> Last six months</Grid>
              <Grid sm={{ display: 'flex' }}> <Checkbox checked={timeFilter.lastYear} onChange={(e) => setTimeFilter({ ...timeFilter, lastYear: e.target.checked })} style={{ color: 'green' }} /> Last year </Grid>
            </Grid>
            <Grid sx={{ width: "100%", padding: '10px' }}>
              <Typography sx={{ margin: '10px 0px', fontWeight: "bold" }}>ORDER STATUS</Typography>
              <hr />
              <Grid sm={{ display: 'flex' }}> <Checkbox checked={statusFilter.Placed} onChange={(e) => setStatusFilter({ ...statusFilter, Placed: e.target.checked })} style={{ color: 'green' }} /> Placed</Grid>
              <Grid sm={{ display: 'flex' }}> <Checkbox checked={statusFilter.Confirmed} onChange={(e) => setStatusFilter({ ...statusFilter, Confirmed: e.target.checked })} style={{ color: 'green' }} /> Confirmed</Grid>
              <Grid sm={{ display: 'flex' }}> <Checkbox checked={statusFilter.Shipped} onChange={(e) => setStatusFilter({ ...statusFilter, Shipped: e.target.checked })} style={{ color: 'green' }} /> Shipped</Grid>
              <Grid sm={{ display: 'flex' }}> <Checkbox checked={statusFilter.Delivered} onChange={(e) => setStatusFilter({ ...statusFilter, Delivered: e.target.checked })} style={{ color: 'green' }} /> Delivered</Grid>
              <Grid sm={{ display: 'flex' }}> <Checkbox checked={statusFilter.cancelled} onChange={(e) => setStatusFilter({ ...statusFilter, cancelled: e.target.checked })} style={{ color: 'green' }} /> Cancelled </Grid>
              <Grid sm={{ display: 'flex' }}> <Checkbox checked={statusFilter.returned} onChange={(e) => setStatusFilter({ ...statusFilter, returned: e.target.checked })} style={{ color: 'green' }} /> Returned </Grid>
            </Grid>
          </Grid>
          {/* Orders section */}
          <Paper
            sx={{
              width: { xs: '100%', sm: '100%',md:'85%',lg:'85%' },
              height: { xs: '80vh', sm: '82.7vh' },
              padding: '20px',
              overflowY: 'auto',
              gap: '10px'
            }}
          >
            {filteredOrders.map((order) => (
              <ButtonBase sx={{ width: '100%' }} onClick={(event) => handleButtonClick(event, order.OrderID)} key={order.OrderID}>
                <Accordion
                  onClick={(event) => event.stopPropagation()}
                sx={{ width: { md: '100%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' } }}>
                  <AccordionSummary sm={12} md={12}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel1-content`}
                    id={`panel1-header`}
                    sx={{ width: '100%', height: { xs: "14vh", sm: "12vh" } }}
                  >
                    <Grid
                      sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', sm: 'row' },
                      }}
                    >
                      <Typography sx={{ fontFamily: 'Gill Sans' }}>Order ID: {order.OrderID}</Typography>
                      <Typography sx={{ fontFamily: 'Gill Sans' }}>payment: {order.PaymentMethod}</Typography>
                      <Typography sx={{ fontFamily: 'Gill Sans' }}>Date: {formatDate(order.OrderDate)}</Typography>
                      <Grid sx={{ display: 'flex', justify: 'center' }}>
                        <Typography sx={{ fontFamily: 'Verdana' }}>Status: </Typography>
                        <Typography sx={{ fontFamily: 'Verdana', color: 'green' }}> {order.OrderStatus}</Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    {JSON.parse(order.Items).map((y)=>( 
                      <Card
                        key={order.id} 
                        sx={{ width: '100%', height: {xs:'auto',sm:'20%'},  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={(event)=>{
                          handleButtonClick(event,order.OrderID)
                        }}
                      >
                        <Grid container sm={12}>
                          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ height: '100%', width: '60%',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <img src={y.url} style={{ height: 'auto' }} alt='Product' />
                            </Box>
                          </Grid>
                          <Grid sm={10} xs={12} sx={{display:'flex'}}  >
                            <Grid item xs={12} sm={8} style={{ paddingLeft: '15px', display: 'flex', alignItems: 'center' }}>
                              <Box sx={{display:'flex',flexDirection:'column',alignItems:'start',padding:{xs:'10px',sm:'0px',md:'0px'}}}>
                                <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" marginTop="1px">
                                  {y.title}
                                </Typography>
                                <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                                  Price: {y.price}
                                </Typography>
                                <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                                  Category: {y.category}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column',padding:{xs:'10px',sm:'0px',md:'0px'} }}>
                              <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
                                <FiberManualRecordIcon style={{color:'green',fontSize:'15px'}}/>
                                <Typography sx={{fontSize:{xs:"10px",sm:"14px"},fontWeight:'bold'}}>{JSON.parse(order.orderDetails)[JSON.parse(order.orderDetails).length-1].status}</Typography>
                                <Typography sx={{fontSize:{xs:"10px",sm:"14px"},fontWeight:'bold'}}>{formatDate(JSON.parse(order.orderDetails)[JSON.parse(order.orderDetails).length-1].date)}</Typography> 
                              </Grid>
                              <Typography sx={{fontSize:'12px'}}>Your item has been {JSON.parse(order.orderDetails)[JSON.parse(order.orderDetails).length-1].status}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Card>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </ButtonBase>
            ))}
          </Paper>
        </Grid>
      ) : (
        <div style={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default MyOrders;
