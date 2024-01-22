import { CheckCircle, Delete, Edit, RadioButtonUnchecked } from "@mui/icons-material";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { setAddress, clearAddress} from '../store/shippingAddressSlicer'

import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";
const AdressCard=({data})=>{
const dispatch=useDispatch()
const navigate=useNavigate()

    const editHandler=(address)=>{
        dispatch(setAddress(address))
        navigate(`/view-profile?option=EditAddress&toggle=2&backNav=/viewcart`);
    }

    useEffect(()=>{
console.log(data,'sdf')
    },[data])

    return(<>
    {data?<>
        <Card sx={{ width: '100%', mb: 2, boxShadow: 3, bgcolor: 'white', color: 'black' }}>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        {data.name}
                                    </Typography>
                                 
                                </Box>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    {`Mobile: ${data.mobile}`}
                                </Typography>
                                <Typography variant="body1">
                                    {`Address: ${data.housenumber}, ${data.street}, ${data.city}, ${data.state}, ${data.country}`}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    {`pincode: ${data.pincode}`}
                                </Typography>
                                <Box mt={2} display="flex" justifyContent="flex-end">
                                    <IconButton onClick={()=>editHandler(data)} color="primary">
                                        <Edit />
                                    </IconButton>
                                   
                                </Box>
                            </CardContent>
                        </Card>
    </>:<><Card sx={{ width: '100%', mb: 2, boxShadow: 3, bgcolor: 'white', color: 'black' }}>
    <CardContent>
        <Typography>
            No Address Found
        </Typography>
    </CardContent>
        </Card></>}
    </>)
}
export default AdressCard;