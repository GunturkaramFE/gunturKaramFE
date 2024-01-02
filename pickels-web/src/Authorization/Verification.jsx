import React, { useEffect, useState } from 'react';
import logo from '../asserts/logo.png';
import api from '../api';
import { isValidPassword } from '../helpers/validations';
import { useLocation } from 'react-router-dom';

const Verification = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const queryParams = new URLSearchParams(useLocation().search);
  const token = queryParams.get('token');
  const handleConfirm = async () => {
    if (!isValidPassword(password)) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      let payload = {
        document: {
          token,
          password,
        },
      };

    const response = await api.post('/user/verify', payload);

      if (response.success === true) {
  alert(response.msg)
        
      } else if (response.success === false) {
        alert(response.msg)
      } else {
        setError('Something went wrong');
      }
    } catch (error) {
      setError('Confirmation failed due to a network error. Please try again.');
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <div className="card border p-md-1 mx-md-3 shadow">
          <div className="card-body">
            <div style={{ width: '100%', height: '20%', display: 'flex', justifyContent: 'center' }}>
              <img src={logo} alt="" style={{ width: '200px', objectFit: 'contain' }} />
            </div>
            <form>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example22">
                  Create Password
                </label>
                <input
                  type="password"
                  id="form2Example22"
                  className="form-control"
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example11">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="form2Example11"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div className="text-center pt-1 mb-1 pb-1">
                <button
                  className="btn btn-success btn-block fa-lg gradient-custom-2 mb-3 w-100"
                  type="button"
                  onClick={handleConfirm}
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                  }}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
