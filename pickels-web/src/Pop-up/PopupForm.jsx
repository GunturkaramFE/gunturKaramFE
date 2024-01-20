import React, { useEffect, useState } from 'react';
import './PopupForm.css'; // Import a CSS file for styling

const PopupForm = ({fun,ispop,formData,data,width}) => {
const [isPopupOpen, setPopupOpen] = useState(ispop);
  const handlePopupClose = () => {
    fun()
  };

  return (
    <div>

      {ispop && (
        <div className="popup-overlay" style={{ zIndex: 10000000}} >
          <div className="popup-form" style={{width:width,height:"350px"}}>
            <button className="close-button" onClick={handlePopupClose}>
              &times;
            </button>
             <form>
             {formData}
             </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
