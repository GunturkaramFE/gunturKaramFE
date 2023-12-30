import React from 'react'

const Signup = () => {
    const HandleSignup=()=>{
        alert('Signup Successfully')
    }
  return (
    <div style={{width:'100%',height:'100%'}}>
      <div className="card-body p-md-1 mx-md-3">
       
        <form>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example22">
              UserName
            </label>
            <input
              type="text"
              id="form2Example22"
              className="form-control"
              placeholder="User Name"
            />           
          </div>
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
         
          <div className="text-center pt-1 mb-1 pb-1">
    <button
     className="btn btn-success btn-block fa-lg gradient-custom-2 mb-3 w-100"
    type="button"
    onClick={HandleSignup}
    style={{
      backgroundColor: 'green',color: 'white' }}
    >
    SignUp
    </button>  
    </div>
         
        </form>
      </div>
    </div>
  )
}

export default Signup
