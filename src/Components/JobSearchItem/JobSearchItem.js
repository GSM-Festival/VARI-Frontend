import * as S from "./Style";

const JobSearch = ({ id, title, prjName }) => {
  return (
    <>
      <S.container>
        {title}, {prjName}
      </S.container>
    </>
  );
};

export default JobSearch;
