import RadioButtonComponent from "../../components/RadioButtonComponent.tsx";
import RecruitFunnel from "./RecruitFunnel.tsx";
import Header from "../../components/Header.tsx";
import ProgressStage from "../../components/ProgressStage.tsx";
import styled from "styled-components";
import Button from "../../styles/button.ts";

export default function PrivacyPolicy() {
  return (
    <>
      <div>
        <div>수집 목적 : Prography 10기 리쿠르팅 과정 및 결과 안내</div>
        <div>수집 항목 : 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보</div>
        <div>보유 및 이용 기간 : 리쿠르팅 과정 종료일(3월 7일) 이후 파기</div>
      </div>
      <div>개인정보 수집 여부 동의 여부를 체크해주세요.</div>
      <RadioButtonComponent
        id={1}
        name={"privacyPolicy"}
        label="개인정보 수집 여부에 동의합니다"
      ></RadioButtonComponent>
      <RadioButtonComponent
        id={2}
        name={"privacyPolicy"}
        label="개인정보 수집 여부에 동의하지 않습니다"
      ></RadioButtonComponent>
    </>
  );
}
