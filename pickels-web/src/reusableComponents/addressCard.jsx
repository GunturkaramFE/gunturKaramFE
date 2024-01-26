import { Edit } from "@mui/icons-material";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { setAddress } from '../store/shippingAddressSlicer';
import { useNavigate } from 'react-router-dom';
const AdressCard = ({ data, pop }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const editHandler = (address) => {
        dispatch(setAddress(address));
        navigate(`/view-profile?option=EditAddress&toggle=2&backNav=/viewcart`);
    };

    return (
        <Card sx={{ width: '100%', mb: 2, boxShadow: 3, bgcolor: 'white', color: 'black' }}>
            <CardContent>
                {data ? (
                    <>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {data.name}
                            </Typography>
                            <IconButton onClick={() => editHandler(data)} color="primary">
                                <Edit />
                            </IconButton>
                        </Box>
                        <Typography variant="body1" sx={{ mb: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                            {`Mobile: ${data.mobile}`}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                            {`Address: ${data.housenumber}, ${data.street}, ${data.city}, ${data.state}, ${data.country}`}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                            {`Pincode: ${data.pincode}`}
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <a href="#" onClick={pop} style={{ color: "green", fontFamily: "sans-serif" }} className="card-link">
                                Change Address
                            </a>
                        </div>
                    </>
                ) : (
                    <>
                        <Typography variant="body1" sx={{ mb: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                            No Address Found
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <a href="#" onClick={pop} style={{ color: "green", fontFamily: "sans-serif" }} className="card-link">
                                Add Address
                            </a>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );
};

export default AdressCard;
