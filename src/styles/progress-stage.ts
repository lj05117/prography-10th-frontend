import styled from "styled-components";

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const StepCircle = styled.div<{ $active: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  color: ${({ $active }) => ($active ? "white" : "#999")};
  background-color: ${({ $active }) => ($active ? "#007bff" : "#ddd")};
  border: 2px solid ${({ $active }) => ($active ? "#007bff" : "#999")};
  transition:
    background-color 0.3s,
    border 0.3s;
`;

export const StepBar = styled.div<{ $active?: boolean }>`
  width: 50px;
  height: 5px;
  background-color: ${({ $active }) => ($active ? "#007bff" : "#ddd")};
  transition: background-color 0.3s;
`;
