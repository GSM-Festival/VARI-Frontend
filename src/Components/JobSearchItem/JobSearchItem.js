import * as S from "./Style";

const JobSearch = ({ id, title, prjName }) => {
  return (
    <>
      <S.container>
        <h1>{title}</h1>
        <span>{prjName}</span>
      </S.container>
    </>
  );
};

export default JobSearch;
