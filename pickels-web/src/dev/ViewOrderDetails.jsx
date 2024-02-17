import React from 'react';
import { Typography, Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Grid, Card, CardContent } from '@mui/material';

const ViewOrderDetails = ({ data,HandleClose }) => {
    const order = data[0]; // Assuming always one order in data array

    // Parse the JSON string stored in order.Items
    const items = JSON.parse(order.Items);
    
    // Parse the shipping and billing addresses
    const shippingAddress = JSON.parse(order.ShippingAddress);
    const billingAddress = JSON.parse(order.BillingAddress);

    return (
        <Grid style={{ width: '100%', padding: 20 }}>
            <Button variant="contained" onClick={HandleClose} style={{ marginBottom: 20 }}>Close</Button>
            <Card>
                <CardContent>
                    <Typography variant="h6">Order Details</Typography>
                    <Typography variant="subtitle1">Order ID: {order.OrderID}</Typography>
                    <Typography variant="subtitle1">Order Date: {new Date(order.OrderDate).toLocaleString()}</Typography>
                    <Typography variant="subtitle1">Order Status: {order.OrderStatus}</Typography>
                    <Divider style={{ margin: '10px 0' }} />
                    <Typography variant="subtitle1">Shipping Address:</Typography>
                    <Typography variant="body1">
                        {`${shippingAddress.name}, ${shippingAddress.housenumber}, ${shippingAddress.street}, ${shippingAddress.city}, ${shippingAddress.state}, ${shippingAddress.pincode}`}
                    </Typography>
                    <Divider style={{ margin: '10px 0' }} />
                    <Typography variant="subtitle1">Billing Address:</Typography>
                    <Typography variant="body1">
                        {`${billingAddress.name}, ${billingAddress.housenumber}, ${billingAddress.street}, ${billingAddress.city}, ${billingAddress.state}, ${billingAddress.pincode}`}
                    </Typography>
                    <Divider style={{ margin: '10px 0' }} />
                    <Typography variant="subtitle1">Items:</Typography>
                    <List>
                        {items.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar alt={item.title} src={item.url} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.title}
                                    secondary={`Price: ${item.selectedQuantity.price} - Quantity: ${item.selectedQuantity.quantity} ${item.selectedQuantity.unit}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Divider style={{ margin: '10px 0' }} />
                    <Typography variant="subtitle1">Total Amount: {order.TotalAmount}</Typography>
                    <Typography variant="subtitle1">Payment Method: {order.PaymentMethod}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ViewOrderDetails;
