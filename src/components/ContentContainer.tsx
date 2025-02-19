import styled from "styled-components";

const Container = styled.div`
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: start;
  white-space: pre-line;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function ContentContainer({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
}
