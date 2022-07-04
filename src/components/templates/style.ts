import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 30vw;
  max-height: 480px;
  min-height: 200px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const ContentGrid = styled.div`
  margin-top: 60px;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;
