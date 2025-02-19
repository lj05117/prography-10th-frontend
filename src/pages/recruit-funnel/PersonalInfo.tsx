import RecruitFunnel from "./RecruitFunnel.tsx";
import Header from "../../components/Header.tsx";
import ProgressStage from "../../components/ProgressStage.tsx";
import InputInfo from "../../components/InputInfo.tsx";
import ContentContainer from "../../components/ContentContainer.tsx";

export default function PersonalInfo({ name, email, phone }) {
  return (
    <>
      {" "}
      <ContentContainer title={"성함을 입력해주세요"}>
        <InputInfo placeholder={"예시 : 홍길동"} value={name} />
      </ContentContainer>
      <ContentContainer title={"이메일 주소를 입력해주세요"}>
        <InputInfo placeholder={"예시 : prography@gmail.com"} value={email} />
      </ContentContainer>
      <ContentContainer title={"휴대폰 번호를 입력해주세요"}>
        <InputInfo placeholder={"예시 : 010-1234-5678"} value={phone} />
      </ContentContainer>
    </>
  );
}
