import React, { useEffect, useState } from "react";
import {
  WrapperContainer,
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperSignInPage,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/images/home.png";
import { Image } from "antd";
import {
  EyeFilled,
  EyeInvisibleFilled,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <WrapperSignInPage>
      <WrapperContainer>
        <WrapperContainerLeft>
          <h1 style={{ textAlign: "center" }}>Welcome!</h1>
          {/* <p>Login</p> */}
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="Email"
            //value={email}
            //onChange={handleOnchangeEmail}
            icon={<MailOutlined />}
          />
          <div style={{ position: "relative" }}>
            <span
              // onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "18px",
                right: "8px",
                fontSize: "20px",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="Password"
              type={isShowPassword ? "text" : "password"}
              //value={password}
              //onChange={handleOnchangePassword}
              icon={<LockOutlined />}
            />
          </div>
          {/* {data?.status === 'ERR' && <span style={{color: 'red', fontSize: '15px'}}>{data?.message}</span>} */}

          <ButtonComponent
            //disabled={!email.length || !password.length}
            //onClick={handldeSignIn}
            size={40}
            styleButton={{
              backgroundColor: "rgb(32, 178, 170)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            hoverStyleButton={{
              backgroundColor: "#1C978F",
              border: "none",
            }}
            textbutton={"Log in"}
            styleTextButton={{
              color: "#fff",
              fontWeight: "700",
              fontSize: "15px",
            }}
          ></ButtonComponent>
          <p>
            <WrapperTextLight style={{color: 'black', textDecoration: 'underline'}}>Forgot your password?</WrapperTextLight>
          </p>
          <p>
            <span style={{ color: "#696969", fontSize: "14px" }}>Don't have an account? </span>
            <WrapperTextLight>Create an account</WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="image-logo"
            height="103px"
            width="253px"
          />
          <h1 style={{ marginBottom: "-7px" }}>Welcome aboard my friend</h1>
          <h3>just a couple of clicks and we start</h3>
        </WrapperContainerRight>
      </WrapperContainer>
    </WrapperSignInPage>
  );
};

export default SignInPage;
