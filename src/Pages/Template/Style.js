import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const LeftBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    font-size: 1.875rem;
    font-weight: 700;
  }
  svg {
    margin-top: 5.375rem;
  }
  @media screen and (max-width: 1200px) {
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

export const RightBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  width: 36.875rem;
  height: 100%;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
`;
