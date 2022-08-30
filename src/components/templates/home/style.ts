import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentGrid = styled.div`
  /* border: 1px solid black;
  margin-top: 60px;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  gap: 10%; */
  margin-top: 3rem;
  display: grid;
  grid-gap: 4vmin;
  width: 100%;
  max-width: 1200px;
  padding: 4vmin;
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
