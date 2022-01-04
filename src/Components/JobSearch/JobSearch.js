import { useEffect, useState } from "react";
import * as S from "./Style";
import Pen from "../../Assets/SVG/Pen.svg";
import JobSearchItem from "../JobSearchItem/JobSearchItem";

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

  const mockupData = [
    {
      id: 0,
      title: "디자이너 구해요",
      prjName: "아리수",
      categori: "project",
    },
    {
      id: 1,
      title: "개발자 구해요",
      prjName: "아리수",
      categori: "project",
    },
    {
      id: 2,
      title: "기획자 구해요",
      prjName: "더모먼트",
      categori: "contest",
    },
    {
      id: 3,
      title: "밥 해줄사람 구해요",
      prjName: "더모먼트",
      categori: "contest",
    },
    {
      id: 4,
      title: "정대우 구해요",
      prjName: "팀배리",
      categori: "portpolio",
    },
    {
      id: 5,
      title: "송시현 구해요",
      prjName: "팀배리",
      categori: "portpolio",
    },
    {
      id: 6,
      title: "공부할 사람 구해요",
      prjName: "신은재",
      categori: "study",
    },
    {
      id: 7,
      title: "놀러갈 사람 구해요",
      prjName: "신은재",
      categori: "study",
    },
  ];

  const projectArr = mockupData.filter((item) => item.categori == "project");
  const contestArr = mockupData.filter((item) => item.categori == "contest");
  const portpolioArr = mockupData.filter(
    (item) => item.categori == "portpolio",
  );
  const studyArr = mockupData.filter((item) => item.categori == "study");

  return (
    <S.Positioner>
      <div>
        <S.BtnWrapper>
          <S.TopicBtn onClick={onClick1} active={on1}>
            프로젝트
          </S.TopicBtn>
          <S.TopicBtn onClick={onClick2} active={on2}>
            대회
          </S.TopicBtn>
          <S.TopicBtn onClick={onClick3} active={on3}>
            포트폴리오
          </S.TopicBtn>
          <S.TopicBtn onClick={onClick4} active={on4}>
            스터디
          </S.TopicBtn>
        </S.BtnWrapper>

        <S.TopicList>
          {on1 &&
            projectArr.map((a) => (
              <S.LinkBtn to="/show">
                <JobSearchItem
                  key={a.id}
                  id={a.id}
                  title={a.title}
                  prjName={a.prjName}
                />
              </S.LinkBtn>
            ))}
          {on2 &&
            contestArr.map((a) => (
              <S.LinkBtn to="/show">
                <JobSearchItem
                  key={a.id}
                  id={a.id}
                  title={a.title}
                  prjName={a.prjName}
                />
              </S.LinkBtn>
            ))}
          {on3 &&
            portpolioArr.map((a) => (
              <S.LinkBtn to="/show">
                <JobSearchItem
                  key={a.id}
                  id={a.id}
                  title={a.title}
                  prjName={a.prjName}
                />
              </S.LinkBtn>
            ))}
          {on4 &&
            studyArr.map((a) => (
              <S.LinkBtn to="/show">
                <JobSearchItem
                  key={a.id}
                  id={a.id}
                  title={a.title}
                  prjName={a.prjName}
                />
              </S.LinkBtn>
            ))}
        </S.TopicList>
      </div>
      <S.WriteBtn to="/write">
        <img src={Pen} alt="" />
      </S.WriteBtn>
    </S.Positioner>
  );
};

export default JobSearch;
