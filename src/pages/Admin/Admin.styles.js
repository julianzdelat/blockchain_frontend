import styled from 'styled-components';

export const Container = styled.section`
  width: 80%;
`;

export const Button = styled.button`
  margin-top: 15px;
  border: 2px solid #00bfff;
  float: right;
  cursor: pointer;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
  font-size: 0.9rem;
  transition-duration: 0.3s;

  &:hover {
    font-size: 1rem;
    background-color: #00bfff;
    border-color: black;
  }
`;

export const Title = styled.h1`
  float: left;
`;
