
import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperOutStock, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from "./style";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { convertPrice } from "../../utils";
import image1 from "../../assets/images/JBL.webp";

const CardComponent = (props) => {
  const { countInStock, description, image, name, price, type, rating, selled, discount, id } = props;
  const navigate = useNavigate();
  const handleDetailProduct = (id) => {
    navigate(`/product-details/${id}`)
  }
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{width: '200px', height: '200px'}}
      style={{ width: 200 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src={image1}
        />
      }
      //onClick={() => handleDetailProduct(id)}
      disabled={countInStock === 0}
    >
    {countInStock === 0 && (
        <WrapperOutStock>Đã hết hàng</WrapperOutStock>
      )}
      <StyleNameProduct>HeadPhone</StyleNameProduct>
      <WrapperReportText>
        <span>
          <span>{rating}</span>
          <StarFilled style={{ fontSize: "13px", color: "rgb(32, 178, 170)" }} />
        </span>
        <WrapperStyleTextSell> | Selled {selled || 1000}+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText><span style={{marginRight: '8px'}}>33.22</span> <WrapperDiscountText> - {discount || 0}%</WrapperDiscountText></WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
