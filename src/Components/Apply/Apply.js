import * as S from "./Style";

function Apply() {
  return (
    <S.Positioner>
      <S.WriteText>신청하기</S.WriteText>

      <S.Wrapper>
        <S.Number placeholder="ex)3119 진예원">
          <S.LabelStyle>학번과 이름을 이력해주세요.</S.LabelStyle>
          <input placeholder="ex)3119 진예원"></input>
        </S.Number>
        <S.SelectBox>
          <S.LabelStyle>신청 분야를 선택해주세요.</S.LabelStyle>
          <select>
            <option disabled selected>
              선택
            </option>
            <option>프론트</option>
            <option>백앤드</option>
            <option>ios</option>
            <option>앱</option>
            <option>디자인</option>
          </select>
        </S.SelectBox>
      </S.Wrapper>
      <S.NameWrapper>
        <S.LabelStyle>프로젝트 이름을 입력해주세요.</S.LabelStyle>

        <S.Name placeholder="입력"></S.Name>
      </S.NameWrapper>
      <S.ContentWrapper>
        <S.content placeholder="내용을 입력해주세요."></S.content>
      </S.ContentWrapper>
      <S.BtnWrapper>
        <S.Btn to="/" onClick={() => alert("저장 완료")}>
          신청
        </S.Btn>
        <S.Btn to="/">취소</S.Btn>
      </S.BtnWrapper>
    </S.Positioner>
  );
}

export default Apply;
