import React from 'react';
import './PopupForm.css'; // Import a CSS file for styling
import AddressPopup from '../ProductStore/AddressPopup';

const PopupForm = ({fun,ispop,width,selectAddress}) => {
const setAddressFromPopUp=(data)=>{
  selectAddress(data)
  handlePopupClose()
}
  const handlePopupClose = () => {
    fun()
  };

  return (
    <div>

      {ispop && (
        <div className="popup-overlay" style={{ zIndex: 10000000}} >
          <div className="popup-form" style={{width:width,height:"400px"}}>
            <div style={{display:"flex",justifyContent:"end"}}>
            <button className="close-button" onClick={handlePopupClose}>
              &times;
            </button>
            </div>
            <AddressPopup selectAddress={setAddressFromPopUp}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
