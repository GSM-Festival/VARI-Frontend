import { useState } from "react";
import * as S from "./Style";
import Pen from "../../Assets/SVG/Pen.svg";

const JobSearch = () => {
  const [on1, setOn1] = useState(true);
  const [on2, setOn2] = useState(false);
  const [on3, setOn3] = useState(false);
  const [on4, setOn4] = useState(false);

  const onClick1 = () => {
    setOn1(true);
    setOn2(false);
    setOn3(false);
    setOn4(false);
  };

  const onClick2 = () => {
    setOn1(false);
    setOn2(true);
    setOn3(false);
    setOn4(false);
  };

  const onClick3 = () => {
    setOn1(false);
    setOn2(false);
    setOn3(true);
    setOn4(false);
  };

  const onClick4 = () => {
    setOn1(false);
    setOn2(false);
    setOn3(false);
    setOn4(true);
  };

  return (
    <S.Positioner>
      <S.Topic>
        <div>
          <S.TopicBtn onClick={onClick1} active={on1}>
            프로젝트
          </S.TopicBtn>
          {on1 && (
            <S.TopicList>
              <S.TopicItem>1아이템</S.TopicItem>
            </S.TopicList>
          )}
        </div>
        <div>
          <S.TopicBtn onClick={onClick2} active={on2}>
            대회
          </S.TopicBtn>
          {on2 && (
            <S.TopicList>
              <S.TopicItem>아이템 2</S.TopicItem>
            </S.TopicList>
          )}
        </div>
        <div>
          <S.TopicBtn onClick={onClick3} active={on3}>
            포트폴리오
          </S.TopicBtn>
          {on3 && (
            <S.TopicList>
              <S.TopicItem>아이템 3</S.TopicItem>
            </S.TopicList>
          )}
        </div>
        <div>
          <S.TopicBtn onClick={onClick4} active={on4}>
            스터디
          </S.TopicBtn>
          {on4 && (
            <S.TopicList>
              <S.TopicItem>아이템 4</S.TopicItem>
            </S.TopicList>
          )}
        </div>
        <S.WriteBtn>
          <img src={Pen} alt="" />
        </S.WriteBtn>
      </S.Topic>
    </S.Positioner>
  );
};

export default JobSearch;
