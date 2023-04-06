import styled, { css } from 'styled-components';

export const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  border: 1px solid black;
  cursor: pointer;
  .bar {
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;
  }
`;
