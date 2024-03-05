import React, { useState } from 'react';
import logo from '../asserts/logo.png';
import { isValidEmail } from '../helpers/validations';
import api from '../api';

const VerificationForm = ({closeHandler}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const[success,setSuccess]=useState(false)

  const handleSubmit= async () => {
    if (!isValidEmail(email)) {
      setError('email format is invalid');
      return;
    }
    try {
      let payload = {
        document: {
         email,        
        },
      };

      const response = await api.put('/user/forgot', payload);

      if (response.success === true) {
        setError(response.msg);
        setSuccess(true)
      } else if (response.success === false) {
        setError(response.msg);
      } else {
        setError('Something went wrong');
      }
    } catch (error) {
      setError('Confirmation failed due to a network error. Please try again.');
      console.log(error);
    }
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="card-body p-md-1 mx-md-3">
        <div style={{ width: '100%', height: '20%', display: 'flex', justifyContent: 'center' }}>
          <img src={logo} alt="" style={{ width: '200px', objectFit: 'contain' }} />
        </div>
       {success?<>
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
            <button
              className="btn btn-success btn-block fa-lg gradient-custom-2 mb-3 w-100"
              type="button"
              onClick={() => {
                setError('');
                closeHandler();
                setSuccess(false);
              }}
              
              style={{ backgroundColor: 'green', color: 'white' }}
            >
              close
            </button>
          </>: <form>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example11">
              Enter Email
            </label>
            <input
              type="email"
              id="form2Example11"
              className="form-control"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div className="text-center pt-1 mb-1 pb-1">
            <button
              className="btn btn-success btn-block fa-lg gradient-custom-2 mb-3 w-100"
              type="button"
              onClick={handleSubmit}
              style={{ backgroundColor: 'green', color: 'white' }}
            >
              Submit
            </button>
          </div>
        </form>}
      </div>
    </div>
  );
};

export default VerificationForm;
