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

export default function InputInfo({ id, placeholder, value, onChange }) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("이 필드는 필수 입력값입니다.");
  const handleBlur = () => {
    if (!value.trim()) {
      setHasError(true);
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (id === "phone") {
      inputValue = setPhoneFormat(inputValue.replace(/[^0-9]/g, ""));
      onChange(id, inputValue);
    } else {
      onChange(id, inputValue);

      if (id === "email") {
        setHasError(!validateEmail(inputValue)); // 이메일 검증 후 에러 상태 업데이트
        if(!validateEmail(inputValue)) setErrorMessage("올바른 이메일 형식을 입력해주세요.")
      }
    }
  };

  const setPhoneFormat = (input) => {
    return input.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]{3,4})([0-9]{4})/, "$1-$2-$3");
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
      <ErrorMessage show={hasError}>{errorMessage}</ErrorMessage>
    </>
  );
}
