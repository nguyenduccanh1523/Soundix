import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
    width: 64px;
    height: 64px;
`
export const WrapperStyleColImage = styled(Col)`
    flex-basis: unset;
    display: flex;
`
export const WrapperStyleNameProduct = styled.h1`
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: rgb(36,36,36);
    word-break: break-word;
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120,120,120);
`

export const WrapperPriceProduct = styled.div`
    border-radius: 4px;
    background-color: rgb(250,250,250);
    color: rgb(32, 178, 170);
    display: flex;
    height: 60px;
`

export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
    margin-right: 8px;
    padding: 5px;
    margin-top: 10px;
`
export const WrapperDiscountTextProduct = styled.span`
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
    margin-right: 8px;
    padding: 0px 5px 0px 5px;
    margin-top: 25px;
    margin-bottom: 17px;
    background-color: #FF3030;
    color: white;
    border-radius: 4px;
`

export const WrapperSelectColorProduct = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 800;
`

export const WrapperAddressProduct = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    span.address{
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    span.change-address{
        color: #1C978F;
        font-size: 17px;
        line-height: 24px;
        font-weight: 500;
    }
`

export const WrapperDetailShipping = styled.div`
    gap: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-top: 1px solid #ccc;
    //border-bottom: 1px solid #ccc;
    padding: 10px 0px 10px 0px;
`

export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 120px;
`


export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm{
        width: 40px;
        border-bottom: none;
        border-top: none;
        .ant-input-number-handler-wrap{
            display: none !important;
        }
    }
`