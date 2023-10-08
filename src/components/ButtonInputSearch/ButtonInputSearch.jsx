import { Button, Input } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';

const ButtonInputSearch = (props) => {
  const {size, placeholder, textButton} = props
    return (
        <div style={{display: 'flex', width: '650px',height: '36px', marginLeft: '10px'}}>
            <Input size={size} placeholder={placeholder} style={{fontSize: '12px', marginRight: '10px', color: 'black'}}/>
            <Button size={size} icon={<SearchOutlined />} style={{backgroundColor: 'yellow', height: '36px', fontWeight: 'bold'}}>{textButton}</Button>
        </div>
  )
}

export default ButtonInputSearch