import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 365px;
  width: 100%;
`;

export const Image = styled.img`
  border: 1px solid black;
  width: 100%;
  max-width: 360px;
  min-width: 275px;
  height: 200px;
`;

export const Category = styled.div`
  color: #00b0ff;
  font-size: 0.5rem;
`;

export const Title = styled.h2`
  word-break: keep-all;
`;
