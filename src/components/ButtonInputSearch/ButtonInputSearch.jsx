import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton } = props;

  // Sử dụng state để theo dõi giá trị của trường input
  const [inputValue, setInputValue] = useState('');

  // Hàm xử lý sự thay đổi giá trị trong trường input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ display: 'flex', width: '650px', height: '36px', marginLeft: '10px' }}>
      <Input
        size={size}
        placeholder={placeholder}
        style={{ fontSize: '12px', marginRight: '10px', color: 'black' }}
        value={inputValue}
        onChange={handleInputChange} // Gọi hàm xử lý sự thay đổi giá trị
      />
      {inputValue && ( // Hiển thị nút chỉ khi có giá trị trong trường input
        <Button
          size={size}
          icon={<SearchOutlined />}
          style={{ backgroundColor: 'yellow', height: '36px', fontWeight: 'bold' }}
        >
          {textButton}
        </Button>
      )}
    </div>
  );
};

export default ButtonInputSearch;
