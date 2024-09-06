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

export const BuzzContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150vh;
    width: 100%;
    background: radial-gradient(
        circle at top left,
        ${colors.pink} 4%,
        ${colors.dark} 35%
    );

  @media (${breakpoints.celular}) {
    height: auto;
    padding: 10px;
  }

  @media (${breakpoints.tablet}) {
    height: auto;
    padding: 20px;
  }
`;

export const TextCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 1000px;
    height: 400px;
    background-color: ${colors.white};
    color: ${colors.blue};
    border-radius: 10px;
    transition: opacity 0.5s ease-in-out;
    animation: ${fadeIn} 2s ease-in-out;

    h1 {
        font-size: 30px;
        margin-bottom: 30px;
        text-align: center;
        margin-top: 70px;
        color: ${colors.white};
        background-color: ${colors.pink};
        border-radius: 5px;
        animation: ${fadeIn} 2.5s ease-in-out;
    }

    p {
        font-size: 20px;
        margin: 0 70px;
        text-align: justify;
        color: ${colors.dark};
        opacity: 0.5;
        animation: ${fadeIn} 3s ease-in-out;
    }

     &.fade-in p {
        opacity: 1; 
    }

    &.fade-out {
        opacity: 0.3; 
    }

  @media (${breakpoints.celular}) {
    width: 90%;
    padding: 10px;

    h1 {
      font-size: 24px;
      margin-top: 10px;
    }
    p {
      font-size: 16px;
      text-align: justify;
      margin: 5px;
    }
  }

  @media (${breakpoints.tablet}) {
    width: 80%;
    h1 {
      font-size: 25px;
      margin-top: 50px;
    }
    p {
      font-size: 18px;
    }
  }

`

export const ProjectCard = styled.div<{ isSelected: boolean }>`
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    color: ${colors.dark};
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    width: ${(props) => (props.isSelected ? "350px" : "320px")};
    height: ${(props) => (props.isSelected ? "550px" : "510px")};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease; 

  @media (${breakpoints.celular}) {
    width: 90%;
    height: auto;
    flex-shrink: 0;
    scroll-snap-align: start;
  }

  @media (${breakpoints.tablet}) {
    flex: 0 0 calc(50% - 20px); 
    width: ${(props) => (props.isSelected ? "350px" : "320px")};
    height: ${(props) => (props.isSelected ? "650px" : "550px")};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px; 
`;

export const CardTitle = styled.h2`
  font-size: 25px;
  color: ${colors.pink};
  text-align: left;
  margin-top: 10px;

  @media (${breakpoints.celular}) {
    font-size: 20px;
  }

  @media (${breakpoints.tablet}) {
    font-size: 20px;
  }
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: ${colors.dark};
  text-align: left;
  margin-top: 10px;

  @media (${breakpoints.celular}) {
    font-size: 14px;
  }

  @media (${breakpoints.celular}) {
    font-size: 16px;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  
  @media (${breakpoints.celular}) {
    max-width: 100%;
    flex-wrap: nowrap; 
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    width: 80%;
    height: auto;
  }

  @media (${breakpoints.tablet}) {
    width: 80%;
    height: auto;
    overflow-x: hidden;
    scroll-snap-type: x mandatory; 
    scroll-behavior: smooth;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${colors.pink}; 
  margin-top: 90px;
  margin-bottom: 35px;
  width: 1000px;
  text-align: left;

  @media (${breakpoints.celular}) {
    font-size: 25px;
    width: 100%;
    text-align: center;
    margin-top: 80px;
  }

  @media (${breakpoints.tablet}) {
    font-size: 28px;
    width: 80%;
    text-align: center;
    margin-top: 80px;
  }
`;

export const ArrowButton = styled.button`
  background-color: ${colors.pink};
  color: ${colors.white};
  border: none;
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: ${colors.yellow};
    color: ${colors.pink};
  }

  @media (${breakpoints.celular}) {
    font-size: 20px;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (${breakpoints.celular}) {
    top: 10px;
  }
`;