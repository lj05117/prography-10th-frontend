import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary"; // 배경색 설정
  size?: "small" | "large" | "wide"; // 버튼 크기 설정
}

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`

export const Button = styled.button<ButtonProps>`
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;

  /* 배경색 설정 */
  background-color: ${({ variant }) =>
    variant === "primary" ? "#007bff" : "#ccc"};
  color: ${({ variant }) => (variant === "primary" ? "white" : "#333")};

  /* 크기 설정 */
  height: ${({ size }) =>
    size === "small" ? "32px" : size === "large" ? "48px" : "32px"};
  width: ${({ size }) =>
    size === "small" ? "100px" : size === "large" ? "200px" : "200px"};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary" ? "#0056b3" : "#aaa"};
  }
`;
