import React, { useEffect, useState } from "react";
import MainMenu from "./main";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Grow,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import api from '../api'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ManageOrders = () => {
  const today = new Date().toISOString().slice(0, 10);
  const pastTenDays = new Date(new Date().setDate(new Date().getDate() - 10))
    .toISOString()
    .slice(0, 10);

  const [startDate, setStartDate] = useState(pastTenDays);
  const [endDate, setEndDate] = useState(today);
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [dataToShow, setDataToShow] = useState('Placed');
  const [loading,setLoading]=useState(false)
  const [counts, setCounts] = useState({
    Placed: 0,
    Confirmed: 0,
    Delivered: 0
  });
   const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const fetchData = async () => {
    let obj = {
      filter: {
        startdate: startDate,
        enddate: endDate
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
          Delivered: 0
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

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleApplyFilter = () => {
    setTrigger(!trigger);
  };

  const handleCardClick = (title) => {
    if(title !== 'Manage')
    setDataToShow(title);
  };

  const parseItems = (items) => {
    return JSON.parse(items);
  };

  return (
    <>
      <MainMenu />
      {loading?<div style={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </div>:<><Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4}>
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
        <Grid item xs={12} md={4}>
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
        <Grid item xs={12} md={4}>
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
          { title: "Manage", description: "Here You Manage All Orders" }
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
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
      <div style={{ width: "100%",display:"flex",justifyContent:"center", maxHeight: "50vh", marginTop: "10px", overflowY: "auto", overflowX: "hidden" }}>
        <div style={{width:"70%"}}>    
          <Typography variant="h5" component="h2">
            {dataToShow}
          </Typography>
          <div style={{ overflowY: "auto", overflowX: "hidden" ,width:"70%"}}> 
          {data.map((order, index) => {
            if (order.OrderStatus === dataToShow) {
              return (
                <div key={index}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${index + 1}-content`}
                      id={`panel${index + 1}-header`}
                    >
                      <Typography>Order ID: {order.OrderID}</Typography>
                      <Typography>Date: {order.OrderDate}</Typography>
                      <Typography>Status: {order.OrderStatus}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {parseItems(order.Items).map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <img src={item.url} alt={item.title} />
                          <Typography>{item.title}</Typography>
                          <Typography>Price: {item.price}</Typography>
                          <Typography>Quantity: {item.quantity}</Typography>
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            }
            return null;
          })}
          </div>
        </div>
      </div></>
}
    </>
  );
};

export default ManageOrders;
