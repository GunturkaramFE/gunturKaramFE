import React from 'react'
const AddToCart = () => {
  const handleDecrease = () => {
    document.getElementById('form1').stepDown();
  };

  const handleIncrease = () => {
    document.getElementById('form1').stepUp();
  };
  return (
    <div style={{ width: '100%', height: '100%' }}>
    <div className="card-body p-md-1  rounded-3">
    <p className="lead fw-normal mb-2 text-md-lg text-lg-xl text-center">ADD TO CART</p>
       <div style={{width:'100%',height:'100%'}}>         
        <div style={{height:'100%',width:'100%'}}>
        <div className="card rounded-3 mb-4 mt-4 " style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
             <div className="card-body ">
            <div className="row d-flex  rounded-3" style={{width:'100%',height:'auto'}}>
              <div className="col-md-4 col-lg-4 " style={{width:'30%',height:'auto'}}>
                <img style={{width:'100px'}}
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  className="img-fluid rounded-3" alt="Cotton T-shirt"/>
               </div>
  <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 d-flex col" style={{ width: '40%',display:'flex',flexDirection:'column',gap:'15px' }}>
  <span className="lead fw-normal mb-2 text-md-lg text-lg-xl" style={{ fontSize: '18px' }}>ChickenPickle</span>
  <p style={{ display: 'flex', flexDirection: 'column' }}>
    <span className="text-muted">Weight: 250/KG</span>
    <span className="text-muted">Type: Chicken </span>
  </p>
</div>

       <div className="col-md-4 col-lg-4 col-xl-4 d-flex col" style={{ display: 'flex', flexDirection: 'column',width:'30%',justifyContent:'end' }}>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex " style={{alignItems:'center',width:'100%'}}>
         <button className="btn btn-link px-2" onClick={handleDecrease} style={{ textDecoration: 'none' }}>
        <i className="fas fa-minus">-</i>
        </button>
        <input
        id="form1"
        min="0"
        name="quantity"
        value={19}
        //type="number"
        className="form-control form-control-sm"
        style={{height:'20px'}}
        />
      <button className="btn btn-link px-2" onClick={handleIncrease} style={{ textDecoration: 'none' }}>
        <i className="fas fa-plus"> +</i>
      </button>
      </div>
       <p style={{display:'flex',flexDirection:'column'}}> 
       <p className="lead fw-normal mb-1" style={{ fontSize: '18px' }}>$ 299</p>
       </p>
       </div>
       </div>
       </div>
      </div>
        </div>         
        <div style={{display:'flex',width:'100%',justifyContent:'space-evenly',paddingTop:'20px'}}>
        <button
        className="btn btn-success btn-block "
        type="button"
        style={{backgroundColor: 'green', color: 'white', width:'35%'  }}  >
         View
       </button>
        <button
        className="btn btn-success btn-block "
        type="button"
        style={{backgroundColor: 'green', color: 'white', width:'35%'  }} >
        ADD+
        </button>
        </div>

       
        <div>

        </div>
       </div>
    </div>
  </div>
  )
}

export default AddToCart
