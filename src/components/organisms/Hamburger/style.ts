import styled, { css } from 'styled-components';
import NavMenu from '../NavMenu';

export const Container = styled.div<{ isOpen: boolean }>`
  display: inline-block;
  cursor: pointer;
  .bar {
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;
  }
  ${(props) =>
    props.isOpen &&
    css`
      .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
        margin-right: 100px;
      }
      .bar2 {
        opacity: 0;
      }
      .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
      }
    `}
`;

export const Slider = styled(NavMenu)`
  animation-duration: 0.5s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      width: 0px;
    }
    to {
      width: 300px;
    }
  }
`;
