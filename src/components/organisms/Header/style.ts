import Hamburger from 'src/components/organisms/Hamburger';
import LinkedEl from 'src/components/molecules/LinkedEl';
import styled, { css } from 'styled-components';
import NavMenu from '../NavMenu';

export const NavBar = styled.div<{ name: string }>`
  display: flex;
  flex-direction: row;
  background-color: #00b0ff;
  align-items: center;
  width: 100%;
  color: white;
  height: 67px;
  justify-content: center;
  ${(props) =>
    props.name === 'on-off' &&
    css`
      @media ${({ theme }) => theme.device.tablet} {
        .sns {
          display: none;
        }
      }
    `};
`;

export const MenuIcon = styled(Hamburger)`
  display: none;
  z-index: 2;
  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;

export const Slider = styled(NavMenu)`
  z-index: 1;
  /* @media ${({ theme }) => theme.device.tablet} { */
  /* display: block; */
  /* } */
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
