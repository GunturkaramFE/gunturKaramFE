import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
const ViewCart = () => {
  return (
<div style={{width:'100%',height:"100vh",display:'flex'}}>
<div style={{width:'70%',height:'100vh',display:'flex',flexDirection:'column'}}>
<section  style={{ width:'100%',height:"85%" }}>
    <div className="container py-3">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-11">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-normal mb-0 text-black">Shopping Cart</h2>
           
          </div>
          <div style={{ overflowY: 'scroll', overflowX: 'hidden', width: '100%',height:"72vh" }}>
          <div className="card rounded-3 mb-1">
            <div className="card-body p-2">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                    className="img-fluid rounded-3" alt="Cotton T-shirt" style={{width:'60px'}}
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button className="btn btn-link px-2 " onClick={() => document.getElementById('form1').stepDown() } style={{ textDecoration: 'none' }}>
                    <i className="fas fa-minus">-</i>
                  </button>

                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value="2"
                    type="number"
                    className="form-control form-control-sm"
                  />

                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepUp()} style={{ textDecoration: 'none' }}>
                    <i className="fas fa-plus">+</i>
                  </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">$499.00</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-3 mb-1">
            <div className="card-body p-2">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                    className="img-fluid rounded-3" alt="Cotton T-shirt" style={{width:'60px'}}
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepDown()}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value="2"
                    type="number"
                    className="form-control form-control-sm"
                  />

                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepUp()}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">$499.00</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-3 mb-1">
            <div className="card-body p-2">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                    className="img-fluid rounded-3" alt="Cotton T-shirt" style={{width:'60px'}}
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepDown()}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value="2"
                    type="number"
                    className="form-control form-control-sm"
                  />

                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepUp()}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">$499.00</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-3 mb-1">
            <div className="card-body p-2">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                    className="img-fluid rounded-3" alt="Cotton T-shirt" style={{width:'60px'}}
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepDown()}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value="2"
                    type="number"
                    className="form-control form-control-sm"
                  />

                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepUp()}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">$499.00</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-3 mb-1">
            <div className="card-body p-2">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                    className="img-fluid rounded-3" alt="Cotton T-shirt" style={{width:'60px'}}
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepDown()}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value="2"
                    type="number"
                    className="form-control form-control-sm"
                  />

                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepUp()}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">$499.00</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-3 mb-1">
            <div className="card-body p-2">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                    className="img-fluid rounded-3" alt="Cotton T-shirt" style={{width:'60px'}}
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepDown()}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value="2"
                    type="number"
                    className="form-control form-control-sm"
                  />

                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepUp()}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">$499.00</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>


          <div className="card rounded-3 mb-1">
            <div className="card-body p-2">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                    className="img-fluid rounded-3" alt="Cotton T-shirt" style={{width:'60px'}}
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepDown()}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value="2"
                    type="number"
                    className="form-control form-control-sm"
                  />

                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepUp()}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">$499.00</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="card rounded-3 mb-1">
            <div className="card-body p-2">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                    className="img-fluid rounded-3" alt="Cotton T-shirt" style={{width:'60px'}}
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepDown()}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value="2"
                    type="number"
                    className="form-control form-control-sm"
                  />

                  <button className="btn btn-link px-2" onClick={() => document.getElementById('form1').stepUp()}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">$499.00</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div> 
          </div>         

        </div>
      </div>
    </div>
  </section>
  <div style={{width:'100%'}}>
  <div className="card px-12 " style={{border:'none'}}>
      <div className="card-body p-1 d-flex flex-row  " style={{ width: '100%' }}>
        <div className="form-outline flex-fill">
          <input type="text" id="form1" placeholder='APPLY COUPON CODE HERE' className="form-control form-control-lg"  style={{width:'60%',height:"auto"}} />
          <label className="form-label" htmlFor="form1" style={{color:'red'}}>Discount code</label>
        </div>
        <button type="button" className="btn btn-outline-success" style={{width:'100px',height:"50px"}}>Apply</button>
      </div>
    </div>
  </div>
</div> 
<div style={{  width: '30%', height: '100vh',display:'flex',justifyContent:'center',alignItems:'center' }}>
        <div className="card shadow" style={{width:'90%',minHeight:"82vh",height:'auto'}}>
          <div className="card-header py-3">
            <h5 className="mb-0" style={{ fontWeight: 'bold', fontSize: 'larger', textAlign: 'center' }}>
              Summary
            </h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Name
                <span>Chicken Pickle</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
               <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span >Free</span>
              </li>
    <div style={{display:'flex',alignItems:'center'}}>
    <VerifiedIcon style={{color:'green'}}/>
     <div className="card" style={{ width: '90%',margin:'10px'}}>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">ADDRESS</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
      
    </div>
    <div style={{display:"flex",justifyContent:'space-between'}}> <a href="#" className="card-link">Change Address</a>
        <a href="#" className="card-link">Edit</a></div>        
    <hr/>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span>
                  <strong>$53.98</strong>
                </span>
              </li>
            </ul>
            <div style={{display:'flex',justifyContent:'center' ,width:'100%'}}>
            <button type="button" className="btn btn-outline-success btn-lg btn-block">
              Proceed to Checkout
            </button>
            </div>
           
          </div>
        </div>
      </div>
</div>   
  )
}
export default ViewCart
