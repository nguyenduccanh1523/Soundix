import { Row, Menu } from 'antd';
import styled from 'styled-components';

export const WrapperHeader = styled(Row)`
    background-color: rgb(32, 178, 170);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    display: flex;
    height: 45px;
    `

export const WrapperTextHeader = styled.p`
    color: black;
    font-size: 15px;
    font-weight: bold; 
    cursor: pointer;
    background-color: ${(props) => (props.isClicked ? 'white' : 'rgb(32, 178, 170)')};
    padding: 12px;
    &:hover {
    background-color: white;
  }
`

