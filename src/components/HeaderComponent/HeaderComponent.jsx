import React from 'react'
import { WrapperHeader, WrapperIcon, WrapperLabelBig, WrapperLabelSmall } from './style'
import { Col } from 'antd'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import { OrderedListOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'

const HeaderComponent = () => {
  return (
    <div>
        <WrapperHeader>
            <Col span={4}>
                <img src="https://hoang-phuc.com/media/logo/websites/1/logo_1.png" alt="" style={{width: '156px', heigh: 'auto', marginLeft: '85px', cursor: 'pointer'}}/>
            </Col>
            <Col span={11}>
                <ButtonInputSearch 
                    placeholder='Tìm kiếm sản phẩm'
                    allowClear
                    textButton='TÌM KIẾM'
                />
            </Col>
            <Col span={2.5}>
                <div style={{display: 'flex'}}>
                    <WrapperIcon>
                        <UserOutlined style={{color: 'white', fontSize: '20px'}}/>
                    </WrapperIcon>
                    <div>
                        <WrapperLabelSmall>Tài khoản</WrapperLabelSmall>
                        <div>
                            <WrapperLabelBig>Đăng nhập</WrapperLabelBig>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span={2.5}>
                <div style={{display: 'flex'}}>
                    <WrapperIcon>
                        <ShoppingCartOutlined style={{color: 'white', fontSize: '20px'}}/>
                    </WrapperIcon>
                    <div>
                        <WrapperLabelSmall>Giỏ hàng</WrapperLabelSmall>
                        <div>
                            <WrapperLabelBig>0 Sản phẩm</WrapperLabelBig>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span={4}>
                <div style={{display: 'flex'}}>
                    <WrapperIcon>
                        <OrderedListOutlined style={{color: 'white', fontSize: '20px'}}/>
                    </WrapperIcon>
                    <div>
                        <WrapperLabelSmall>Theo dõi đơn hàng</WrapperLabelSmall>
                        <div>
                            <WrapperLabelBig>Tra cứu đơn hàng</WrapperLabelBig>
                        </div>
                    </div>
                </div>
            </Col>
        </WrapperHeader>
    </div>
  )
}

export default HeaderComponent