import React from 'react'
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { clearShoppingData } from '../store/shoppingSlicer'
import {useNavigate} from 'react-router-dom'

const Logout = ({onLogout}) => {
  const navigate=useNavigate()
  const dispatch= useDispatch()
    const handleLogout = () => {
    localStorage.removeItem('Auth');
    dispatch(clearShoppingData())
    onLogout()
  };
  const handleMouseEnter = () => {
    document.body.style.cursor = 'pointer';
  };

  const handleMouseLeave = () => {
    document.body.style.cursor = 'default';
  };
  return (
    <Paper elevation={3}   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ width: '160px', height: '120px', display: 'flex', flexDirection: 'column', borderRadius: '8px' ,color:'#363737' }}>
    <div onClick={()=>navigate('/view-profile')} style={{ width: '100%', height: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center',  borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
      MyProfile
    </div>
    <div onClick={()=>navigate('/MyOrders')} style={{ width: '100%', height: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      MyOrders
    </div>
    <div onClick={handleLogout} style={{ width: '100%', height: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
      Logout
    </div>
  </Paper>

  )
}

export default Logout
