import React, { useState } from 'react'
import './Card.css'
import PopupForm from '../Pop-up/PopupForm'
import AddToCart from './AddToCart'
import RatingComponent from './RatingComponent'
const Card = ({data}) => {
  const[pop,setPopUp]=useState(false)
  const HandlePopup=()=>{
    setPopUp(!pop)
    }    

    console.log('data',data)
  return (
    <div style={{width:'20%',height:'30%',position: 'relative', // Set position to relative or absolute
    zIndex: 10000,  }}>
         <div className="card  " style={{width:'300px',height:'auto',margin: '0', padding: '0'}}>
         <div  className="card-body" style={{ margin: '0', padding: '0', display: 'flex', flexDirection: 'column'}} >
         <div style={{position:'relative'}}>       
         <div style={{width:'100%',height:'50%',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center'}} >
         <img id='ImageHover' src={data.url || ''} alt="" style={{ objectFit: 'contain', height: '250px' }} />

         </div>
         </div>        
         <div style={{ width: '100%', height: '40%',padding: '0', margin: '0', display: 'flex', flexDirection: 'column',justifyContent:"center",alignItems:"center" }}>
            <p  style={{ margin: '0' ,fontWeight:'bold',color:'grey' }}>{data.title}</p>
            <div className='select-container'>
            <select
                            className="form-select form-select-sm"
                            aria-label="Small select example"
                            onChange={(e) => {}}
                          
                          >
                            {JSON.parse(data.pricelist).map((x, y) => (
                              <option key={y} value={y}>
                                {x.price + ' --- ' + x.quantity}
                              </option>
                            ))}
                          </select>
           </div>
           <bdi style={{ margin: '0',color:'green',fontWeight:'bold' }}><span>₹ </span> 200.00</bdi>

         <div>
          <RatingComponent/>
         </div>
        <div style={{display:'flex',width:'100%',justifyContent:'space-evenly',padding:'6px'}}>
        <button
        className="btn btn-success btn-block "
        type="button"
        style={{backgroundColor: 'green', color: 'white', width:'35%'  }}  >
         View
       </button>
        <button
        className="btn btn-success btn-block "
        type="button"
        style={{backgroundColor: 'green', color: 'white', width:'35%'  }} 
        onClick={HandlePopup}>
        ADD+
        </button>
        </div>
        <div style={{width:'100%',height:'auto'}}>
        <PopupForm ispop={pop} formData={<AddToCart/>} fun={HandlePopup} width='460px'/>
        </div>
        </div>
       </div>
       </div>
    </div>  
  )
}

export default Card
