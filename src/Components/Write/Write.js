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
            <option>프로젝트</option>
            <option>대회</option>
            <option>포트폴리오</option>
            <option>스터디</option>
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
      <S.NameWrapper>
        <S.LabelStyle>프로젝트 이름을 입력해주세요.</S.LabelStyle>

        <S.Name placeholder="입력"></S.Name>
      </S.NameWrapper>
      <S.ContentWrapper>
        <S.content placeholder="내용을 입력해주세요."></S.content>
      </S.ContentWrapper>
      <S.BtnWrapper>
        <S.Btn to="/">저장</S.Btn>
        <S.Btn to="/">취소</S.Btn>
      </S.BtnWrapper>
    </S.Positioner>
  );
};

export default Write;
