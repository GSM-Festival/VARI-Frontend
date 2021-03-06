import styled from "styled-components";
import { Link } from "react-router-dom";

export const Positioner = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LogoWrapper = styled(Link)`
  margin-left: 19px;
`;
export const MemberWrapper = styled.div`
  margin-left: 297px;
`;

export const Member = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #395bb4;
  strong {
    margin-left: 3px;
    color: #395bb4;
    font-size: 17px;
  }
`;

export const MessageWrapper = styled.div`
  margin-left: 34px;
`;
