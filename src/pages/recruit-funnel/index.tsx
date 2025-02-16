import PrivacyPolicy from "./PrivacyPolicy.tsx";
import PersonalInfo from "./PersonalInfo.tsx";
import ApplicationInfo from "./ApplicationInfo.tsx";
import Complete from "./Complete.tsx";

export default function RecruitFunnel() {
  return (
    <>
      <PrivacyPolicy />
      <PersonalInfo />
      <ApplicationInfo />
      <Complete />
    </>
  );
}
