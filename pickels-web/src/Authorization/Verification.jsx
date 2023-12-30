import React from 'react'
import logo from '../asserts/logo.png';
const Verification = () => {
    const HandleConfirm=()=>{
        alert('Password-Changed')
    }
  return (
     <>
  <div style={{width:'100%',height:'100%'}}>  
  <div className="card border p-md-1 mx-md-3 shadow">
  <div className="card-body">
   <div style={{width:"100%", height:'20%',display:'flex',justifyContent:'center'}}>
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
        />
      </div>
      <div className="text-center pt-1 mb-1 pb-1">
        <button
          className="btn btn-success btn-block fa-lg gradient-custom-2 mb-3 w-100"
          type="button"
          onClick={HandleConfirm}
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
  )
}

export default Verification
