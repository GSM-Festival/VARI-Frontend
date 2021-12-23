import * as S from "./Style";
import * as I from "../../Assets";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <S.Positioner>
      <S.LogoWrapper>
        <I.LogoSmall />
      </S.LogoWrapper>
      <S.InputContainer>
        <S.LabelStyle>Email</S.LabelStyle>
        <S.IdWrapper>
          <S.InputStyle placeholder="이메일을 입력하세요." />
        </S.IdWrapper>
        <S.LabelStyle>Password</S.LabelStyle>
        <S.InputStyle type="password" placeholder="비밀번호를 입력하세요." />
      </S.InputContainer>
      <S.ButtonStyle>
        <Link to="/">로그인</Link>
      </S.ButtonStyle>
      <S.SignupContainer>
        <span>아직 계정이 없으신가요?</span>
        <Link to="/signup">회원가입</Link>
      </S.SignupContainer>
    </S.Positioner>
  );
};

export default Signin;
