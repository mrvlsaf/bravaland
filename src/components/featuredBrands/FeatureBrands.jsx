import React from 'react';
import "./FeatureBrands.css";
import { items } from "../../../public/FeatureBrandsItems.json";

function FeatureBrands() {

  const { FeatureBrandsItems } = items;

  return (
    <div className='brand-card-container'>
      {FeatureBrandsItems.map((item, index) => {
        return (
          <div key={index} style={{ background: `${item.bgColor}` }} className='brand-card'>
            <img src={item.imageUrl} />
            <h4>{item.name}</h4>
            <a>shop now</a>
          </div>
        )
      })}
    </div>
  )
}

export default FeatureBrands