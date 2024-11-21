import React from "react";
import { Badge, Col } from "antd";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperHeaderSign,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";

import { UserOutlined, ShoppingCartOutlined, LoginOutlined } from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const HeaderComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(138, 43, 226)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
        <Col span={4}>
          <WrapperTextHeader style={{ cursor: "pointer" }}>
            TeleWeb
          </WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            placeholder="input search text"
            size="large"
            textbutton="Tìm kiếm"
            // onChange={onSearch}
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "54px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <WrapperHeaderSign>
              <WrapperTextHeaderSmall>
              <ButtonComponent
                  styleButton={{
                    backgroundColor: "rgb(238, 118, 0)",
                    border: "none",
                    color: "white",
                  }}
                  hoverStyleButton={{
                    backgroundColor: "#84495F",
                    border: "none",
                  }}
                  styleTextButton={{ color: "white" }}
                  hoverStyleTextButton={{ color: "white" }}
                  size="large"
                  icon=<LoginOutlined />
                  textbutton="Login"
                />
              </WrapperTextHeaderSmall>
              <WrapperTextHeaderSmall>
                <ButtonComponent
                  styleButton={{
                    backgroundColor: "rgb(238, 118, 0)",
                    border: "none",
                    color: "white",
                  }}
                  hoverStyleButton={{
                    backgroundColor: "#84495F",
                    border: "none",
                  }}
                  styleTextButton={{ color: "white" }}
                  hoverStyleTextButton={{ color: "white" }}
                  size="large"
                  icon={<UserOutlined />}
                  textbutton="Register"
                />
              </WrapperTextHeaderSmall>
            </WrapperHeaderSign>
          </WrapperHeaderAccount>
          <div style={{ cursor: "pointer", display: "flex" }}>
            <Badge size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "white" }}
              />
            </Badge>
            <WrapperTextHeaderSmall
              style={{ fontSize: "20px", color: "white" }}
            >
              Cart
            </WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
