import * as S from "./Style";

const Write = () => {
  return (
    <S.Positioner>
      <S.LabelStyle>제목을 입력하세요.</S.LabelStyle>
      <S.WriteText placeholder="제목"></S.WriteText>
    </S.Positioner>
  );
};

export default Write;
