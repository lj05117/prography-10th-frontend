import logoImage from "../assets/Logo.png";
import styled from "styled-components";
import Button from "../styles/button.ts";
import { useNavigate } from "react-router-dom";

const LogoComponent = styled.img`
  width: auto;
  height: auto;
`;

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <LogoComponent src={logoImage} />
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
