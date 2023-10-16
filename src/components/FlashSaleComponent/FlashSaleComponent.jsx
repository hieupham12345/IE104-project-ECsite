import React, { useState } from 'react';
import {
  WrapperDaySale,
  WrapperTextFlashSale,
  WrapperTextFlashSaleDay,
  WrapperTextFlashSaleDayTime,
  WrapperTimeCountDown,
} from './style';
import FlashSaleProduct from '../../Data/FlashSaleProduct';
import CardComponent from './../CardComponent/CardComponent';

const FlashSaleTime = [
  {
    id: 1,
    day: '10 Thg 10 2023',
  },
  {
    id: 2,
    day: '11 Thg 10 2023',
  },
  {
    id: 3,
    day: '12 Thg 10 2023',
  },
];

const FlashSaleComponent = () => {
  // Use an array of state objects to manage the background color and text color for each WrapperDaySale
  const [saleStates, setSaleStates] = useState(
    FlashSaleTime.map(() => ({
      backgroundColor: '',
      textColor: '',
    }))
  );

  // Hàm xử lý khi người dùng nhấp vào các WrapperDaySale
  const handleDaySaleClick = (index) => {
    // Create a copy of the state array
    const newSaleStates = saleStates.map((state, i) => {
      if (i === index) {
        // Update the state for the clicked WrapperDaySale
        return { backgroundColor: 'red', textColor: 'white' };
      } else {
        // Reset the state for other WrapperDaySale elements
        return { backgroundColor: '', textColor: '' };
      }
    });

    setSaleStates(newSaleStates);
  };

  return (
    <div>
      <div>
        <img src="https://hoang-phuc.com/media/wysiwyg/Artboard_2.png" alt="" style={{ width: '100%' }} />
      </div>
      <div
      style={{
        display: 'flex',
        backgroundImage:
          'url(https://hoang-phuc.com/media/wysiwyg/fs2809/bg_ektopn.png)',
        marginTop: '40px',
      }}
    >
      <img
        src="https://hoang-phuc.com/media/wysiwyg/fs2809/icon_desktop.png"
        alt=""
        style={{ height: '80px', width: 'auto', margin: '10px 30px' }}
      />
      <div>
        <WrapperTextFlashSale>SẮP DIỄN RA</WrapperTextFlashSale>
        <div style={{ display: 'flex' }}>
          <WrapperTimeCountDown>00</WrapperTimeCountDown>
          <span style={{ textAlign: 'center', margin: '0 3px' }}>:</span>
          <WrapperTimeCountDown>00</WrapperTimeCountDown>
          <span style={{ textAlign: 'center', margin: '0 3px' }}>:</span>
          <WrapperTimeCountDown>51</WrapperTimeCountDown>
          <span style={{ textAlign: 'center', margin: '0 3px' }}>:</span>
          <WrapperTimeCountDown>23</WrapperTimeCountDown>
        </div>
      </div>
      <div style={{ marginLeft: '300px', display: 'flex' }}>
        {FlashSaleTime.map((daysale, index) => {
          const { backgroundColor, textColor } = saleStates[index];
          return (
            <WrapperDaySale
              key={index}
              onClick={() => handleDaySaleClick(index)}
              style={{ backgroundColor, color: textColor }}
            >
              <WrapperTextFlashSaleDay>SẮP DIỄN RA</WrapperTextFlashSaleDay>
              <WrapperTextFlashSaleDayTime>{daysale.day}</WrapperTextFlashSaleDayTime>
            </WrapperDaySale>
          );
        })}
      </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {
          FlashSaleProduct.map((product, index) => {
            return (
              <React.Fragment key={index}>
                <CardComponent product={product}></CardComponent>
                {index !== 0 && (index + 1) % 5 === 0 && <br />}
              </React.Fragment>
            );
          })
        }
      </div>
    </div>
  );
};

export default FlashSaleComponent;
