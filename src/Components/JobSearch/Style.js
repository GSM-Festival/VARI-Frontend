import styled, { css } from "styled-components";

export const Positioner = styled.div`
  height: 100%;
  background-color: #f9f9f9;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const Topic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TopicBtn = styled.button`
  width: 100px;
  height: 50px;
  outline: none;
  border: none;
  background: none;
  font-size: 20px;
  font-weight: 600;
  color: #b1b1b1;
  ${(props) =>
    props.active &&
    css`
      border-bottom: 3px solid #395bb4;
      color: #395bb4;
    `}
`;

export const TopicList = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const TopicItem = styled.div`
  font-size: 18px;
  border: 1px solid blue;
`;
