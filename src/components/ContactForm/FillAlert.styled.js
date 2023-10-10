import styled from '@emotion/styled';

export const Fill = styled.h2`
  color: #048dff;
  font-size: 14px;
`;
export const ButtonClose = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  color: #ffffff;
  background-color: #533af1;
  border: 1px solid transparent;
  transition: background-color 150ms linear 0s, transform 150ms linear 0s;
  &:hover {
    background-color: #3625a5;
    transform: translateY(1px);
  }
`;
