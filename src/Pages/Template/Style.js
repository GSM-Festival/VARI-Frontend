import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftBox = styled.div`
  margin-left: 225px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    font-size: 30px;
    font-weight: 700;
  }
`;

export const LogoWrapper = styled.div`
  width: 250px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const ImgWrapper = styled.div`
  width: 510px;
  height: 360px;
  margin-top: 85px;
`;

export const ContentWrapper = styled.div`
  width: 590px;
  height: 100%;
  margin-right: 370px;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
`;
