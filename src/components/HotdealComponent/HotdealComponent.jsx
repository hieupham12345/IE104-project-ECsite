import React from 'react'
import HotdealProduct from '../../Data/HotdealProduct';
import CardComponent from './../CardComponent/CardComponent';
import { WrapperText } from './style';

const HotdealComponent = () => {
  return (
    <div style={{marginTop: '20px'}}>
      <div>
        <img src="https://hoang-phuc.com/media/wysiwyg/Artboard_3.png" alt="" style={{width: '100%'}} />
      </div>
      <div style={{display: 'flex',  justifyContent: 'space-between', flexWrap: 'wrap'}}>
        { HotdealProduct.map((product, index) => (
              <React.Fragment key={index}>
                <CardComponent product={product}></CardComponent>
                {index !== 0 && (index + 1) % 5 === 0 && <br />}
              </React.Fragment>        ))}
      </div>  
      <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'arial', fontWeight: 'bold', marginTop: '15px', marginBottom: '30px'}}>
        <WrapperText>XEM TẤT CẢ</WrapperText>
      </div>
    </div>
  )
}

export default HotdealComponent