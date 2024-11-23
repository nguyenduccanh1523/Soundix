import React from "react";
import {  Col } from "antd";
import {
    WrapperCopy,
  WrapperFooter,
  WrapperLocation,
  WrapperTextFooter,
  WrapperTextFooterIcon,
  WrapperTextLocation,
} from "./style";
import { EnvironmentFilled, GithubFilled, FacebookFilled, InstagramFilled, SkypeFilled  } from "@ant-design/icons";


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
        <Col span={12}>
          <WrapperTextFooter>
            <WrapperTextFooter>Store System</WrapperTextFooter>
            <WrapperTextLocation><EnvironmentFilled /> The United States</WrapperTextLocation><br></br>
            <WrapperLocation>San Francisco</WrapperLocation><br></br>
            <WrapperTextLocation><EnvironmentFilled /> South Korea</WrapperTextLocation><br></br>
            <WrapperLocation>Busan</WrapperLocation><br></br>
            <WrapperTextLocation><EnvironmentFilled /> Japan</WrapperTextLocation><br></br>
            <WrapperLocation>Tokushima</WrapperLocation><br></br>
          </WrapperTextFooter>
        </Col>
        <Col span={12}>
          <WrapperTextFooter>
            <WrapperTextFooter>Social Network</WrapperTextFooter>
            <WrapperTextFooterIcon><GithubFilled /></WrapperTextFooterIcon>
            <WrapperTextFooterIcon><FacebookFilled style={{color: 'blue'}} /></WrapperTextFooterIcon>
            <WrapperTextFooterIcon><InstagramFilled  style={{color: '#F67205'}}/></WrapperTextFooterIcon>
            <WrapperTextFooterIcon><SkypeFilled style={{color: '#0090D0'}}/></WrapperTextFooterIcon>
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
      </WrapperFooter>
    </div>
    <WrapperCopy>
        <span>Cotyright © 2024 Soundix. Studio. Powered by Ndc</span>
    </WrapperCopy>
    </>
  );
};

export default FooterComponent;
