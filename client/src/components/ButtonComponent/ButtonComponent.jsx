import { Button } from "antd";
import React, { useState } from "react";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextButton,
  textbutton,
  disabled,
  hoverStyleButton = {}, // kiểu khi hover
  hoverStyleTextButton = {}, // kiểu text khi hover
  ...rests
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      style={{
        ...styleButton,
        ...(isHovered && hoverStyleButton), // Áp dụng hover style
        backgroundColor: disabled
          ? "#ccc"
          : isHovered
          ? hoverStyleButton?.backgroundColor || styleButton?.backgroundColor
          : styleButton?.backgroundColor,
        border: disabled
          ? "none"
          : isHovered
          ? hoverStyleButton?.border || styleButton?.border
          : styleButton?.border,
      }}
      size={size}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)} // Bật trạng thái hover
      onMouseLeave={() => setIsHovered(false)} // Tắt trạng thái hover
      {...rests}
    >
      <span
        style={{
          ...styleTextButton,
          ...(isHovered && hoverStyleTextButton), // Áp dụng hover style cho text
        }}
      >
        {textbutton}
      </span>
    </Button>
  );
};

export default ButtonComponent;
