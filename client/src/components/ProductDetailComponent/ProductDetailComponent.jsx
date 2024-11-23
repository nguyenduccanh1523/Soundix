import { Col, Image, Rate, Row } from "antd";
import React, { useState } from "react";
import imageProductSmall from "../../assets/images/JBL.webp";
import {
  PlusOutlined,
  MinusOutlined,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";
import {
  WrapperAddressProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { convertPrice } from "../../utils";
import image from "../../assets/images/JBL.webp";

const ProductDetailComponent = () => {
  const [isFilled, setIsFilled] = useState(false); // Trạng thái lưu trữ xem nút có được filled hay không

  const handleClick = () => {
    setIsFilled(!isFilled); // Đổi trạng thái khi nhấn nút
  };
  return (
    <Row
      style={{
        padding: "16px",
        backgroundColor: "#fff",
        borderRadius: "4px",
      }}
    >
      <Col
        span={10}
        style={{
          borderRight: "1px solid #e5e5e5",
          paddingRight: "8px",
          marginBottom: "50px",
        }}
      >
        <Image src={image} alt="image product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>
          Tai nghe Bluetooth JBL Tune 500BT - Hàng Chính Hãng
        </WrapperStyleNameProduct>
        <div>
          <Rate
            allowHalf
            defaultValue={4.5}
            value={4.5}
            style={{ color: "#EEEE00" }} // Màu vàng
          />
          <WrapperStyleTextSell> | 2000+ Reviewer</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>
            {convertPrice(1000000)}
          </WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Delivered to</span>
          <span className="address"> sssssss</span> -
          <span className="change-address"> Change address</span>
        </WrapperAddressProduct>
        <div
          style={{
            margin: "10px 0 20px",
            padding: "10px 0",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Quality</div>
          <WrapperQualityProduct>
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              //onClick={() => handleChangeCount("decrease", numProduct === 1)}
            >
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
            <WrapperInputNumber
              //onChange={onChange}
              defaultValue={1}
              //max={productDetails?.countInStock}
              value={1}
              size="small"
            />
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              // onClick={() =>
              //   handleChangeCount(
              //     "increase",
              //     numProduct === productDetails?.countInStock
              //   )
              // }
            >
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <>
            <div>
              <ButtonComponent
                size={40}
                styleButton={{
                  backgroundColor: "#1C978F",
                  height: "48px",
                  width: "220px",
                  border: "none",
                  borderRadius: "4px",
                }}
                //onClick={handleAddOrderProduct}
                textbutton={"Add to cart"}
                styleTextButton={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              ></ButtonComponent>
            </div>
            <ButtonComponent
              size={40}
              styleButton={{
                backgroundColor: "#fff",
                height: "48px",
                width: "220px",
                border: "1px solid rgb(32, 178, 170)",
                borderRadius: "4px",
              }}
              textbutton={"Buy now"}
              styleTextButton={{
                color: "rgb(32, 178, 170)",
                fontWeight: "700",
                fontSize: "15px",
              }}
            ></ButtonComponent>
            <ButtonComponent
              size={40}
              onClick={handleClick}
              styleButton={{
                backgroundColor: "#fff",
                height: "48px",
                width: "50px",
                border: "1px solid rgb(32, 178, 170)",
                borderRadius: "4px",
              }}
              textbutton={
                isFilled ? (
                  <HeartFilled style={{ fontSize: "20px" }} />
                ) : (
                  <HeartOutlined style={{ fontSize: "20px" }} />
                )
              }
              styleTextButton={{
                color: "rgb(32, 178, 170)",
                fontWeight: "1000",
                fontSize: "20px",
              }}
            ></ButtonComponent>
          </>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
