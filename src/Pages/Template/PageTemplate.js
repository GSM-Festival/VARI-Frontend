import * as S from "./Style";
import * as I from "../../Assets";

const PageTemplate = ({ children }) => {
  return (
    <>
      <S.Positioner>
        <S.LeftBox>
          <S.LogoWrapper>
            <I.LogoBig />
          </S.LogoWrapper>
          <p>
            GSM 프로젝트 구인구직 사이트,
            <br />
            함께 프로젝트할 친구들을 찾아보세요
          </p>
          <I.WrapperImg />
        </S.LeftBox>
        <S.RightBox>
          <S.ContentWrapper>{children}</S.ContentWrapper>
        </S.RightBox>
      </S.Positioner>
    </>
  );
};

export default PageTemplate;
