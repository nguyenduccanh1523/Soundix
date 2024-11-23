import { Col, Image, Rate, Row } from "antd";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import imageProductSmall from "../../assets/images/JBL.webp";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import {
  WrapperAddressProduct,
  WrapperDetailShipping,
  WrapperDiscountTextProduct,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperSelectColorProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ButtonColorComponent from "../ButtonColorComponent/ButtonColorComponent";
import ButtonDetailShippingPaymentComponent from "../ButtonDetailShippingPaymentComponent/ButtonDetailShippingPaymentComponent";
import { convertPrice } from "../../utils";
import image from "../../assets/images/JBL.webp";

const ProductDetailComponent = () => {
  const [isFilled, setIsFilled] = useState(false); // Trạng thái lưu trữ xem nút có được filled hay không

  // Lưu trạng thái của button đã được chọn
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (colorCode, colorName) => {
    // Cập nhật trạng thái của màu đã chọn
    setSelectedColor(colorCode);
    console.log(`Màu đã chọn: ${colorName} - Mã màu: ${colorCode}`);
    // Bạn có thể thực hiện hành động với màu đã chọn (ví dụ: cập nhật sản phẩm)
  };
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
              preview={true}
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
          <StarRatings
            rating={4.5} // Giá trị sao
            starRatedColor="#EEEE00" // Màu sao
            numberOfStars={5} // Tổng số sao
            starDimension="25px" // Kích thước sao
            starSpacing="2px" // Khoảng cách giữa các sao
          />
          <WrapperStyleTextSell> | 2000+ Reviewer</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>
            {convertPrice(1000000)}
          </WrapperPriceTextProduct>
          <WrapperDiscountTextProduct>10% OFF</WrapperDiscountTextProduct>
        </WrapperPriceProduct>
        <WrapperSelectColorProduct>
          <span>Select Color:</span>
          <ButtonColorComponent
            colorCode="#FF5733"
            colorName="Red Orange"
            selected={selectedColor === "#FF5733"} // Kiểm tra màu đã chọn
            onClick={handleColorSelect}
          />
          <ButtonColorComponent
            colorCode="#33FF57"
            colorName="Green"
            selected={selectedColor === "#33FF57"} 
            onClick={handleColorSelect}
          />
        </WrapperSelectColorProduct>
        <WrapperAddressProduct>
          <span>Delivered to</span>
          <span className="address"> sssssss</span> -
          <span className="change-address"> Change address</span>
        </WrapperAddressProduct>

        <WrapperDetailShipping>
            <ButtonDetailShippingPaymentComponent productName="" productDetails=""/>
        </WrapperDetailShipping>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "10px",
          }}
        >
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
