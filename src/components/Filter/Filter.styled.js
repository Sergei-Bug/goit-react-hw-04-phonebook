import styled from '@emotion/styled';

export const Input = styled.input`
  padding: 10px 25px;
  border-radius: 10px;
  border: 1px solid #e6e6fa;
  font-size: 20px;
  box-shadow: 9px 9px 10px 0px rgba(0, 0, 0, 0.2);
  transition: background-color 150ms linear 0s, border 150ms linear 0s;
  &:focus {
    border: 1px solid #b4a8ff;
    background-color: #ededff;
  }
`;
