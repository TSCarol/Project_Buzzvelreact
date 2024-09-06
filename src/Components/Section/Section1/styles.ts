import styled, { css, keyframes } from 'styled-components';
import { breakpoints, colors } from '../../../styles';

interface ArrowButtonProps {
  direction: 'prev' | 'next';
}

const slideInFromLeft = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0); 
        opacity: 1;
    }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
  width: 100%;
  background: radial-gradient(
    circle at top right,
    ${colors.purple} 2%,
    ${colors.dark} 35%
  );

  @media (${breakpoints.celular}) {
    flex-direction: column;
    justify-content: center;
    height: 90vh;
    width: 100%;
    height: 100vh;
    padding: 40px;
  }

  @media (${breakpoints.tablet}) {
    height: 60vh;
    padding: 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 500px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
  position: relative;

  opacity: 0;
  transform: translateX(-100%);
  transition:
    transform 0.5s ease-out,
    opacity 0.5s ease-out;

  &.visible {
    animation: ${slideInFromLeft} 0.5s forwards;
  }

  @media (${breakpoints.celular}) {
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 10px;
  }

  @media (${breakpoints.tablet}) {
    width: 720px;
    height: 530px;
    padding: 15px;
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (${breakpoints.celular}) {
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  padding: 40px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  background: radial-gradient(
    circle at top left,
    ${colors.blue} 20%,
    ${colors.dark} 70%
  );

  a {
    text-decoration: none;
    font-size: 30px;
    color: ${colors.white};
  }

  @media (${breakpoints.celular}) {
    width: 90%;
    height: 200px;
    a {
      font-size: 22px;
    }
  }

  @media (${breakpoints.tablet}) {
    width: 400px;
    height: 250px;
    a {
      font-size: 30px;
    }
  }
`;

export const MiniCard = styled.div<{
  isSelected: boolean;
  cardType: 'profissional' | 'academica';
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  text-align: center;
  background: radial-gradient(
    circle at top left,
    ${colors.purple} 5%,
    ${colors.dark} 35%
  );
  transition:
    transform 0.3s,
    opacity 0.3s;
  opacity: 0.3;
  transform: scale(1);

  ${({ isSelected }) =>
    isSelected &&
    css`
      opacity: 1;
      transform: scale(1.1);
      z-index: 1;
    `}

  ${({ cardType }) =>
    cardType === 'profissional' &&
    css`
      width: 200px;
      height: 400px;
    `}

    ${({ cardType }) =>
    cardType === 'academica' &&
    css`
      width: 270px;
      height: 250px;
    `}

    h2, h3, p {
    margin: 0;
    padding: 5px 0;
    color: #fff;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }

  @media (${breakpoints.tablet}) {
    ${({ cardType }) =>
      cardType === 'profissional' &&
      css`
        width: 240px;
        height: 400px;
      `}
    
    ${({ cardType }) =>
      cardType === 'academica' &&
      css`
        width: 380px;
        height: 250px;
      `}
    
    h2 {
      font-size: 19px;
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 15px;
    }
  }

  @media (${breakpoints.celular}) {
    width: 90%;
    height: auto;
    padding: 10px;

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const NavigationCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (${breakpoints.celular}) {
    flex-direction: column;
    margin: 0;
  }

  @media (${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const ArrowButton = styled.button<ArrowButtonProps>`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  margin: 0 5px;

  &:focus {
    outline: none;
  }

  &::before {
    content: '${(props) => (props.direction === 'prev' ? '←' : '→')}';
  }

  @media (${breakpoints.tablet}) {
    font-size: 1.5rem;
  }

  @media (${breakpoints.celular}) {
    margin: 5px 0;

    &::before {
      content: '${(props) => (props.direction === 'prev' ? '↑' : '↓')}';
    }
  }
`;
