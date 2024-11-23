import { Col, Pagination } from "antd";
import styled from "styled-components";

export const WrapperProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;

export const WrapperNavbar = styled(Col)`
  background: #f9f6f6;
  margin-right: 10px;
  padding: 10px;
  border-radius: 6px;
  height: fit-content;
  margin-top: 20px;
  width: 200px;
`;
export const WrapperPagination = styled(Pagination)`
  justify-content: center;
  margin-top: 10px;
  .ant-pagination-item {
    background-color: white; /* Màu nền mặc định */
    border-color: #1c978f; /* Màu viền mặc định */
  }

  .ant-pagination-item:hover {
    background-color: #1c978f; /* Màu nền khi hover */
    border-color: #1c978f; /* Màu viền khi hover */
    color: white; /* Màu chữ khi hover */
  }

  .ant-pagination-item-active {
    background-color: #1c978f; /* Màu nền khi active */
    border-color: #1c978f; /* Màu viền khi active */
  }

  .ant-pagination-item-active a:hover {
    color: white; /* Màu chữ khi active */
  }

  .ant-pagination-item-active a {
    color: white; /* Màu chữ khi active */
  }

  .ant-pagination-item a {
    color: white; /* Màu chữ mặc định */
  }
`;
