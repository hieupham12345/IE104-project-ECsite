import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader=styled(Row)`
    background-color: #000;
    height: 68.65px;
    justify-content: center;
    display: flex;
    align-items: center;
`
export const WrapperIcon=styled.div`
    background-Color: #FAFAFA33;
    margin-Left: 10px;
    width: 40px;
    height: 36px;
    align-Items: center;
    display: flex;
    justify-Content: center;
    border-Radius: 6px;
    margin-top: 4px;
`
export const WrapperLabelSmall=styled.span`
    color: white;
    font-size: 10px;
    line-height: 16px;
    margin-bottom: 2px;
    margin-left: 7px;
`
export const WrapperLabelBig=styled.button`
    font-size: 12px;
    background-color: #000;
    color: white;
    font-weight: 800;
    letter-spacing: .06px;
    border: solid #000;
    cursor: pointer;
`