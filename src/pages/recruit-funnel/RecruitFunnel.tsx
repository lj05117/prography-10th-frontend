import PrivacyPolicy from "./PrivacyPolicy.tsx";
import PersonalInfo from "./PersonalInfo.tsx";
import ApplicationInfo from "./ApplicationInfo.tsx";
import Complete from "./Complete.tsx";
import ProgressStage from "../../components/ProgressStage.tsx";
import Header from "../../components/Header.tsx";
import styled from "styled-components";
import { useState } from "react";
import PageTitle from "../../components/PageTitle.tsx";
import Button from "../../styles/button.ts";
import { useRecoilValue } from "recoil";
import { recruitState } from "../../stores/ButtonState.ts";
import {useRecruitMutation} from "../../hooks/recruit-funnel.ts";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white; /* 배경색 추가 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  z-index: 1000;
`;

const ContentContainer = styled.div`
  padding-top: 100px; /* 헤더 + 진행 바 높이만큼 패딩 추가 */
  text-align: center;
  width: 100%;
`;

const PageTitleContainer = styled.div`
  width: 100%;
`;


export default function RecruitFunnel() {
  const [step, setStep] = useState(1); //todo: 페이지 별 값 설정
  const recruit = useRecoilValue<recruitState>(recruitState);
const {mutateAsync} = useRecruitMutation();

  const titles = ["", "개인정보 수집 동의", "기본 정보", "지원 정보"];
  const descriptions = [
    "",
    "프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다",
    "연락 가능한 정보를 입력해주세요",
    "지원하고자 하는 분야를 선택해주세요",
  ];

  const validateStep = () => {
    if (step === 1 && recruit.privacy !== 1) {
      alert("개인정보 수집 동의 여부를 선택해주세요.");
      return false;
    }
    if (step === 2) {
      const { name, email, phone } = recruit.personal;
      if (!name || !email || !phone) {
        alert("모든 개인 정보를 입력해주세요.");
        return false;
      }
    }
    if (step === 3 && !recruit.application) {
      alert("지원 정보를 입력해주세요.");
      return false;
    }
    return true;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBefore = ()=>{
    if(step!==1){
      scrollToTop()
      setStep(step-1)
    }
  }
  const handleNext = () => {
    if (validateStep()) {
      scrollToTop()
      setStep((prev) => Math.min(4, prev + 1));

      if(step===4){
        mutateAsync(recruit);
      }
    }
  };



  return (
    <>
      <Container>
        <Header />
        <>{step < 4 && <ProgressStage step={step} />}</>
      </Container>
      <ContentContainer>
        <PageTitleContainer>
          {step < 4 ? (
            <PageTitle title={titles[step]} description={descriptions[step]} />
          ) : null}
        </PageTitleContainer>
        <>{step === 1 && <PrivacyPolicy />}</>
        <>{step === 2 && <PersonalInfo />}</>
        <>{step === 3 && <ApplicationInfo />}</>
        <>{step === 4 && <Complete />}</>
        {/*  //todo: 이 컴포넌트에서 tanstack query
        연결하기*/}
      </ContentContainer>
      <>
        {step < 4 && (
          <Button
            variant={step !== 1 ? "primary" : "secondary"}
            size="small"
            onClick={handleBefore}
          >
            뒤로
          </Button>
        )}
        {step < 4 && (
          <Button variant="primary" size="small" onClick={handleNext}>
            {step !== 3 ? "다음" : "제출하기"}
          </Button>
        )}
      </>
    </>
  );
}
