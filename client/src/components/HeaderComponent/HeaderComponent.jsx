import React from "react";
import { Badge, Col } from "antd";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";

import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";


const HeaderComponent = () => {


    return (
        <div style={{width: '100%', background: 'rgb(138, 43, 226)', display:'flex', justifyContent: 'center'}}>
        <WrapperHeader >
        <Col span={5}>
            <WrapperTextHeader style={{cursor: 'pointer'}}>TeleWeb</WrapperTextHeader>
        </Col>
            <Col span={13}>
            <ButtonInputSearch
            placeholder="input search text"
            size="large"
            textbutton="Tìm kiếm" 
            // onChange={onSearch}
             />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '54px', alignItems:'center'}}>
            <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px'}}/>
                <div style={{cursor: 'pointer'}}>
                <WrapperTextHeaderSmall>Đăng nhập/ Đăng kí</WrapperTextHeaderSmall>
                <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
                </div>
            </div>
            
            </WrapperHeaderAccount>
                <div style={{cursor: 'pointer'}}>
                <Badge  size="small">
                <ShoppingCartOutlined style={{ fontSize: '30px', color: 'white'}}/>
                </Badge>
                <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
            </div>
            
        </Col>
        </WrapperHeader>
        </div>
    )
}

export default HeaderComponent;