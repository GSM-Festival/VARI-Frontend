import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Positioner = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  display: flex;
  justify-content: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  height: 50px;
  margin-top: 60px;
`;

export const TopicBtn = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  background: none;
  font-size: 20px;
  font-weight: 600;
  color: #b1b1b1;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      border-bottom: 6px solid #395bb4;
      color: #395bb4;
    `}
`;

export const TopicList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LinkBtn = styled(Link)`
  text-decoration: none;
`;

export const WriteBtn = styled(Link)`
  background-color: #fff;
  border-radius: 50px;
  position: absolute;
  width: 100px;
  height: 100px;
  margin-left: 390px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 50px;
  border: none;
  cursor: pointer;
  transform: scaleX(-1);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
`;
