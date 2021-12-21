import * as S from "./Style";
import * as I from "../../Assets/SVG";

const PageTemplate = ({ children }) => {
  return (
    <>
      <S.Positioner>
        <S.Wrapper>
          <S.LeftBox>
            <S.LogoWrapper>
              <I.Logo />
            </S.LogoWrapper>
            <p>
              GSM 프로젝트 구인구직 사이트,
              <br />
              함께 프로젝트할 친구들을 찾아보세요
            </p>
            <S.ImgWrapper>
              <I.WrapperImg />
            </S.ImgWrapper>
          </S.LeftBox>
          <S.ContentWrapper>{children}</S.ContentWrapper>
        </S.Wrapper>
      </S.Positioner>
    </>
  );
};

export default PageTemplate;
