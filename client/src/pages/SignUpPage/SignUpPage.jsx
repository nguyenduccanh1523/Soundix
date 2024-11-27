import React, { useEffect, useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from "../../assets/images/home.png";
import {
  EyeFilled,
  EyeInvisibleFilled,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
        }}
      >
        <WrapperContainerLeft>
          <h1 style={{ textAlign: "center" }}>Welcome!</h1>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="Email"
            value={email}
            onChange={handleOnchangeEmail}
            icon={<MailOutlined />}
          />
          <div style={{ position: "relative", marginBottom: "10px" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
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
              value={password}
              onChange={handleOnchangePassword}
              icon={<LockOutlined />}
            />
          </div>
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "18px",
                right: "8px",
                fontSize: "20px",
              }}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="Confirm password"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleOnchangeConfirmPassword}
              icon={<LockOutlined />}
            />
          </div>
          {/* {data?.status === 'ERR' && <span style={{color: 'red', fontSize: '12px'}}>{data?.message}</span>} */}
          <ButtonComponent
            disabled={
              !email.length || !password.length || !confirmPassword.length
            }
            //onClick={handleSignUp}
            size={40}
            styleButton={{
              backgroundColor: "rgb(32, 178, 170)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "44px",
              margin: "26px 0 10px",
            }}
            hoverStyleButton={{
              backgroundColor: "#1C978F",
              border: "none",
            }}
            textbutton={"Register"}
            styleTextButton={{
              color: "#fff",
              fontWeight: "700",
              fontSize: "15px",
            }}
          ></ButtonComponent>
          <p>
            <span style={{ color: "#696969", fontSize: "14px" }}>You already have an account? </span>
            <WrapperTextLight onClick={handleNavigateLogin}>Sign in</WrapperTextLight>
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
      </div>
    </div>
  );
};

export default SignUpPage;
