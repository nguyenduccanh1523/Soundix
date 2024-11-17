import React, { useState } from "react";
import {
  WrapperHeader,
  WrapperTextHeader,
} from "./style";
import { useNavigate } from "react-router-dom";


const CategoryComponent = () => {
   // State để lưu id của phần tử được chọn, mặc định là 0
  const [selectedId, setSelectedId] = useState(0);

  // React Router hook
  const navigate = useNavigate();

  // Xử lý khi click vào phần tử
  const handleClick = (id, path) => {
    setSelectedId(id); // Cập nhật id của phần tử được chọn
    navigate(path); // Điều hướng đến URL tương ứng
  };

  // Danh sách các WrapperTextHeader với navigation
  const items = [
    { name: 'Header 1', path: '/' },
    { name: 'Header 2', path: '/products' },
    { name: 'Header 3', path: '/order' },
  ];
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(32, 178, 170)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
      {items.map((item, index) => (
        <WrapperTextHeader
          key={index}
          isClicked={selectedId === index} // Kiểm tra nếu phần tử này được chọn
          onClick={() => handleClick(index, item.path)} // Cập nhật id được chọn
        >
          {item.name}
        </WrapperTextHeader>
      ))}
      </WrapperHeader>
    </div>
  );
};

export default CategoryComponent;
