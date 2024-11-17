import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import CategoryComponent from "../CategoryComponent/CategoryComponent";

const DefaultComponent = ({children}) => {
    return (
        <div>
        <HeaderComponent />
        <CategoryComponent />
        {children}
        </div>
    )
}

export default DefaultComponent;