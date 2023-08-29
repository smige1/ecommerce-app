import React from 'react'
import ReactStars from 'react-stars'

const SpecialProduct = () => {
  return (
    <div className="col-4">
        <div className="special-product-card">
            <div className="d-flex">
                <div>
                    <img src='images/watch.jpg' alt='watch'/>
                </div>
                <div className="special-product-content">
                <h6 className="brand">Havels</h6>
          <h5 className="product-title">Lorem ipsum dolor sit.</h5>
          <ReactStars
            count={5}
            edit={false}
            value={3}
            size={24}
            color2={"#ffd700"}
          />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct