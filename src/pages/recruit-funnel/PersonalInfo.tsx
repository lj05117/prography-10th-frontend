import InputInfo from "../../components/InputInfo.tsx";
import ContentContainer from "../../components/ContentContainer.tsx";
import { useRecoilState } from "recoil";
import { recruitState } from "../../stores/ButtonState.ts";

export default function PersonalInfo({ name, email, phone }) {
  const [recruit, setRecruit] = useRecoilState(recruitState);

  const handleChange = (field, value) => {
    setRecruit((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  };
  return (
    <>
      <ContentContainer title={"성함을 입력해주세요"}>
        <InputInfo
          id="name"
          placeholder={"예시 : 홍길동"}
          value={recruit.personal.name}
          onChange={handleChange}
        />
      </ContentContainer>
      <ContentContainer title={"이메일 주소를 입력해주세요"}>
        <InputInfo
          id="email"
          placeholder={"예시 : prography@gmail.com"}
          value={recruit.personal.email}
          onChange={handleChange}
        />
      </ContentContainer>
      <ContentContainer title={"휴대폰 번호를 입력해주세요"}>
        <InputInfo
          id="phone"
          placeholder={"예시 : 010-1234-5678"}
          value={recruit.personal.phone}
          onChange={handleChange}
          type={"phone"}
        />
      </ContentContainer>
    </>
  );
}
