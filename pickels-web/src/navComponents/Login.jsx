import React, { useState } from 'react';
import { isValidEmail,isValidPassword } from '../helpers/validations';

import PopupForm from '../Pop-up/PopupForm';
import VerificationForm from '../Authorization/VerificationForm';

const Login = () => {
  const[ispop,setIsPopUp]=useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = () => {
   if (!isValidEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (!isValidPassword(password)) {
      setError('Enter Correct Password Format');
      return;
    }
    setError('loginn');
  };

  const [isHovered, setIsHovered] = useState(false);
const handlePopup=()=>{
setIsPopUp(!ispop)
}
  const linkStyle = {
    color: isHovered ? 'red' : 'green',
    textDecoration: 'none',
  };
  return (
    <div style={{width:'100%',height:'100%'}}>
      <div className="card-body p-md-1 mx-md-3">       

        <form>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example11">
              Enter Email
            </label>
            <input
              type="email"
              id="form2Example11"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example22">
              Password
            </label>
            <input
              type="password"
              id="form2Example22"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

       {error && <p style={{ color: 'red' }}>{error}</p>}
  <div className="text-center flex flex-col pt-1 mb-1 pb-1">
  <button
    className="btn btn-success btn-block fa-lg gradient-custom-2 mb-3"
    type="button"
    onClick={handleLogin}
    style={{
      backgroundColor: 'green', // Set the background color to green
      color: 'white',            // Set the text color to white
      // Add any other styles you want
    }}
  >
    Log in
  </button>
  
  <a
      href="#"
      style={linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
  >
      <u onClick={handlePopup}>Forgot Password?</u>
    </a>
    <PopupForm ispop={ispop} formData={<VerificationForm/>} fun={handlePopup}/>
</div>
      
    </form>
    </div>

        
    </div>
  );
};

export default Login;
