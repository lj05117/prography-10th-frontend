import logoImage from "../assets/Logo.png";
import styled from "styled-components";
import Button from "../styles/button.ts";
import { useNavigate } from "react-router-dom";
import { StyledText } from "../styles/string.ts";

const LogoComponent = styled.img`
  width: auto;
  height: auto;
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <LogoComponent src={logoImage} />
      <StyledText size={"large"}>
        안녕하세요. 새로운 가치를 만들어가는 IT커뮤니티, Prography 입니다.
      </StyledText>
      <StyledText size={"medium"} color={"blue"}>드디어 Prography 10기 모집이 시작되었습니다.</StyledText>
      <StyledText>
        Product Owner / Design / iOS / AOS / Frontend(React) / Backend(Spring)
        <br/>총 6개의 파트를 모집합니다.
      </StyledText>
      <StyledText>새로운 가치를 만들어내는데 가슴이 두근거리신다면,</StyledText>
      <StyledText>열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,</StyledText>
      <StyledText>탁원한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,</StyledText>
      <StyledText size={"large"} color={"blue"}>"프로답게, 재미있게"</StyledText>
      <StyledText>재밌있는 작당을 함께 만들어갈 10기에 합류하세요.</StyledText>
      <StyledText>자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요</StyledText>
      <StyledText hoverEffect color={"blue"} onClick={()=>window.location.href = "https://prography.org/about"}>프로그라피 10기 모집 자세히 알아보기</StyledText>
      <StyledText hoverEffect color={"blue"} onClick={()=>window.location.href = "https://prography.org/"}>공식 홈페이지</StyledText>
      <StyledText hoverEffect color={"blue"} onClick={()=>window.location.href = "https://www.instagram.com/prography_official/"}> 인스타그램</StyledText>
      <Button
        variant={"primary"}
        size="large"
        onClick={() => navigate("/recruit-funnel")}
      >
        지원하기
      </Button>
    </>
  );
}
