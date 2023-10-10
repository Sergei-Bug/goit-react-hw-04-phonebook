import styled from '@emotion/styled';

export const Btn = styled.button`
  padding: 10px 30px;
  background-color: #533af1;
  border-radius: 15px;
  color: #ffffff;
  border: 1px solid transparent;
  transition: background-color 150ms linear 0s, transform 150ms linear 0s;

  &:hover {
    background-color: #3625a5;
    transform: translateY(2px);
  }
`;
