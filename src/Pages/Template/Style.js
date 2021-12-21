import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftBox = styled.div`
  margin-left: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    font-size: 1.875rem;
    font-weight: 700;
  }
  @media screen and (max-width: 1350px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  width: 15.625rem;
  height: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const ImgWrapper = styled.div`
  width: 31.875rem;
  height: 22.5rem;
  margin-top: 5.3rem;
`;

export const ContentWrapper = styled.div`
  min-width: 36.875rem;
  min-height: 100%;
  margin-right: 23.125rem;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 1350px) {
    left: 0;
    right: 0;
    margin: auto;
  }
`;
