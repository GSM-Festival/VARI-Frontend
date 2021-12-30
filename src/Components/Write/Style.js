import { Link } from "react-router-dom";
import styled from "styled-components";
import A from "../../Assets/SVG/Arrow.svg";

export const Positioner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  margin-left: 30px;
  margin-top: 45px;
`;
export const LabelStyle = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #484848;
  margin-bottom: 10px;
`;

export const WriteText = styled.input`
  margin-top: 10px;
  width: 490px;
  height: 60px;
  background-color: #f3f3f3;
  border-radius: 10px;
  border: none;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 10px;
  margin-right: 25px;
`;

export const SelectBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  select {
    -webkit-appearance: none; /* 화살표 없애기 for chrome*/
    -moz-appearance: none; /* 화살표 없애기 for firefox*/
    appearance: none; /* 화살표 없애기 공통*/
    width: 235px;
    height: 55px;
    border: none;
    background-color: #f3f3f3;
    border-radius: 10px;
    color: #9a9a9a;
    padding-left: 15px;
    font-weight: 600;
    font-size: 14px;
    background-image: url(${A});
    background-repeat: no-repeat;
    background-position: right 15px center;
    cursor: pointer;
  }
`;

export const NameWrapper = styled.div`
  margin-left: 30px;
  margin-top: 25px;
`;
export const Name = styled.input`
  margin-top: 10px;
  width: 490px;
  height: 55px;
  background-color: #f3f3f3;
  border-radius: 10px;
  border: none;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 500;
`;

export const ContentWrapper = styled.div`
  margin-left: 30px;
  margin-top: 25px;
`;
export const content = styled.textarea`
  width: 495px;
  height: 430px;
  background: #f6f6f6;
  border-radius: 10px;
  font-size: 20px;
  line-height: 30px;
  padding-top: 20px;
  padding-left: 17px;
  border: none;
  resize: none;
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 220px;
  margin-left: 320px;
  margin-top: 25px;
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
