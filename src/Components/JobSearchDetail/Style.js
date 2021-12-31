import styled from "styled-components";
import { Link } from "react-router-dom";

export const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Topic = styled.div`
  margin-top: 55px;
  margin-left: 30px;
  display: flex;
  color: #737373;
  font-size: 20px;
  font-weight: 700;
`;

export const WriteText = styled.div`
  margin-top: 23px;
  margin-left: 30px;
  color: #000;
  font-weight: 700;
  font-size: 30px;
`;

export const Content = styled.div`
  width: 500px;
  height: 100%;
  margin-left: 30px;
  margin-top: 67px;
  font-weight: 500;
  font-size: 18px;
  color: #333333;
`;
export const BtnWrapper = styled.div`
  display: flex;
  width: 220px;
  margin-left: 320px;
  margin-top: 145px;
  justify-content: space-between;
`;

export const Btn = styled(Link)`
  display: flex;
  width: 100px;
  height: 45px;
  text-decoration: none;
  color: #fff;
  background: #395bb4;
  border-radius: 10px;
  border: none;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
`;
