import RadioButtonComponent from "../../components/RadioButtonComponent.tsx";
import ContentContainer from "../../components/ContentContainer.tsx";
import { useRecoilState } from "recoil";
import { recruitState } from "../../stores/ButtonState.ts";
export default function ApplicationInfo() {
  const [recruit, setRecruit] = useRecoilState(recruitState);

  const handleSelect = (id: number) => {
    setRecruit((prev) => ({ ...prev, application: id }));
  };
  return (
    <ContentContainer title={"지원 분야를 선택해주세요"}>
      <RadioButtonComponent
        id={1}
        name={"application"}
        label="프론트엔드"
        onSelect={handleSelect}
        selected={recruit.application === 1}
      ></RadioButtonComponent>
      <RadioButtonComponent
        id={2}
        name={"application"}
        label="백엔드"
        onSelect={handleSelect}
        selected={recruit.application === 2}
      ></RadioButtonComponent>
      <RadioButtonComponent
        id={3}
        name={"application"}
        label="디자인"
        onSelect={handleSelect}
        selected={recruit.application === 3}
      ></RadioButtonComponent>
      <RadioButtonComponent
        id={4}
        name={"application"}
        label="iOS"
        onSelect={handleSelect}
        selected={recruit.application === 4}
      ></RadioButtonComponent>
      <RadioButtonComponent
        id={5}
        name={"application"}
        label="안드로이드"
        onSelect={handleSelect}
        selected={recruit.application === 5}
      ></RadioButtonComponent>
      <RadioButtonComponent
        id={6}
        name={"application"}
        label="Product Owner"
        onSelect={handleSelect}
        selected={recruit.application === 6}
      ></RadioButtonComponent>
    </ContentContainer>
  );
}
