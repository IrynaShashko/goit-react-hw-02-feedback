import styled from '@emotion/styled';

export const ContainerFeedback = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const Header = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #010000;
`;
export const H2 = styled.h2`
  font-size: 20px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonTag = styled.button`
  width: 100px;
  padding: 5px;
  margin: 5px;
  box-shadow: 0px 2px 5px 4px rgba(0, 0, 0, 0.75);
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    scale: 1.2;
  }
`;
