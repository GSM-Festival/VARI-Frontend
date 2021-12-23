import styled from "styled-components";

export const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 148px;
`;

export const IdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

export const LabelStyle = styled.label`
  font-size: 22px;
  font-weight: 500;
`;

export const InputStyle = styled.input`
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

export const ButtonStyle = styled.button`
  margin-top: 96px;
  width: 500px;
  height: 60px;
  cursor: pointer;
  background-color: #395bb4;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const SigninContainer = styled.div`
  margin-top: 72px;
  span {
    color: #9f9f9f;
  }
  a {
    margin-left: 7px;
    text-decoration: none;
    color: #3a4c98;
  }
`;
