import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 30px;
`;
export const Form = styled.form`
  padding: 20px;
  width: 320px;
`;

export const Title = styled.h2`
  font-size: 24px;
`;
export const Input = styled.input`
  padding: 10px 20px;
  display: block;
  margin: 10px;
  border: 1px solid #e6e6fa;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
  &:focus {
    border: 1px solid #b4a8ff;
    background-color: #ededff;
  }
`;
export const Label = styled.label`
  display: block;
  margin: 0 10px;
  font-size: 20px;
  font-weight: 500;
`;
export const List = styled.ul``;
export const Button = styled.button`
  padding: 10px 25px;
  border-radius: 15px;
  font-size: 18px;
  cursor: pointer;
  color: #ffffff;
  background-color: #533af1;
  border: 1px solid transparent;
  transition: background-color 150ms linear 0s, color 150ms linear 0s,
    transform 150ms linear 0s;
  &:hover {
    background-color: #3625a5;
    transform: translateY(2px);
  }
  &:disabled {
    background-color: #ccc;
  }
`;
