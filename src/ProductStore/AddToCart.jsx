import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseProduct, parseShoppingData } from '../helpers/parser';
import { setShoppingData } from '../store/shoppingSlicer';
import api from '../api';
import { Grid, Typography, Button, Card, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const AddToCart = ({ data,fun }) => {

const navigate= useNavigate()
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [count, setCount] = useState(1)
  const[err,setErr]=useState('')
  const dispatch=useDispatch()
  const [isAdded,setIsAdded]=useState(false)
let parsedData;
  const shoppingData = useSelector((state) => state.shopping);
  const handleDecrease = (e) => {
    if (count > 1) {
      e.preventDefault()
      setCount(count - 1)
        }
  };
  const handleIncrease = (e) => {
    e.preventDefault();
    setCount(count + 1)

  };
  const checkProductInCart= async()=>{
    let parsedData=await parseShoppingData(shoppingData)
    let filtered=parsedData?.cart.filter((x)=>x.id==data.id)
        if(filtered.length){
        let isSameCart=filtered.find((x)=>x.selectedQuantity.price==data.pricelist[selectedQuantity].price)   
        if(isSameCart){
       
           setIsAdded(true)
      }else{     
    setIsAdded(false)
      }
    }else{
      setIsAdded(false)
    }
  }
 useEffect(()=>{checkProductInCart()},[selectedQuantity])
  const updateCart=async(data)=>{
    let response= await api.put('/user/updateUserShoppingList',{document:{cart:data}});
    if(response.success){
         let obj={...shoppingData}
         obj.cart=data
         dispatch(setShoppingData(obj))
         
        }
        fun()
  }
  
  const selectedPrice = data.pricelist[selectedQuantity]?.price || 0;
  const priceperkg = data.pricelist[selectedQuantity]?.price /
    parseFloat(data.pricelist[selectedQuantity]?.quantity) /
    (data.pricelist[selectedQuantity]?.quantity.includes('kg') ? 1 : 1000);

const HandleAddToCart= async()=>{
  
  let cartitem={
   id:data.id,
   category:data.category,
   rating:data.rating,
   subCategory:data.subCategory,
   title:data.title,
   url:data.url,
   stock:data.stock
  }
  cartitem.price=selectedPrice
  cartitem.quantity=count
  cartitem.selectedQuantity=data.pricelist[selectedQuantity]
  parsedData=await parseShoppingData(shoppingData)

  cartitem.cartId=parsedData.cart.length+1;
     let jsonobj=JSON.stringify([cartitem,...parsedData.cart])  
       await updateCart(jsonobj)  
}
  return (
    <>
    {data && (
      <Grid item xs={12} sx={{height:'auto',display:'flex',justifyContent:'center',alignItems:'center'}} >        
            <Grid  spacing={2} height='auto'>
              <Typography variant="h5" align="center">ADD TO CART</Typography>
               <Card item xs={11} sx={{padding:'10px',width:'100%',margin:"10px 0px", boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)' }}>
                <Grid container justifyContent="center">
                  <Grid item xs={4} md={6} lg={4} sx={{display:'flex',justifyContent:'center',align:'center'}}>
                    <img
                      style={{ width: '100%', height: '150px', objectFit: 'contain' }}
                      src={data.url}
                      alt="Product"
                    />
                  </Grid>
                  <Grid item xs={8} md={8} lg={8}>
                    <Grid sx={{height:{xs:"70px",sm:'60px',md:"60px",lg:"60px"}}}>
                    <Typography variant="h6" align="start">{data.title}</Typography>
                    </Grid>
                    <Grid sx={{display:'flex'}}>
                    <Grid lg={6} sx={{display:'flex',flexDirection:'column'}}>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                      value={selectedQuantity}
                    >
                      {data.pricelist.map((x, y) => (
                        <option key={y} value={y}>
                          {x.price + ' --- ' + x.quantity}
                        </option>
                      ))}
                    </select>
                    <Typography variant="body2" align="start" gutterBottom sx={{marginTop:'10px',color:'grey',fontSize:{xs:"12px",sm:"15px",md:"15px",lg:'15px'}}}>
                      {/* <span className="text-muted">{priceperkg.toFixed(2)}/KG</span>
                      <br /> */}
                      category: {data.subCategory}
                    </Typography>
                    </Grid>
                    <Grid  lg={6}>
                    <Grid container alignItems="center" justifyContent="center" sx={{display:'flex'}}>
                      <Box  style={{  width: '30px',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer' }} onClick={handleDecrease}><i className="fas fa-minus">-</i></Box>
                      <input
                        id="form1"
                        min="1"
                        name="quantity"
                        value={count}
                        className="form-control form-control-sm"
                        style={{ height: '20px',width:"40%" }}
                      />
                      <Box style={{  width: '30px',display:'flex',justifyContent:'center',alignItems:'center' ,cursor:'pointer'}} onClick={handleIncrease}><i className="fas fa-plus"> +</i></Box>
                    </Grid>
                    <Typography variant="h6" align="center" sx={{marginTop:"10px"}}>
                    <span>&#8377;</span>  {selectedPrice * count}
                    </Typography>
                  </Grid>
                    </Grid>
                   

                  </Grid>
                 
                </Grid>
               </Card>
              <Typography variant="h6" align="center" style={{ color: 'red' }}>{err}</Typography>
  <Grid container xs={12} lg={12}  sx={{ width:'100%',display:'flex',justifyContent:'space-evenly',alignItems:'center' ,padding:'10px 0px'}}>
    <Button
      variant="contained"
      onClick={() => { window.open(`/ViewProduct/${data.id}`, '_blank'); }}
      style={{ backgroundColor: 'green', color: 'white', width: '30%' }}
    >
      View
    </Button>
    <Button
      variant="contained"
      onClick={() => { !isAdded && HandleAddToCart(); }}
      style={{ backgroundColor: 'green', color: 'white', width: '30%' }}
    >
      {!isAdded ? "ADD" : "Added"}
    </Button>
  </Grid>
  </Grid>
          </Grid>
    )}
  </>
  );
};

export default AddToCart;
