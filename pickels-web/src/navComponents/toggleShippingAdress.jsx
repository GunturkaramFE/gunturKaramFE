import { useState } from "react";
import AddressForm from "./Addressform";
import ViewShippingAddress from "./shippingAddresscontainers";

const ToggleShippingAdress =()=>{
    const[toggle,setToggle]=useState(1)
const handleToggle=(toggle)=>{
    setToggle(toggle)
}

if(toggle==1){
    return(<ViewShippingAddress handleToggle={handleToggle}/>)
}else if(toggle==2){
    return(<AddressForm handleToggle={handleToggle}/>)
}
}
export default ToggleShippingAdress;