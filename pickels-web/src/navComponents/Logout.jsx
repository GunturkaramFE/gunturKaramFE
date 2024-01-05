import React from 'react'
import Paper from '@mui/material/Paper';
const Logout = () => {
  return (
    <Paper elevation={3} style={{ width: '160px', height: '120px', display: 'flex', flexDirection: 'column', borderRadius: '8px' ,color:'#363737'}}>
    <div style={{ width: '100%', height: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center',  borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
      MyProfile
    </div>
    <div style={{ width: '100%', height: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      MyProduct
    </div>
    <div style={{ width: '100%', height: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
      Logout
    </div>
  </Paper>

  )
}

export default Logout
