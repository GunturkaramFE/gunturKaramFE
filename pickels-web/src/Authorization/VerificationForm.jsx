import React from 'react'
import logo from '../asserts/logo.png';

const VerificationForm = () => {
  return (
    <div style={{width:'100%',height:'100%'}}>
    <div className="card-body p-md-1  mx-md-3"> 
      <div style={{width:"100%", height:'20%',display:'flex',justifyContent:'center'}}>
      <img src={logo} alt="" style={{ width: '200px', objectFit: 'contain' }} />
      </div>    
      <form>       
        <div className="form-outline mb-4 ">
          <label className="form-label" htmlFor="form2Example11">
            Enter Email
          </label>
          <input
            type="email"
            id="form2Example11"
            className="form-control"
            placeholder="Enter email address"
          />           
        </div>
       
        <div className="text-center pt-1 mb-1 pb-1">
  <button
   className="btn btn-success btn-block fa-lg gradient-custom-2 mb-3 w-100"
  type="button"
//   onClick={HandleSignup}
  style={{
    backgroundColor: 'green',color: 'white' }}
  >
  Submit
  </button>  
  </div>
       
      </form>
    </div>
  </div>
  )
}

export default VerificationForm
