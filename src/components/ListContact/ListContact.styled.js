import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Item = styled.li`
  width: 500px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;
export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  color: #ffffff;
  background-color: #533af1;
  border: 1px solid transparent;
  transition: background-color 150ms linear, transform 150ms linear;
  &:hover {
    background-color: #3625a5;
    transform: translateY(2px);
  }
`;
