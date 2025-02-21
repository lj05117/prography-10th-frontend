import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin: 16px 0;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
  border-radius: 8px;
  outline: none;
  transition: border 0.3s ease;

  &::placeholder {
    color: #aaa;
    font-style: italic;
  }

  &:focus {
    border-color: ${(props) => (props.hasError ? "red" : "#007bff")};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

export default function InputInfo({ id, placeholder, value, onChange, type }) {
  const [hasError, setHasError] = useState(false);
  const handleBlur = () => {
    if (!value.trim()) {
      setHasError(true);
    }
  };
  const handleChange = (e) => {
    if (type === "phone") {
      value = setPhoneFormat(e.target.value.replace(/[^0-9]/g, ''));
      onChange(id, value);
    }
    else{
      onChange(id, e.target.value);
    }
    setHasError(false);
  };

  const setPhoneFormat = (input) => {
    return input.replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/, "$1-$2-$3");
  };



  return (
    <>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={hasError}
      />
      <ErrorMessage show={hasError}>이 필드는 필수 입력값입니다.</ErrorMessage>
    </>
  );
}
