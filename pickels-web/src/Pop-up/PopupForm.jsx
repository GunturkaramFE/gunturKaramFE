import React, { useEffect, useState } from 'react';
import './PopupForm.css'; // Import a CSS file for styling

const PopupForm = ({fun,ispop,formData}) => {
  const [isPopupOpen, setPopupOpen] = useState(ispop);
  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    fun()
  };

  return (
    <div>

      {ispop && (
        <div className="popup-overlay" >
          <div className="popup-form" style={{width:'350px',height:"350px"}}>
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
