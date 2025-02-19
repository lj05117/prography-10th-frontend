import styled from "styled-components";

const StyledInput = styled.input`
  margin: 16px 0;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border 0.3s ease;

  &::placeholder {
    color: #aaa;
    font-style: italic;
  }

  &:focus {
    border-color: #007bff;
  }
`;

export default function InputInfo({ placeholder, value }) {
  return <StyledInput type="text" placeholder={placeholder} value={value} />;
}
