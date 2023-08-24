import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 20px;
  margin: 0 0 20px 0;
  padding: 0;
`;

export const Btn = styled.button`
  width: 81px;
  height: 30px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 400;
  line-height: 0.8;
  color: rgba(255, 255, 255, 1);

  background-color: #0151012e;
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 5px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: -2px -1px 24px 1px rgba(255, 255, 255, 1);
  }
`;
