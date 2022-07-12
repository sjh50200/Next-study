import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  word-break: break-word;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 0.8rem;
`;

export const Category = styled.div`
  color: #00b0ff;
  font-size: 0.5rem;
`;

export const Title = styled.h2`
  word-break: keep-all;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0 0 9.6px;
`;

export const Excerpt = styled.p`
  color: #60757e;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0 0 16px;
  /* font-size: rem; */
`;
