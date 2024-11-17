import React, { useState } from "react";
import {
  WrapperHeader,
  WrapperTextHeader,
} from "./style";


const CategoryComponent = () => {
   // State để lưu id của phần tử được click
  const [selectedId, setSelectedId] = useState(0);

  // Xử lý khi click vào phần tử
  const handleClick = (id) => {
    setSelectedId(id); // Chỉ lưu id của phần tử được click
    console.log(id);
  };

  // Danh sách các WrapperTextHeader
  const items = ['Header 1', 'Header 2', 'Header 3'];
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
          onClick={() => handleClick(index)} // Cập nhật id được chọn
        >
          {item}
        </WrapperTextHeader>
      ))}
      </WrapperHeader>
    </div>
  );
};

export default CategoryComponent;
