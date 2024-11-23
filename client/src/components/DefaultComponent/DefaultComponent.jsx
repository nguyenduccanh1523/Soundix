import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import CategoryComponent from "../CategoryComponent/CategoryComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
const DefaultComponent = ({children}) => {
    return (
        <div>
        <HeaderComponent />
        <CategoryComponent />
        {children}
        <FooterComponent />
        </div>
    )
}

export default DefaultComponent;