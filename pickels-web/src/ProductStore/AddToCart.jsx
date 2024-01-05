import React, { useState, useEffect } from 'react';

const AddToCart = ({ data }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(0);
const[count,setCount]=useState(1)

  const handleDecrease = (e) => {

    if (count> 1) {
   
      e.preventDefault()
      setCount(count-1)
 
    }
  };
  const handleIncrease = (e) => {   
    e.preventDefault();
    setCount(count+1)
  
  };

  useEffect(() => {
    console.log('Selected Quantity:', selectedQuantity);
  }, [selectedQuantity]);

  const selectedPrice = data.pricelist[selectedQuantity]?.price || 0;
  const priceperkg =
  data.pricelist[selectedQuantity]?.price /
  parseFloat(data.pricelist[selectedQuantity]?.quantity) /
  (data.pricelist[selectedQuantity]?.quantity.includes('kg') ? 1 : 1000);

  return (
    <>
      {data && (
        <div style={{ width: '100%', height: '100%' }}>
          <div className="card-body p-md-1  rounded-3">
            <p className="lead fw-normal mb-2 text-md-lg text-lg-xl text-center">ADD TO CART</p>
            <div style={{ width: '100%', height: '100%' }}>
              <div style={{ height: '100%', width: '100%' }}>
                <div
                  className="card rounded-3 mb-4 mt-4 "
                  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="card-body ">
                    <div className="row d-flex  rounded-3" style={{ width: '100%', height: 'auto' }}>
                      <div className="col-md-4 col-lg-4 " style={{ width: '30%', height: 'auto' }}>
                        <img
                          style={{ width: '100px' }}
                          src={data.url}
                          className="img-fluid rounded-3"
                          alt="Product"
                        />
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 d-flex col"
                        style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: '15px' }}
                      >
                        <span className="lead fw-normal mb-2 text-md-lg text-lg-xl" style={{ fontSize: '18px' }}>
                          {data.title}
                        </span>
                        <div className="select-container">
                          <select
                            className="form-select form-select-sm"
                            aria-label="Small select example"
                            onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                            value={selectedQuantity}
                          >
                            {data.pricelist.map((x, y) => (
                              <option key={y} value={y}>
                                {x.price + ' --- ' + x.quantity}
                              </option>
                            ))}
                          </select>
                        </div>
                        <p style={{ display: 'flex', flexDirection: 'column' }}>
                          <span className="text-muted">{priceperkg}/KG</span>
                          <span className="text-muted">category: {data.subCategory}</span>
                        </p>
                      </div>
                      <div
                        className="col-md-4 col-lg-4 col-xl-4 d-flex col"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          width: '30%',
                          justifyContent: 'end',
                        }}
                      >
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex " style={{ alignItems: 'center', width: '100%' }}>
                          <button
                            type="button"
                            className="btn btn-link px-2"
                            onClick={(e) =>{handleDecrease(e)}}
                            style={{ textDecoration: 'none' }}
                          >
                            <i className="fas fa-minus">-</i>
                          </button>

                          <input
                            id="form1"
                            min="1"
                            name="quantity"
                            value={count}
                            className="form-control form-control-sm"
                            style={{ height: '20px' }}
                          />
             <button
  type="button"
  className="btn btn-link px-2"
  onClick={(e) => handleIncrease(e)}
  style={{ textDecoration: 'none' }}
>
  <i className="fas fa-plus"> +</i>
</button>


                        </div>
                        <p style={{ display: 'flex', flexDirection: 'column' }}>
                          <p className="lead fw-normal mb-1" style={{ fontSize: '18px' }}>
                            $ {selectedPrice*count}
                          </p>
                        </p>

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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCart;
