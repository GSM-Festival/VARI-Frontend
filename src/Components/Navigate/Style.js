import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: space-between;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-top: 80px;
  margin-left: 30px;
`;

export const LogoWrapper = styled.div`
  margin-top: 24px;
  margin-left: 30px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  img {
    width: 175px;
    height: 123px;
  }
`;
