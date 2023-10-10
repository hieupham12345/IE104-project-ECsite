import { Button } from 'antd';
import React from 'react'

const BrandComponent = ({imgUrl}) => {
   return (
    <Button style={{height: '117px',
        width: '212px',
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        border: 'none',
        cursor: 'pointer',
        zIndex: '2'}}>
    </Button>
  )
}

export default BrandComponent