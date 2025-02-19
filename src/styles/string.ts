import styled from "styled-components";

const textSize = {
  large: "24px",
  medium: "18px",
  small: "14px",
};

const textColor = {
  blue: "#007bff",
  black: "#000",
};

// ✅ StyledText 컴포넌트 생성
export const StyledText = styled.div`
  font-size: ${(props) => textSize[props.size] || textSize["small"]}; /* 기본 크기 16px */
  color: ${(props) => textColor[props.color] || textColor["black"]}; /* 기본 색상 검정 */
  font-weight: ${(props) => (props.size === "large" ? "bold" : "normal")}; /* 헤더는 bold */
  white-space: pre-line;
    margin: 16px 0;
`;
