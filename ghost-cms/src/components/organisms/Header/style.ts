import Hamburger from 'src/components/organisms/Hamburger';
import LinkedEl from 'src/components/molecules/LinkedEl';
import styled, { css, keyframes } from 'styled-components';
import NavMenu from 'src/components/molecules/NavMenu';

const slidein = keyframes`
  from {
      width: 0px;
  }
  to {
    width: 300px;
  }
`;

const menuIconSlide = keyframes`
  from {
    margin-right: 0px;
  }
  to {
    margin-right: 140px;
  }
`;

export const NavBar = styled.div<{ name: string }>`
  display: flex;
  flex-direction: row;
  background-color: black;
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
  position: static;
  @media ${({ theme }) => theme.device.tablet} {
    display: block;
    ${(props) =>
      props.isOpen &&
      css`
        margin-right: 140px;
        animation-duration: 0.5s;
        animation-name: ${menuIconSlide};
        border: 1px solid green;
        width: 35px;
        .bar1 {
          -webkit-transform: rotate(-45deg) translate(-9px, 6px);
          transform: rotate(-45deg) translate(-9px, 6px);
        }
        .bar2 {
          opacity: 0;
        }
        .bar3 {
          -webkit-transform: rotate(45deg) translate(-8px, -8px);
          transform: rotate(45deg) translate(-8px, -8px);
        }
      `}
  }
`;

export const Slider = styled(NavMenu)`
  opacity: 0.7;
  animation-duration: 0.5s;
  animation-name: ${slidein};

  display: none;
  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
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
