import React from 'react'
import Profile from './Profile'
import { WrapperInfoText, WrapperLabel, WrapperTextSmall } from './style'
import { WrapperButton } from './../LoginPage/style';

const AccountAddress = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center',marginTop: '130px'}}>
      <div style={{ width: '74rem',marginBottom: '50px', display: 'flex'}}>
        <Profile section={'address'}></Profile>
        <div style={{marginLeft: '20px', marginTop: '48px', display: 'flex', flexDirection: 'column'}}>
            <WrapperLabel style={{marginBottom: '20px'}}>SỔ ĐỊA CHỈ</WrapperLabel>
            <WrapperInfoText>Bạn không có địa chỉ nào.</WrapperInfoText>
            <WrapperButton style={{width: '130px'}}>Thêm địa chỉ</WrapperButton>
        </div>
      </div>
    </div>
  )
}

export default AccountAddress