import * as S from "./Style";
import NavigateLogo from "../../Assets/SVG/NavigateLogo.svg";
import NavImg from "../../Assets/SVG/NavImg.svg";

const Navigate = () => {
  return (
    <S.Positioner>
      <S.LeftBox>
        <S.TextWrapper>
          스터디와 포트폴리오,
          <br />
          프로젝트를 찾는 가장 쉬운 방법
          <br />
          VARI에서 함께 할 팀원을 찾아보세요!
        </S.TextWrapper>
        <S.LogoWrapper>
          <img src={NavigateLogo} alt="" />
        </S.LogoWrapper>
      </S.LeftBox>
      <S.ImgWrapper>
        <img src={NavImg} alt="" />
      </S.ImgWrapper>
    </S.Positioner>
  );
};

export default Navigate;
