import { Row, Menu } from 'antd';
import styled from 'styled-components';

export const WrapperHeader = styled(Row)`
    background-color: rgb(255, 255, 255);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    display: flex;
    height: 45px;
    `

export const WrapperTextHeader = styled.p`
    color: ${(props) => (props.isClicked ? 'rgb(32, 178, 170)' : 'black')};
    font-size: 15px;
    font-weight: bold; 
    cursor: pointer;
    //background-color: ${(props) => (props.isClicked ? 'white' : 'rgb(32, 178, 170)')};
    border-bottom: ${(props) => (props.isClicked ? '3px solid rgb(32, 178, 170)' : 'none')};
    padding: 12px;
    &:hover {
      //border-bottom: 3px solid rgb(32, 178, 170);
      color: rgb(32, 178, 170);
    }
`

