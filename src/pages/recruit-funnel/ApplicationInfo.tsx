import RecruitFunnel from "./RecruitFunnel.tsx";
import Header from "../../components/Header.tsx";
import ProgressStage from "../../components/ProgressStage.tsx";
import RadioButtonComponent from "../../components/RadioButtonComponent.tsx";
export default function ApplicationInfo() {
  return (
    <>
      <RadioButtonComponent
        id={1}
        name={"application"}
        label="프론트엔드"
      ></RadioButtonComponent>
      <RadioButtonComponent
        id={2}
        name={"application"}
        label="백엔드"
      ></RadioButtonComponent>
      <RadioButtonComponent
        id={3}
        name={"application"}
        label="디자인"
      ></RadioButtonComponent>
      <RadioButtonComponent
        id={4}
        name={"application"}
        label="iOS"
      ></RadioButtonComponent>
      <RadioButtonComponent
        id={5}
        name={"application"}
        label="안드로이드"
      ></RadioButtonComponent>
      <RadioButtonComponent
        id={6}
        name={"application"}
        label="Product Owner"
      ></RadioButtonComponent>
    </>
  );
}
