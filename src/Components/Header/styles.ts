import styled, { keyframes } from 'styled-components';
import { breakpoints, colors } from '../../styles';

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

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: radial-gradient(
    circle at top left,
    ${colors.blue} 5%,
    ${colors.dark} 35%
  );
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (${breakpoints.celular}) {
    flex-direction: column;
    justify-content: center;
  }

  @media (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60vh;
    width: 100%;
  }
`;

export const Title = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  margin-left: 100px;
  text-align: left;
  height: 100%;

  @media (${breakpoints.celular}) {
    text-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-left: 0;
  }

  @media (${breakpoints.tablet}) {
    text-align: center;
    align-items: center;
    padding-top: 20px;
  }
`;

export const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-left: 50px;
  animation: ${fadeIn} 2s ease-in-out;

  h1 {
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 10px;
    color: ${colors.white};
    background-color: ${colors.pink};
    border-radius: 10px;
    padding: 10px;
    animation: ${fadeIn} 2.5s ease-in-out;

    @media (${breakpoints.celular}) {
      font-size: 24px;
      padding: 8px;
      text-align: center;
    }

    @media (${breakpoints.tablet}) {
      font-size: 25px;
    }
  }

  h2 {
    font-size: 25px;
    padding-bottom: 10px;
    color: ${colors.pink};
    animation: ${fadeIn} 3s ease-in-out;

    @media (${breakpoints.celular}) {
      font-size: 20px;
      text-align: center;
    }

    @media (${breakpoints.tablet}) {
      text-align: center;
      align-items: center;
      padding-top: 10px;
      font-size: 23px;
    }
  }

  p {
    font-size: 18px;
    padding-bottom: 10px;
    color: ${colors.white};
    background-color: ${colors.blueOpacity};
    border-radius: 20px;
    padding: 10px;
    max-width: 600px;
    animation: ${fadeIn} 3.5s ease-in-out;

    @media (${breakpoints.celular}) {
      font-size: 16px;
      max-width: 90%;
      text-align: center;
      align-items: center;
    }

    @media (${breakpoints.tablet}) {
      font-size: 17px;
      max-width: 400px;
    }
  }

  @media (${breakpoints.celular}) {
    text-align: center;
    align-items: center;
    margin-left: 0;
  }
`;

export const VideoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-width: 100%;
  position: relative;

  @media (${breakpoints.celular}) {
    align-items: center;
  }

  @media (${breakpoints.tablet}) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 80vh;
    overflow: hidden;
    max-width: 100%;
    position: relative;
  }
`;
