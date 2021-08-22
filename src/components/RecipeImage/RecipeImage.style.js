import styled from "styled-components";

const Container = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 2px;
  background: linear-gradient(#e9e9e9, #e4e4e4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Initials = styled.div`
  font-size: 2.3rem;
  color: #7a746c;
`;

export { Container, Image, Initials };
