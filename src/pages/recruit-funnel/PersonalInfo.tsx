import RecruitFunnel from "./RecruitFunnel.tsx";
import Header from "../../components/Header.tsx";
import ProgressStage from "../../components/ProgressStage.tsx";
import InputInfo from "../../components/InputInfo.tsx";

export default function PersonalInfo({ name, email, phone }) {
  return (
    <>
      <InputInfo placeholder={"예시 : 홍길동"} value={name} />
      <InputInfo placeholder={"예시 : prography@gmail.com"} value={email} />
      <InputInfo placeholder={"예시 : 010-1234-5678"} value={phone} />
    </>
  );
}
