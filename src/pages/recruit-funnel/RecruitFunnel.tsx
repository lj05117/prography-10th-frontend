import PrivacyPolicy from "./PrivacyPolicy.tsx";
import PersonalInfo from "./PersonalInfo.tsx";
import ApplicationInfo from "./ApplicationInfo.tsx";
import Complete from "./Complete.tsx";
import ProgressStage from "../../components/ProgressStage.tsx";
import Header from "../../components/Header.tsx";
import styled from "styled-components";
import { useState } from "react";
import PageTitle from "../../components/PageTitle.tsx";

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
`;

export default function RecruitFunnel() {
  const [recruitData, setRecruitData] = useState();
  const [step, setStep] = useState(1); //todo: 페이지 별 값 설정

  const titles = ["개인정보 수집 동의", "기본 정보", "지원 정보"];
  const descriptions = [
    "프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다",
    "연락 가능한 정보를 입력해주세요",
    "지원하고자 하는 분야를 선택해주세요",
  ];
  return (
    <>
      <Container>
        <Header />
        <>{step < 4 && <ProgressStage step={step} />}</>
      </Container>
      <ContentContainer>
        <>
          {step < 4 && (
            <PageTitle title={titles[step]} description={descriptions[step]} />
          )}
        </>
        <>
          {step === 1 && (
            <PrivacyPolicy
              onNext={(data) => {
                setRecruitData((prev) => ({ ...prev, privacy: data }));
                setStep(2);
              }}
            />
          )}
        </>
        <>
          {step === 2 && (
            <PersonalInfo
              onNext={(data) => {
                setRecruitData((prev) => ({ ...prev, personal: data }));
                setStep(3);
              }}
            />
          )}
        </>
        <>
          {step === 3 && (
            <ApplicationInfo
              onNext={(data) => {
                setRecruitData((prev) => ({ ...prev, application: data }));
                setStep(4);
              }}
            />
          )}
        </>
        <>{step === 4 && <Complete />}</>
        {/*  //todo: 이 컴포넌트에서 tanstack query
        연결하기*/}
      </ContentContainer>
    </>
  );
}
