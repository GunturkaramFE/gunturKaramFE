import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Card, CardContent, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Delete, Edit, CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import api from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress, clearAddress } from '../store/shippingAddressSlicer';
const ViewShippingAddress = ({handleToggle}) => {
    const [loading, setLoading] = useState(true);
    const [addresses, setAddresses] = useState([]);
    const [error, setError] = useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deletingAddressId, setDeletingAddressId] = useState(null);
    const [trigger, setTrigger] = useState(false);
    const dispatch = useDispatch();
  
    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const response = await api.get('/user/getShippingAddress');
                setAddresses(response?.shippingAddresses);
            } catch (error) {
                setError('No Addresses Added');
            } finally {
                setLoading(false);
            }
        };
        fetchAddresses();
  
    }, [trigger]);
const handleSetDefault=async(shipping_id)=>{
    setLoading(true)
try {
    await api.put('/user/setDefaultAddress',{
        filter:{shipping_id:shipping_id}
    })
} catch (error) {
    
}finally{
    setTrigger(!trigger)
    setLoading(false)
}


}
    const handleDelete = (shippingId) => {
        setDeletingAddressId(shippingId);
        setDeleteDialogOpen(true);
    };
    const handleEdit=(obj)=>{
    handleToggle(2)
    dispatch(setAddress(obj));
    }

    const confirmDelete = async () => {
        try {
            await api.delete('/user/removeShippingAddress', {
                data: { filter: { shipping_id: +deletingAddressId } }
            });


            setTrigger(!trigger);

            setDeleteDialogOpen(false);
        } catch (error) {
            setTrigger(!trigger);
            setDeleteDialogOpen(false);
        }
    };

    const cancelDelete = () => {
        setDeletingAddressId(null);
        setDeleteDialogOpen(false);
    };

    return (
        <Box
            width="100%"
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            overflowY="auto"
            position="relative"
            padding={2}
            bgcolor="#f5f5f5"
        >
           {loading && (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
    >
        <CircularProgress color="primary" variant="indeterminate" />
    </Box>
)}


            {!loading && error && (
                <Typography variant="body1" color="error" sx={{ mb: 2 }}>
                    {error}
                </Typography>
            )}

            {!loading && !error && !addresses && (
                <Typography variant="body1" sx={{ mb: 2 }}>
                    No addresses found.
                </Typography>
            )}

            {!loading && !error && addresses && addresses.length > 0 && (
                <Box width="100%" overflow="auto">
                    {addresses.map((address) => (
                        <Card key={address.shipping_id} sx={{ width: '100%', mb: 2, boxShadow: 3, bgcolor: 'white', color: 'black' }}>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        {address.name}
                                        {address.is_default && (
                                            <Typography variant="body2" color="primary" component="span" sx={{ marginLeft: 1 }}>
                                                (Default)
                                            </Typography>
                                        )}
                                    </Typography>
                                    <IconButton>
                                        {address.is_default ? (
                                            <CheckCircle color="success" />
                                        ) : (
                                            <RadioButtonUnchecked color="action" onClick={() => {handleSetDefault(address.shipping_id)}} />
                                        )}
                                    </IconButton>
                                </Box>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    {`Mobile: ${address.mobile}`}
                                </Typography>
                                <Typography variant="body1">
                                    {`Address: ${address.housenumber}, ${address.street}, ${address.city}, ${address.state}, ${address.country}`}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    {`pincode: ${address.pincode}`}
                                </Typography>
                                <Box mt={2} display="flex" justifyContent="flex-end">
                                    <IconButton color="primary" onClick={()=>{handleEdit(address)}}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(address.shipping_id)} color="error">
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            )}

            {/* "Add New Address" button fixed at the bottom */}
            <Button variant="contained" color="primary" sx={{ position: 'fixed', bottom: 16 }}>
                Add New Address
            </Button>

            {/* Delete confirmation dialog */}
            <Dialog open={deleteDialogOpen} onClose={cancelDelete}>
                <DialogTitle>Delete Address</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">Are you sure you want to delete this address?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmDelete} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ViewShippingAddress;
