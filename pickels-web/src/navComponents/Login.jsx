import React, { useState } from 'react';
const Login = () => {
  const handleLogin = () => {
    // Add your login logic here
    console.log('Login button clicked');
  };
  const [isHovered, setIsHovered] = useState(false);

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
              placeholder="Phone number or email address"
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
            />           
          </div>
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
      <u>Forgot Password?</u>
    </a>
</div>
      
    </form>
    </div>
    </div>
  );
};

export default Login;
