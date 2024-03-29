import React, { useEffect, useState } from "react";
import MainMenu from "./main";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Grow,
  TextField,
  Button,
  CircularProgress,
  OutlinedInput,
} from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import api from "../api";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import ViewOrderDetails from "./ViewOrderDetails";

const ManageOrders = () => {
  const navigate=useNavigate()
  const today = new Date().toISOString().slice(0, 10);
  const pastTenDays = new Date(
    new Date().setDate(new Date().getDate() - 10)
  ).toISOString().slice(0, 10);

  const [startDate, setStartDate] = useState(pastTenDays);
  const [endDate, setEndDate] = useState(today);
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Placed");
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState({});
  const[isSearching,setIsSearching]=useState(false)
  const[searchtext,setSearchText]=useState('')
  const[orderDetails,setOrderDetails]=useState()
  const[buttonLoading,setButtonLoading]=useState(false)
  const [counts, setCounts] = useState({
    Placed: 0,
    Confirmed: 0,
    Delivered: 0,
    Cancelled: 0,
    Shipped: 0,
  });

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const fetchData = async () => {
    // Convert the endDate to end of day
    const endOfDay = new Date(endDate);
    endOfDay.setHours(23, 59, 59, 999);

    let obj = {
      filter: {
        startdate: new Date(startDate).toISOString(), // Convert to ISO string
        enddate: endOfDay.toISOString() // Convert to ISO string
      }
    };
    try {
      setLoading(true);
      const response = await api.post('/user/Order/sort', obj);
      if (response.success) {
        setData(response.orders);

        const countObj = {
          Placed: 0,
          Confirmed: 0,
          Delivered: 0,
          Shipped: 0,
          Cancelled: 0
        };
        response.orders.forEach(order => {
          countObj[order.OrderStatus]++;
        });
        setCounts(countObj);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [trigger]);

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
  const handleOpenDetails = (event, orderId) => {
    event.stopPropagation();
    navigate(`/Orderdetails/${orderId}`, { replace: false });
  }
  const HandleButtonClick = async (event, status, orderId) => {
    event.stopPropagation();
    setUpdating({ ...updating, [orderId]: true }); 
    const response = await api.post('/user/order/get',{
      filter: {
    OrderID:orderId
    }

});
    try {      
      if(response){

    let itemStatus=status === 'Placed'
    ? 'Confirmed'
    : status === 'Confirmed'
        ? 'Shipped'
        : status === 'Shipped'
            ? 'Delivered'
            : 'Placed'
let orderDetails=JSON.parse(response.orders[0].orderDetails)
orderDetails.push({ date: new Date().toISOString(), status:itemStatus });
        let Data = {         
            OrderStatus: itemStatus,
            orderDetails:JSON.stringify(orderDetails),
        };
    api.post('/user/order/update',{updatedData:Data, orderId:orderId,})

    
      }
    } catch (error) {
      // Handle error
    } finally {
      setUpdating({ ...updating, [orderId]: false }); 
      setTrigger(!trigger)
    }
  };
const HandleSearchOrder=async()=>{
if(!searchtext){
  return 
}

  setButtonLoading(true)
try {
  const response = await api.post('/user/order/get',{
    filter: {
  OrderID:searchtext
  }

})
if(response.success){
  setOrderDetails(response.orders)
}
  
} catch (error) {
 
}finally{
  setIsSearching(true)
  setButtonLoading(false)
}}
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleApplyFilter = () => {
    setTrigger(!trigger);
  };
const HandleCloseDetails=()=>{
  setIsSearching(false)
}
  const handleCardClick = (title) => {
    if (title !== "Manage") {
      setSelectedStatus(title);
    }
  };

  const parseItems = (items) => {
    return JSON.parse(items);
  };

  return (
    <>
      <MainMenu />
     {!isSearching?<>{loading ? (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
    <div style={{ width: "100%", height: "5vh", display: "flex", justifyContent: "end", marginBottom: '10px' }}>
  <OutlinedInput
    id="outlined-search"
    placeholder="Order Id"
    onChange={(e) => setSearchText(e.target.value)}
    style={{ marginRight: '10px',height:"100%" }} 
  />
  <Button
    variant="contained"
    disabled={buttonLoading}
    onClick={HandleSearchOrder}
    style={{ height: "100%", borderRadius: 0 }} 
  >
    {buttonLoading ? <CircularProgress size={24} /> : "Search"}
  </Button>
</div>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} md={4}>
              <TextField
                id="start-date"
                label="Start Date"
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} md={4}>
              <TextField
                id="end-date"
                label="End Date"
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} md={4}>
              <Button variant="contained" onClick={handleApplyFilter}>
                Apply Filter
              </Button>
            </Grid>

            {[
              { title: "Placed", count: counts.Placed, description: "Total orders placed but not yet shipped." },
              { title: "Confirmed", count: counts.Confirmed, description: "Total orders confirmed from placed orders" },
              { title: "Shipped", count: counts.Shipped, description: "Total orders delivered to customers." },
              { title: "Delivered", count: counts.Delivered, description: "Total orders delivered to customers." },
              { title: "Cancelled", count: counts.Cancelled, description: "Total orders delivered to customers." },
            ].map((card, index) => (
              <Grid item xs={5.5} md={2.8} key={index}>
                <Grow in={true} timeout={index * 500}>
                  <Card
                    sx={{
                      textAlign: "center",
                      padding: 2,
                      cursor: "pointer",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      userSelect: "none",
                      WebkitUserSelect: "none",
                      MozUserSelect: "none",
                      msUserSelect: "none",
                    }}
                    onClick={() => handleCardClick(card.title)}
                  >
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      {card.count !== undefined && card.title !== "Manage Orders" ? (
                        <Typography variant="body1" component="p">
                          <b>{card.count}</b>
                        </Typography>
                      ) : (
                        <ManageAccountsIcon
                          style={{
                            fontSize: "2.5rem",
                            color: "#1976d2",
                            margin: "1.5rem 0",
                          }}
                        />
                      )}
                      <Typography variant="body2" component="p">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
          <Grid sx={{ width: "100%", display: "flex", justifyContent: "center", maxHeight: "50vh", marginTop: "10px", overflowY: "auto", overflowX: "hidden" }}>
            <Grid sx={{ width: { xs: "100%", sm: '70%' } }}>
              <Typography variant="h5" component="h2" sx={{ textAlign: { xs: "center", sm: 'start' } }}>
                {selectedStatus}
              </Typography>
              <Grid sx={{ overflowY: "auto", overflowX: "hidden", width: "100%" }}>
                {data.map((order, index) => {
                  if (order.OrderStatus === selectedStatus) {
                    return (
                      <div key={index}>
                        <Accordion>
                          <AccordionSummary sm={12}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index + 1}-content`}
                            id={`panel${index + 1}-header`}
                            sx={{ width: '100%', height: { xs: "14vh", sm: "10vh", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' } }}
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
                              <Typography sx={{ fontFamily: 'Gill Sans', cursor: 'text' }}>Order ID: {order.OrderID}</Typography>
                              <Typography sx={{ fontFamily: 'Gill Sans' }}>Date: {formatDate(order.OrderDate)}</Typography>
                              <Grid sx={{ display: 'flex', justify: 'center' }}>
                                <Typography sx={{ fontFamily: 'Verdana' }}>Status: </Typography>
                                <Typography sx={{ fontFamily: 'Verdana', color: 'green' }}> {order.OrderStatus}</Typography>
                              </Grid>
                              {/* <VisibilityIcon onClick={()=>{navigate('/ItemData')}} style={{color:'green'}} /> */}
                              {(order.OrderStatus === 'Placed' || order.OrderStatus === 'Confirmed' || order.OrderStatus === 'Shipped') && (
                                <Button
                                  variant="contained"
                                  disabled={updating[order.OrderID]} // Disable the button when updating is true for this row
                                  onClick={(event) => { HandleButtonClick(event, order.OrderStatus, order.OrderID) }}
                                >
                                  {updating[order.OrderID] ? ( // Display circular loading if updating is true for this row
                                    <CircularProgress size={24} /> // Adjust size as needed
                                  ) : (
                                    order.OrderStatus === 'Placed'
                                      ? 'Confirm Order'
                                      : order.OrderStatus === 'Confirmed'
                                        ? 'Mark as Shipped'
                                        : 'Mark as Delivered'
                                  )}
                                </Button>
                              )}
                            </Grid>

                          </AccordionSummary>
                          <AccordionDetails  onClick={(event) => handleOpenDetails(event,order.OrderID)}>
                            {parseItems(order.Items).map((item, itemIndex) => (
                              <Card
                                key={`${index}-${itemIndex}`}
                                sx={{ width: '100%', height: { xs: 'auto', sm: '20%' }, marginBottom: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                              >
                                <Grid container sm={12}>
                                  <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box sx={{ height: '100%', width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                      <img src={item.url} style={{ height: 'auto' }} alt={item.title} />
                                    </Box>
                                  </Grid>
                                  <Grid sm={10} xs={12} sx={{ display: 'flex' }}>
                                    <Grid item xs={12} sm={8} style={{ paddingLeft: '15px', display: 'flex', alignItems: 'center' }}>
                                      <Box>
                                        <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" marginTop="1px">
                                          {item.title}
                                        </Typography>
                                        <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                                          Price: {item.price}
                                        </Typography>
                                        <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                                          Quantity: {item.quantity}
                                        </Typography>

                                      </Box>
                                    </Grid>
                                    <Grid item xs={2} sm={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Card>
                            ))}
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    );
                  }
                  return null;
                })}
              </Grid>
            </Grid>
          </Grid>
        </>
      )}</>:<><ViewOrderDetails data={orderDetails} HandleClose={HandleCloseDetails}/></>}
    </>
  );
};

export default ManageOrders;
