import styled, { keyframes } from 'styled-components';
import { breakpoints, colors } from '../../../styles';

interface CardHabProps {
  index: number;
  row: number;
  visible: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContainerHab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  position: relative;
  background: radial-gradient(
    circle at bottom left,
    ${colors.pink} 5%,
    ${colors.dark} 40%
  );

  @media (${breakpoints.celular}) {
    height: auto;
    height: 90vh;
    width: 100%;
  }

  @media (${breakpoints.tablet}) {
    height: 70vh;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${colors.pink};
  margin-bottom: 60px;
  width: 1000px;
  text-align: left;

  @media (${breakpoints.celular}) {
    font-size: 24px;
    width: 100%;
    text-align: center;
  }

  @media (${breakpoints.tablet}) {
    font-size: 28px;
    width: 90%;
    bottom: 50px;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  margin-bottom: 20px;

  @media (${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (${breakpoints.celular}) {
    justify-content: center;
  }
`;

export const CardHab = styled.div<CardHabProps>`
  width: 180px;
  height: 150px;
  background-color: ${colors.white};
  margin: 10px;
  bottom: 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: ${({ visible }) => (visible ? fadeIn : 'none')} 0.5s ease forwards;
  animation-delay: ${({ index, row }) => `${row * 0.5 + (index % 5) * 0.2}s`};

  img {
    width: 90px;
    height: 90px;
    margin-bottom: 10px;
    margin-top: 20px;

    @media (${breakpoints.celular}) {
      width: 45px;
      height: 45px;
      opacity: 0;
      animation: ${({ visible }) => (visible ? fadeIn : 'none')} 0.5s ease forwards;
      animation-delay: ${({ index, row }) => `${row * 0.5 + (index % 5) * 0.2}s`};
    }

    @media (${breakpoints.tablet}) {
      width: 60px;
      height: 60x;
      opacity: 0;
      animation: ${({ visible }) => (visible ? fadeIn : 'none')} 0.5s ease forwards;
      animation-delay: ${({ index, row }) => `${row * 0.5 + (index % 5) * 0.2}s`};
    }
  }

  h2 {
    font-size: 20px;
    color: ${colors.pink};
    position: absolute;
    top: 10px;
    left: 15px;
    text-align: left;

    @media (${breakpoints.celular}) {
      font-size: 14px;
    }

    @media (${breakpoints.tablet}) {
      font-size: 20px;
    }
  }

  @media (${breakpoints.celular}) {
    width: 95px;
    height: 95px;
    margin: 8px;
  }

  @media (${breakpoints.tablet}) {
    width: 160px;
    height: 130px;
  }
`;
