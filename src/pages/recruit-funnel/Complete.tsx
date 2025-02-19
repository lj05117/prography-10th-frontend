import RecruitFunnel from "./RecruitFunnel.tsx";
import Header from "../../components/Header.tsx";
import ProgressStage from "../../components/ProgressStage.tsx";
import Button from "../../styles/button.ts";
import { useNavigate } from "react-router-dom";

export default function Complete() {
  const navigate = useNavigate();

  return (
    <>
      <div>지원이 완료되었습니다!</div>
      <div>프로그라피 10기 지원재주셔서 감사합니다.</div>
      <div>서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.</div>
      <Button
        variant={"primary"}
        size="large"
        onClick={() => navigate("/home")}
      >
        홈으로
      </Button>
    </>
  );
}
