import { useEffect, useState } from "react";
import AddressForm from "./Addressform";
import ViewShippingAddress from "./shippingAddresscontainers";
import { useNavigate } from "react-router-dom";

const ToggleShippingAdress =({urltoggle ,returnUrl})=>{
    const navigate =useNavigate()
    const[toggle,setToggle]=useState(1)
    useEffect(()=>{
        if(urltoggle){
       setToggle(urltoggle)
 }
    },[])
const handleToggle=(toggle)=>{
    if(returnUrl){
        navigate(returnUrl)
    }
    setToggle(toggle)
}
if(toggle==1){
    return(<ViewShippingAddress handleToggle={handleToggle}/>)
}else if(toggle==2){
    return(<AddressForm handleToggle={handleToggle}/>)
}
}
export default ToggleShippingAdress;