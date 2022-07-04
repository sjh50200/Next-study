import LinkedEl from 'src/components/molecules/LinkedEl';
import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
  background-color: #00b0ff;
  align-items: center;
  width: 100%;
  color: white;
  height: 67px;
  justify-content: center;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const Link = styled(LinkedEl)`
  font-size: 1rem;
`;

export const Utils = styled.div`
  width: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
