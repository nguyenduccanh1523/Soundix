import React from "react";
import { Badge, Col } from "antd";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperHeaderImage,
  WrapperHeaderSign,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import home from "../../assets/images/home.png";
import { UserOutlined, ShoppingCartOutlined, LoginOutlined, HeartOutlined } from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const HeaderComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#F9F6F6",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
        <Col span={4}>
          <WrapperTextHeader style={{ cursor: "pointer" }}>
            <WrapperHeaderImage src={home}></WrapperHeaderImage>
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
                    backgroundColor: "rgb(32, 178, 170)",
                    border: "none",
                    color: "white",
                  }}
                  hoverStyleButton={{
                    backgroundColor: "#1C978F",
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
                    backgroundColor: "rgb(32, 178, 170)",
                    border: "none",
                    color: "white",
                  }}
                  hoverStyleButton={{
                    backgroundColor: "#1C978F",
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
              <HeartOutlined
                style={{ fontSize: "25px", color: "#363636", marginRight: "20px" }}
              />
            </Badge>
            <Badge size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "25px", color: "#363636" }}
              />
            </Badge>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
