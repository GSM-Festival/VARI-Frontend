import * as S from "./Style";
import A from "../../Assets/SVG/Arrow.svg";

const Write = () => {
  return (
    <S.Positioner>
      <S.TextWrapper>
        <S.LabelStyle>제목을 입력하세요.</S.LabelStyle>
        <S.WriteText placeholder="제목"></S.WriteText>
      </S.TextWrapper>
      <S.SelectWrapper>
        <S.SelectBox>
          <S.LabelStyle>모집 주제를 선택해주세요.</S.LabelStyle>
          <select>
            <option disabled selected>
              선택
            </option>
            <option>앙기모띠</option>
          </select>
        </S.SelectBox>
        <S.SelectBox>
          <S.LabelStyle>모집 분야를 선택해주세요.</S.LabelStyle>
          <select>
            <option disabled selected>
              선택
            </option>
            <option>앙기모띠</option>
          </select>
        </S.SelectBox>
      </S.SelectWrapper>
    </S.Positioner>
  );
};

export default Write;
