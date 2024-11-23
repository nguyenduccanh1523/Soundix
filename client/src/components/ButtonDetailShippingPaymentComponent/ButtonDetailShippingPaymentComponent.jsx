import React, { useState } from "react";
import { DownOutlined, UpOutlined, CheckOutlined  } from "@ant-design/icons";
import paymentMethod from "../../assets/images/paymentMethod.jpg";
const ButtonDetailShippingPaymentComponent = ({
  productName,
  productDetails,
}) => {
  const [isOpen, setIsOpen] = useState(false); // State để kiểm tra chi tiết sản phẩm có hiển thị hay không

  // Hàm xử lý khi nhấn vào button
  const toggleDetails = () => {
    setIsOpen((prevState) => !prevState); // Đảo ngược trạng thái isOpen
  };

  return (
    <div>
      {/* Button để mở hoặc đóng chi tiết sản phẩm */}
      <button
        onClick={toggleDetails}
        style={{
          color: "black",
          padding: "10px",
          width: "100%",
          fontWeight: "900",
          border: "0px",
          justifyContent: "space-between", // Để chữ và icon nằm ở hai đầu
        }}
      >
        <span style={{ textAlign: "left" }}>
          SHIPPING AND PAYMENT {productName}
        </span>
        {/* Tùy thuộc vào trạng thái isOpen, thay đổi icon */}
        <span style={{ paddingLeft: "10px" }}>
          {isOpen ? <UpOutlined /> : <DownOutlined />}
        </span>
      </button>

      {/* Hiển thị chi tiết khi isOpen là true */}
      {isOpen && (
        <div style={{ marginTop: "5px", padding: "10px" }}>
          <h4>Shipping</h4>
          <p><CheckOutlined style={{color: '#1C978F', fontSize: '20px'}} /> Shipping Free delivery on orders over $100, otherwise $4.95.</p> 
          <h4>Payment</h4>
          <p><CheckOutlined style={{color: '#1C978F', fontSize: '20px'}} /> We accept all major forms of payment types including credit/debit card
          and PayPal.</p>
          <img src={paymentMethod} alt="payment method" style={{width: '100%'}} />
          <p>{productDetails}</p>
        </div>
      )}
    </div>
  );
};

export default ButtonDetailShippingPaymentComponent;
