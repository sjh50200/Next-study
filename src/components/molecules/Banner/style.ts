import styled from 'styled-components';

export const Banner = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(211, 255, 179, 1) 0%,
    rgba(189, 255, 159, 1) 0%,
    rgba(0, 255, 199, 1) 100%
  );
  width: 100%;
  height: 30vmin;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextArea = styled.span`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.8rem;
  margin: 0 auto;
  width: fit-content;
  /* background-color: black; */
  color: black;
`;

export const Subtitle = styled.p`
  text-align: center;
  line-height: 1.5rem;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  margin: 0 auto;
  width: fit-content;
  /* background-color: black; */
  color: black;
`;
