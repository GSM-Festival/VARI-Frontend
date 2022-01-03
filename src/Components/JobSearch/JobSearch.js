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
      id: 10,
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
        <div>
          <S.TopicBtn onClick={onClick1} active={on1}>
            프로젝트
          </S.TopicBtn>
          {on1 && (
            <S.TopicList>
              {projectArr.map((a) => (
                <Link to="/show">
                  <JobSearchItem
                    id={a.id}
                    title={a.title}
                    prjName={a.prjName}
                  />
                </Link>
              ))}
              {projectArr.map((a) => (
                <Link to="/show">
                  <JobSearchItem
                    id={a.id}
                    title={a.title}
                    prjName={a.prjName}
                  />
                </Link>
              ))}
            </S.TopicList>
          )}
        </div>
        <div>
          <S.TopicBtn onClick={onClick2} active={on2}>
            대회
          </S.TopicBtn>
          {on2 && (
            <S.TopicList>
              {contestArr.map((b) => (
                <Link to="/show">
                  <JobSearchItem
                    id={b.id}
                    title={b.title}
                    prjName={b.prjName}
                  />
                </Link>
              ))}
            </S.TopicList>
          )}
        </div>
        <div>
          <S.TopicBtn onClick={onClick3} active={on3}>
            포트폴리오
          </S.TopicBtn>
          {on3 && (
            <S.TopicList>
              {portpolioArr.map((c) => (
                <Link to="/show">
                  <JobSearchItem
                    id={c.id}
                    title={c.title}
                    prjName={c.prjName}
                  />
                </Link>
              ))}
            </S.TopicList>
          )}
        </div>
        <div>
          <S.TopicBtn onClick={onClick4} active={on4}>
            스터디
          </S.TopicBtn>
          {on4 && (
            <S.TopicList>
              {studyArr.map((d) => (
                <Link to="/show">
                  <JobSearchItem
                    id={d.id}
                    title={d.title}
                    prjName={d.prjName}
                  />
                </Link>
              ))}
            </S.TopicList>
          )}
        </div>
        <S.WriteBtn to="/write">
          <img src={Pen} alt="" />
        </S.WriteBtn>
      </S.Topic>
    </S.Positioner>
  );
};

export default JobSearch;
