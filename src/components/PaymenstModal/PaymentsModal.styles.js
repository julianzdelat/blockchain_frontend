import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Strong = styled.strong`
  display: block;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0.4rem;
`;

export const Input = styled.input`
  color: black;
  font-size: 1.2rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  border: 1px solid gray;
  background-color: white;
`;
