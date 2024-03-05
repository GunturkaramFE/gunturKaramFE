import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StorageIcon from "@mui/icons-material/Storage";
import MainMenu from "./main";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// ProductMenu component
const ProductMenu = () => {
    const navigate = useNavigate();

    const handleAddProductsClick = () => {
        navigate('../add-product');
    };

    const handleManageProductsClick = () => {
        navigate('../manage-products');
    };
    const handledeleteproducts = () => {
             navigate('../TrenditemRemove')
    };
    

    return (
        <>
            <MainMenu />
            <Box p={3}>
                <Grid container spacing={2}>
                    {/* Add Products Card */}
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <AddCircleOutlineIcon style={{ marginRight: "8px" ,color:"blue"}} />
                                    Add Products to Store
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Click the button below to add new products to your store's inventory.
                                </Typography>
                                <Button variant="contained" color="secondary" fullWidth onClick={handleAddProductsClick}>
                                    Add Products
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Manage Products Card */}
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <StorageIcon style={{ marginRight: "8px",color:"blue" }} />
                                    Manage Products
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    View and manage existing products in your store.
                                </Typography>
                                <Button variant="contained" color="secondary" fullWidth onClick={handleManageProductsClick}>
                                    View Products
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                <DeleteForeverIcon style={{ marginRight: "8px" ,color:"red"}}/>
                                  Manage Trending List
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Remove items from trending list
                                </Typography>
                                <Button variant="contained" color="secondary" fullWidth onClick={handledeleteproducts}>
                                    Remove
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
            
                </Grid>
            </Box>
        </>
    );
};

export default ProductMenu;
