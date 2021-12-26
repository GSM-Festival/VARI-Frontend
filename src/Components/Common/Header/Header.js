import * as S from "./Style";
import * as I from "../../../Assets";
import HeaderLogo from "../../../Assets/SVG/HeaderLogo.svg";

const Header = () => {
  return (
    <>
      <S.Positioner>
        <S.LogoWrapper>
          <img src={HeaderLogo} />
        </S.LogoWrapper>
        <S.Member>
          정대우<strong>님</strong>
        </S.Member>
        <I.Message />
      </S.Positioner>
    </>
  );
};

export default Header;
