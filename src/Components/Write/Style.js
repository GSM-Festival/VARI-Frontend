import styled from "styled-components";
import A from "../../Assets/SVG/Arrow.svg";

export const Positioner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  margin-left: 30px;
  margin-top: 60px;
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
  height: 70px;
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
`;

export const SelectBox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  select {
    -webkit-appearance: none; /* 화살표 없애기 for chrome*/
    -moz-appearance: none; /* 화살표 없애기 for firefox*/
    appearance: none; /* 화살표 없애기 공통*/
    width: 260px;
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
  }
`;
