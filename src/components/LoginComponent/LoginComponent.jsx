import React, { useState } from 'react'
import { LoginBlockContainer, LoginContainer, LoginLabel, LoginTitle, LoginType, LoginTypeTitle,WrapperButton } from './style'

const LoginComponent = () => {

  const [isLoginSMS, setIsLoginSMS] = useState(true)
  const [isLoginPass, setIsLoginPass] = useState(false)
  const onClickLoginSMS = () => {
        setIsLoginSMS(true);
        setIsLoginPass(false);
    }
  const onClickLoginPass = () => {
        setIsLoginSMS(false);
        setIsLoginPass(true);
    }


  return (
    <LoginContainer>
        <LoginTitle>ĐĂNG NHẬP</LoginTitle>
        <div style={{display: 'flex'}}> 
          <span style={{marginRight: '5px'}}>Bạn chưa có tài khoản?</span>
          <span style={{color: '#3e72d6', cursor: 'pointer', fontWeight: 'bold'}}>Đăng ký ngay</span>
        </div>
        <LoginBlockContainer>
            <div style={{display: 'flex',  height: '40px'}}>
              <LoginType>
                    <LoginTypeTitle onClick={onClickLoginSMS} borderBottom={isLoginSMS ? '2px solid gray' : '0px'}>Đăng nhập bằng OTP</LoginTypeTitle> 
              </LoginType>
              <LoginType>
                    <LoginTypeTitle onClick={onClickLoginPass} borderBottom={isLoginPass ? '2px solid gray' : '0px'}>Đăng nhập bằng mật khẩu</LoginTypeTitle>
              </LoginType>
            </div>
            {isLoginSMS && (
                <div style={{height: '266px', marginTop: '15px', marginLeft: '15px', display: 'flex', flexDirection: 'column'}}>
                    <LoginLabel style={{marginTop: '8px'}}>Số điện thoại <span style={{color: 'red'}}>*</span></LoginLabel>
                    <div style={{ display: 'flex', marginTop: '8px' }}>
                        <div style={{ position: 'relative', display: 'flex',alignItems: 'center' }}>
                            <input
                                placeholder='Nhập số điện thoại của bạn'
                                style={{
                                    height: '33px',
                                    width: '553px',
                                    backgroundColor: '#F6F6F6',
                                    borderRadius: '6px',
                                    border: '1px solid gray',
                                }}
                            />
                            <button
                                style={{
                                    position: 'absolute',
                                    height: '30px',
                                    width: '150px',
                                    borderRadius: '6px',
                                    color: 'gray',
                                    border: 'none',
                                    cursor: 'pointer',
                                    right: '5px',
                                    backgroundColor: '#f6f6f6',
                                    textDecoration: 'none', 
                                    transition: 'text-decoration 0.2s',
                                }}
                            >
                                Gửi mã xác nhận
                            </button>
                        </div>
                    </div>
                    <LoginLabel style={{marginTop: '10px'}}>Mã xác nhận <span style={{color: 'red'}}>*</span></LoginLabel>
                    <div style={{display: 'flex', marginTop: '8px' }}>
                        <input 
                            placeholder='Nhập mã xác nhận'
                            style={{
                                height: '33px',
                                width: '553px',
                                backgroundColor: '#F6F6F6',
                                borderRadius: '6px',
                                border: '1px solid gray', 
                            }}                  
                        />
                    </div>
                <WrapperButton> 
                    ĐĂNG NHẬP
                </WrapperButton>
                </div>
            )}
        </LoginBlockContainer>
    </LoginContainer>  )
}

export default LoginComponent