import React from 'react'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import slider4 from '../../assets/images/slider4.webp'
import slider5 from '../../assets/images/slider5.webp'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import BrandComponent from '../../components/BrandComponent/BrandComponent'
import BrandLabel from './../../Data/BrandLabel';
import { Button } from 'antd';

const HomePage = () => {
  return (
    <>
      <div style={{backgroundColor:'white', paddingTop: '150px', paddingLeft: '150px', width: '80%', display: 'block'}}>
          <SliderComponent arrImages={[slider1,slider2,slider3,slider4,slider5 ]}/>
      </div>
      <div style={{height: '500px', marginTop: '25px', marginLeft: '150px', marginRight: '150px', display: 'flex', justifyContent: 'space-between'}}>
          {
            BrandLabel.map((brand,index) => (
              <BrandComponent key={index} imgUrl={brand.imageUrl}/>
          ))
          }
      </div>
      <div>
        <Button style={{cursor: 'pointer', marginBottom: '50px', zIndex: '2'}}>ABC</Button>
      </div>
    </>
  )
}

export default HomePage