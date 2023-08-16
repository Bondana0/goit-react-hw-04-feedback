import styled from 'styled-components';

export const Button = styled.button`
   margin-right: 10px;
  padding: 10px 20px;
  background-color: rgb(142, 225, 207);
  border: 2px solid rgb(225, 142, 168);
  border-radius: 5px;
  cursor: pointer;

   &:hover,
  &:focus {
    background-color: rgb(225, 142, 168);
  color: white;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
