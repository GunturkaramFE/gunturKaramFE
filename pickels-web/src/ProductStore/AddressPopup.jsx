import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import '../styles/AddressPopup.css'
const AddressPopup = () => {
  return (
    <div style={{width:'100%',height:'100%'}}>
    <div className='card border ' style={{width:'100%',height:"260px",overflow:"scroll",overflowX:"hidden",gap:'5px',padding:'2px'}}>
    <div  className='Container border' style={{width:"100%",height:'80px',display:'flex',gap:'10px',padding:'10px',borderRadius:'5px'}}>
          <input type='radio' style={{color:'green'}}/>
      <div id='Address' style={{ width: '85%', height: '60px', display: 'flex',padding:'5px', justifyContent: 'center', alignItems: 'center', position: 'relative' }} onMouseEnter={() => document.getElementById('EditIcon').style.display = 'block'} onMouseLeave={() => document.getElementById('EditIcon').style.display = 'none'}>
        Emily Davis, 789 Cherry Blossom Lane, Springville, CA 98765, United States.
      <EditIcon id='EditIcon' style={{ display: 'none',position:'absolute',right:'50%' }} />
      </div>
          <DeleteForeverIcon style={{color:'red',marginTop:'15px'}}/>
    </div>   
      </div>
       <div style={{display:'flex',justifyContent:'end',gap:'10px',paddingTop:'10px'}}>
       <button className='btn btn-success'>Update Address</button>
        <button className='btn btn-success'>Select</button>
      </div>
    </div>
  )
}

export default AddressPopup
