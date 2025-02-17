import RadioButtonComponent from "../../components/RadioButtonComponent.tsx";

export default function PrivacyPolicy() {
  return (
    <div>
      <RadioButtonComponent
        id={1}
        label="개인정보 수집 여부에 동의합니다"
      ></RadioButtonComponent>
      <RadioButtonComponent
        id={2}
        label="개인정보 수집 여부에 동의하지 않습니다"
      ></RadioButtonComponent>
      <div>klsjdlkj</div>
    </div>
  );
}
