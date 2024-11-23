import React, { useEffect, useState } from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperPagination, WrapperProducts } from "./style";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const {state} = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginate, setPaginate] = useState({
    page: 0,
    limit: 10,
    total: 1,
  });
  
  const onChange = (current, pageSize) => {
    setPaginate({...paginate, page: current - 1, limit: pageSize})
  };
  return (
    <div style={{ width: "100%", background: "#ffffff", height: 'calc(100vh - 64px)' }}>
      <div style={{ width: '1270px', margin:'0 auto', height: '100%' }}>
        <Row style={{ flexWrap: "nowrap", paddingTop: "10px", height:'calc(100% - 20px)' }}>
          <WrapperNavbar span={4}>
            <NavbarComponent />
          </WrapperNavbar>
          <Col span={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <WrapperProducts>
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </WrapperProducts>
            <WrapperPagination
              defaultCurrent={paginate.page + 1}
              total={paginate?.total}
              onChange={onChange}></WrapperPagination>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductPage;
