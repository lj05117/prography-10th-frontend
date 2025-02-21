import styled from "styled-components";
import {HeaderComponent, StyledText} from "../styles/string.ts";

export const ThinLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: blue;
`;

export default function PageTitle({ title, description }) {
  return (
    <>
      <HeaderComponent>{title}</HeaderComponent>
      <ThinLine/>
      <StyledText>{description}</StyledText>
    </>
  );
}