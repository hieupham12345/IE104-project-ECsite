import React from 'react'
import { WrapperHeader, WrapperIcon, WrapperLabelBig, WrapperLabelSmall, WrapperLeftHeader, WrapperProductCategory, WrapperRightHeader } from './style'
import { Button, Col } from 'antd'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import { OrderedListOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'

const HeaderComponent = () => {
  return (
    <div style={{position: 'fixed', width: '100%', zIndex: '2'}}>
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
            <WrapperLeftHeader>
                <img src="https://hoang-phuc.com/media/wysiwyg/banner26092023/80x270.png" alt="" />
            </WrapperLeftHeader>
            <WrapperRightHeader>
                <img src="https://hoang-phuc.com/media/wysiwyg/banner10032023/80x270_copy.png" alt="" />
                <div style={{ marginTop: '150px', marginLeft: '10px' }}>
                    <Button style={{backgroundColor: 'inherit', border: '0px solid', cursor: 'pointer'}}>
                        <img src="https://d1mf3ex7u8qau8.hoang-phuc.com/svg/zalo.svg" alt="Zalo" />
                    </Button>
                    <Button style={{backgroundColor: 'inherit', border: '0px solid', cursor: 'pointer'}}>
                        <img src="https://d1mf3ex7u8qau8.hoang-phuc.com/svg/messenger.svg" alt="Messenger" />
                    </Button>
                </div>
            </WrapperRightHeader>
        </div>
        <div style={{height: '50px', backgroundColor: '#4d4d4d',position: 'relative'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <WrapperProductCategory>Tất cả sản phẩm</WrapperProductCategory>
                <WrapperProductCategory>Thương hiệu</WrapperProductCategory>
                <WrapperProductCategory>Nam</WrapperProductCategory>
                <WrapperProductCategory>Nữ</WrapperProductCategory>
                <WrapperProductCategory>Trẻ em</WrapperProductCategory>
                <WrapperProductCategory>Hàng mới về</WrapperProductCategory>
                <WrapperProductCategory>Phụ kiện hàng hiệu</WrapperProductCategory>
                <WrapperProductCategory>Dọn kho</WrapperProductCategory>
            </div>
        </div>
    </div>
  )
}

export default HeaderComponent