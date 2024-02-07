import React, { useState } from 'react';
import { isValidEmail } from '../helpers/validations';
import api from '../api';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
       if (!isValidEmail(email)) {
      setError('Invalid email format');
      return;
    }
    let payload={
   document:{
    email,
    name:'user',
   }
    }
    api.post('/user/register', payload)
    .then(response => {
       if (response.success==true) {
          alert('verification-link-sent')       
      }else if(response.success==true&&response.error=='User already exists'){
        setError('user-already exist');
      }else{
        setError("something went wroung")
      }
    })
    .catch(error => {
     setError('Signup failed due to a network error. Please try again.');
     console.log(error)
    });
  
  };

  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    color: isHovered ? 'red' : 'green',
    textDecoration: 'none',
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
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
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="text-center pt-1 mb-1 pb-1">

    <button
     className="btn btn-success btn-block fa-lg gradient-custom-2 mb-3 w-100"
    type="button"
    onClick={handleSignup}
    style={{
      backgroundColor: 'green',color: 'white' }}
    >
    SignUp
    </button>  
    </div>
         

        </form>
      </div>
    </div>
  );
};

export default Signup;
