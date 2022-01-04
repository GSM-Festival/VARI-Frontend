import * as S from "./Style";

const JobSearchDetail = () => {
  return (
    <S.Positioner>
      <S.Topic>스터디</S.Topic>
      <S.WriteText>함께 NCS 스터디 할 사람 구해요~</S.WriteText>
      <S.Content>
        NCS는 2주에 한 번씩 틀린 문제를 공유하고 서로 아는 문제를 알려주면서
        진행할 예정입니다. 신청하실 때는 본인이 풀었던 책들을 적어주셨으면
        좋겠어요~~! 같이 열심히 해서 원하는 기업에 취업할 분들 구해요.
      </S.Content>
      <S.BtnWrapper>
        <S.Btn to="/apply">신청</S.Btn>
        <S.Btn to="/">취소</S.Btn>
      </S.BtnWrapper>
    </S.Positioner>
  );
};

export default JobSearchDetail;
