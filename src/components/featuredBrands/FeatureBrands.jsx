import React from 'react';
import "./FeatureBrands.css";

function FeatureBrands() {
  return (
    <div className='brand-card-container'>
      <div className='slider-cont'>
        <div style={{ background: "rgb(35, 107, 211)" }} className='brand-card'>
          <img src="/b_img1.png" />
          <h4>$hosky</h4>
          <a>shop now</a>
        </div>
        <div style={{ background: "rgb(162, 82, 208)" }} className='brand-card'>
          <img src="/b_img2.png" />
          <h4>danketsu</h4>
          <a>shop now</a>
        </div>
        <div style={{ background: "rgb(9, 31, 44)" }} className='brand-card'>
          <img src="/b_img3.png" />
          <h4>bitfins</h4>
          <a>shop now</a>
        </div>
        {/* <div style={{ background: "rgb(0, 0, 0)" }} className='brand-card'>
          <img src="/b_img4.png" />
          <h4>future fest</h4>
          <a>shop now</a>
        </div>
        <div style={{ background: "rgb(0, 0, 0)" }} className='brand-card'>
          <img src="/b_img5.png" />
          <h4>vudu brigada</h4>
          <a>shop now</a>
        </div>
        <div style={{ background: "rgb(0, 0, 0)" }} className='brand-card'>
          <img src="/b_img6.png" />
          <h4>pendulum</h4>
          <a>shop now</a>
        </div> */}
      </div>
    </div>
  )
}

export default FeatureBrands