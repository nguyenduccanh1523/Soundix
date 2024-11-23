import React from 'react';
import { Button } from 'antd';

const ButtonColorComponent = ({ colorCode, colorName, selected, onClick }) => {
    return (
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 15px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          backgroundColor: selected ? "#dff0d8" : "#f5f5f5", // Màu nền khi chọn
          boxShadow: selected
            ? "0 0 10px 2px rgba(0, 128, 0, 0.4)" // Thêm hiệu ứng sáng khi chọn
            : "none",
          transition: "all 0.3s ease",
        }}
        onClick={() => onClick(colorCode, colorName)} // Gửi mã màu và tên khi click
      >
        {/* Ô tròn chứa màu */}
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%", // Đảm bảo là hình tròn
            backgroundColor: colorCode, // Sử dụng mã màu truyền vào
            marginRight: "10px",
            border: selected ? `2px solid ${colorCode}` : "none", // Viền khi chọn
            transition: "all 0.3s ease", // Thêm hiệu ứng chuyển động khi thay đổi trạng thái
          }}
        ></div>
        <span style={{ fontWeight: "bold" }}>{colorName}</span>
      </Button>
  
  );
};

export default ButtonColorComponent;