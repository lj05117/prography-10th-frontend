import RadioButtonComponent from "../../components/RadioButtonComponent.tsx";
import ContentContainer from "../../components/ContentContainer.tsx";
import { useRecoilState } from "recoil";
import { recruitState } from "../../stores/ButtonState.ts";

export default function PrivacyPolicy() {
  const [recruit, setRecruit] = useRecoilState(recruitState);
  const handleSelect = (id: number) => {
    setRecruit((prev) => ({ ...prev, privacy: id }));
  };
  return (
    <>
      <ContentContainer
        title={`수집 목적 : Prography 10기 리쿠르팅 과정 및 결과 안내
        수집 항목 : 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보
        보유 및 이용 기간 : 리쿠르팅 과정 종료일(3월 7일) 이후 파기 
        
        개인정보 수집 여부 동의 여부를 체크해주세요.`}
      >
        <RadioButtonComponent
          id={1}
          name="privacyPolicy"
          label="개인정보 수집 여부에 동의합니다"
          onSelect={handleSelect}
          selected={recruit.privacy === 1}
        />

        <RadioButtonComponent
          id={2}
          name="privacyPolicy"
          label="개인정보 수집 여부에 동의하지 않습니다"
          onSelect={handleSelect}
          selected={recruit.privacy === 2}
        />
      </ContentContainer>
    </>
  );
}
