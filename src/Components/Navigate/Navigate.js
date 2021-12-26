import * as S from "./Style";
import NavigateLogo from "../../Assets/SVG/NavigateLogo.svg";

const Navigate = () => {
  return (
    <S.Positioner>
      <S.TextWrapper>
        <p>
          스터디와 포트폴리오,
          <br />
          프로젝트를 찾는 가장 쉬운 방법
          <br />
          VARI에서 함께 할 팀원을 찾아보세요!
        </p>
      </S.TextWrapper>
      <img src={NavigateLogo} />
    </S.Positioner>
  );
};

export default Navigate;
