import { useEffect, useState } from "react";
import * as S from "./Style";
import Pen from "../../Assets/SVG/Pen.svg";
import JobSearchItem from "../JobSearchItem/JobSearchItem";
import { Link } from "react-router-dom";

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
      id: 0,
      title: "디자이너 구해요",
      prjName: "아리수",
      categori: "project",
    },
    {
      id: 1,
      title: "디자이너 구해요",
      prjName: "아리수",
      categori: "contest",
    },
    {
      id: 1,
      title: "디자이너 구해요",
      prjName: "아리수",
      categori: "contest",
    },
    {
      id: 2,
      title: "디자이너 구해요",
      prjName: "아리수",
      categori: "portpolio",
    },
    {
      id: 2,
      title: "디자이너 구해요",
      prjName: "아리수",
      categori: "portpolio",
    },
    {
      id: 3,
      title: "디자이너 구해요",
      prjName: "아리수",
      categori: "study",
    },
    {
      id: 3,
      title: "디자이너 구해요",
      prjName: "아리수",
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
      <S.Topic>
        <S.TopicBtn onClick={onClick1} active={on1}>
          프로젝트
        </S.TopicBtn>
      </S.Topic>

      <S.TopicList>
        {on1 &&
          projectArr.map((a) => (
            <Link to="/show">
              <JobSearchItem id={a.id} title={a.title} prjName={a.prjName} />
            </Link>
          ))}
      </S.TopicList>
      <S.WriteBtn to="/write">
        <img src={Pen} alt="" />
      </S.WriteBtn>
    </S.Positioner>
  );
};

export default JobSearch;
