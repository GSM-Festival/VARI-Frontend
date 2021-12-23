import * as S from "./Style";
import * as I from "../../Assets";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <S.Positioner>
      <S.LogoWrapper>
        <I.LogoSmall />
      </S.LogoWrapper>
      <S.InputContainer>
        <S.LabelStyle>Name</S.LabelStyle>
        <S.IdWrapper>
          <S.InputStyle placeholder="이메일을 입력하세요." />
        </S.IdWrapper>
        <S.LabelStyle>Email</S.LabelStyle>
        <S.IdWrapper>
          <S.InputStyle placeholder="이메일을 입력하세요." />
        </S.IdWrapper>
        <S.LabelStyle>Password</S.LabelStyle>
        <S.IdWrapper>
          <S.InputStyle type="password" placeholder="비밀번호를 입력하세요." />
        </S.IdWrapper>
      </S.InputContainer>
      <Link to="/signin">
        <S.ButtonStyle>회원가입</S.ButtonStyle>
      </Link>
      <S.SigninContainer>
        <span>이미 계정이 있으신가요?</span>
        <Link to="/signin">로그인</Link>
      </S.SigninContainer>
    </S.Positioner>
  );
};

export default SignUp;
