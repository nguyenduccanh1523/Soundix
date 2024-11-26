import React from "react";
import { Col } from "antd";
import {
  CiCircleFilled,
  LineHeightOutlined,
  SendOutlined,
} from "@ant-design/icons";
import {
  WrapperCopy,
  WrapperFooter,
  WrapperLocation,
  WrapperTextFooter,
  WrapperTextFooterIcon,
  WrapperTextLocation,
} from "./style";
import {
  EnvironmentFilled,
  GithubFilled,
  FacebookFilled,
  InstagramFilled,
  SkypeFilled,
} from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const FooterComponent = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          background: "#F9F6F6",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <WrapperFooter>
          <Col span={6}>
            <WrapperTextFooter>
              <WrapperTextFooter>Store System</WrapperTextFooter>
              <WrapperTextLocation>
                <EnvironmentFilled /> The United States
              </WrapperTextLocation>
              <br></br>
              <WrapperLocation>San Francisco</WrapperLocation>
              <br></br>
              <WrapperTextLocation>
                <EnvironmentFilled /> South Korea
              </WrapperTextLocation>
              <br></br>
              <WrapperLocation>Busan</WrapperLocation>
              <br></br>
              <WrapperTextLocation>
                <EnvironmentFilled /> Japan
              </WrapperTextLocation>
              <br></br>
              <WrapperLocation>Tokushima</WrapperLocation>
              <br></br>
            </WrapperTextFooter>
          </Col>
          <Col span={6}>
            <WrapperTextFooter>
              <WrapperTextFooter>Social Network</WrapperTextFooter>
              <WrapperTextFooterIcon>
                <GithubFilled />
              </WrapperTextFooterIcon>
              <WrapperTextFooterIcon>
                <FacebookFilled style={{ color: "blue" }} />
              </WrapperTextFooterIcon>
              <WrapperTextFooterIcon>
                <InstagramFilled style={{ color: "#F67205" }} />
              </WrapperTextFooterIcon>
              <WrapperTextFooterIcon>
                <SkypeFilled style={{ color: "#0090D0" }} />
              </WrapperTextFooterIcon>
            </WrapperTextFooter>
            <WrapperTextFooter>
              <WrapperTextFooter>Policy</WrapperTextFooter>
              <WrapperTextLocation>
                <li>Privacy policy</li>
                <li>FAQ</li>
                <li>Policy Warranty & Return Policy</li>
                <li>Express delivery policy</li>
              </WrapperTextLocation>
            </WrapperTextFooter>
          </Col>
          <Col span={12} style={{ display: "flex" }}>
            <WrapperTextFooter>Newletters</WrapperTextFooter>
            <InputComponent
              placeholder="Enter your email"
              size="medium"
              style={{
                width: "55%",
                marginLeft: "10px",
                marginRight: "5px",
                borderRadius: "40px",
                border: "0px",
              }}
            />
            <ButtonComponent
              styleButton={{
                backgroundColor: "rgb(32, 178, 170)",
                border: "none",
                color: "white",
                borderRadius: "50%",
                padding: "20px 10px",
                fontSize: "22px", // Điều chỉnh kích thước chữ
                marginTop: "14px"
              }}
              hoverStyle={{
                backgroundColor: "#1C978F",
                border: "none",
              }}
              textbutton={ <SendOutlined /> }
            />
          </Col>
        </WrapperFooter>
      </div>
      <WrapperCopy>
        <span>Copyright © 2024 Soundix. Studio. Powered by Ndc</span>
      </WrapperCopy>
    </>
  );
};

export default FooterComponent;
