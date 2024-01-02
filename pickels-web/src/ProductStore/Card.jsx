import React, { useState } from 'react'
import './Card.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Card = () => {
    const[container,setContainer]=useState(false)
  return (
    <div style={{width:'20%',height:'30%' }}>
         <div className="card  " style={{width:'300px',height:'auto',margin: '0', padding: '0'}}>
         <div  className="card-body" style={{ margin: '0', padding: '0', display: 'flex', flexDirection: 'column'}} >
        <div style={{position:'relative'}}>       
         <div style={{width:'100%',height:'60%',overflow:'hidden'}}
         onMouseEnter={() => setContainer(true)}
         onMouseLeave={() => setContainer(false)}
         >
         <img id='ImageHover' src="https://dwarakapickles.com/wp-content/uploads/2022/05/DrumStick-1-592x600.png" alt="" style={{ objectFit: 'contain' }} />
         </div>
         {container&&<div id='LikeSymbol'  style={{width:'12%',height:'10%', backgroundColor:"white" }}>
         <FavoriteBorderIcon style={{color:'red'}}/>
         </div>}
         </div>        
         <div style={{ width: '100%', height: '40%',padding: '0', margin: '0', display: 'flex', flexDirection: 'column',justifyContent:"center",alignItems:"center" }}>
            <p  style={{ margin: '0' ,fontWeight:'bold',color:'grey' }}>Gongura Pickle</p>
            <bdi style={{ margin: '0',color:'green',fontWeight:'bold' }}><span>₹ </span> 200.00</bdi>
            <button
        className="btn btn-success btn-block "
        type="button"
        style={{backgroundColor: 'green', color: 'white', width:'50%'  }}  >
         View
       </button>
        </div>
       </div>
       </div>
    </div>  
  )
}

export default Card
