import { Row } from "antd";
import styled from "styled-components";


export const WrapperHeader = styled(Row)`
  height: 4.5rem; /* Sử dụng em hoặc rem thay vì px */
  align-items: center;
  width: 100rem;
`;

export const WrapperIcon = styled.div`
  background-color: #fafafa33;
  margin-left: 1em; /* Sử dụng em hoặc rem thay vì px */
  width: 36px; /* Sử dụng em hoặc rem thay vì px */
  height: 36px; /* Sử dụng em hoặc rem thay vì px */
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 0.6em; /* Sử dụng em hoặc rem thay vì px */
`;

export const WrapperLabelSmall = styled.span`
  color: white;
  font-size: 0.625em; /* Sử dụng em hoặc rem thay vì px */
  line-height: 1rem; /* Sử dụng em hoặc rem thay vì px */
  margin-bottom: 0.125em; /* Sử dụng em hoặc rem thay vì px */
  margin-left: 0.8375em; /* Sử dụng em hoặc rem thay vì px */
`;

export const WrapperLabelBig = styled.button`
  font-size: 0.75em; /* Sử dụng em hoặc rem thay vì px */
  background-color: #000;
  color: white;
  font-weight: 800;
  letter-spacing: 0.06em; /* Sử dụng em hoặc rem thay vì px */
  border: solid #000;
  cursor: pointer;
`;
export const WrapperLeftHeader = styled.div`
  float: left;
  width: 5.5%;
  display: flex;
  margin-top: 2rem; /* Sử dụng em hoặc rem thay vì px */
  flex-direction: column;
  margin-left: 1.875em; /* Sử dụng em hoặc rem thay vì px */
`;

export const WrapperRightHeader = styled.div`
  width: 5.5%;
  display: flex;
  margin-top: 2rem; /* Sử dụng em hoặc rem thay vì px */
  flex-direction: column;
  position: absolute;
  margin-left: 85rem;
`;
export const WrapperProductCategory = styled.button`
  color: white;
  height: 3.125em; /* Sử dụng em hoặc rem thay vì px */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875em; /* Sử dụng em hoặc rem thay vì px */
  font-weight: 600;
  line-height: 1.25em; /* Sử dụng em hoặc rem thay vì px */
  text-transform: uppercase;
  cursor: pointer;
  background-color: inherit;
  border: solid #4d4d4d;
  flex-grow: 1;
  margin-right: 3.5rem;
`;
