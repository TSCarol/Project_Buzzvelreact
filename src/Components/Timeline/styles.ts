import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import { events } from './Event/data';

interface TimelineDetailsProps {
    align: 'top' | 'bottom';  
  }

interface TimelineYearProps {
    position: 'top' | 'bottom';
    index: number;
}

export const ContainerTime = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 130vh;
    width: 100%;
    position: relative;
    background: radial-gradient(
        circle at bottom right,
        ${colors.blue} 5%,
        ${colors.dark} 35%
    );

    @media (${breakpoints.tablet}) {
        height: 85vh;
    }

    @media (${breakpoints.celular}) {
      width: 100%;
      height: auto;
      align-items: center;
    }
`;

export const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1200px; 
  padding: 20px;    
`

export const Title = styled.h1`
    font-size: 30px;
    color: ${colors.pink};
    margin-top: 70px;
    margin-bottom: 30px;
    width: 1000px;
    text-align: left;

    @media (${breakpoints.tablet}) {
        font-size: 25px;
        width: 80%;
        text-align: center;
    }

    @media (${breakpoints.celular}) {
        font-size: 30px;
        width: 100%;
        text-align: center;
        margin-top: 30px;
    }
`

export const TimeContainer = styled.div`
    background-color: ${colors.white};
    width: 100%;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid ${colors.pink};
    border-radius: 30px;
    margin-top: 30px;

    @media (${breakpoints.celular}) {
      width: 100%;
      min-height: 600px;
      margin-top: 20px;
    }

    @media (${breakpoints.tablet}) {
      width: 600px;
      min-height: 600px;
      margin-top: 20px;
    }
`;

export const TimelineUl = styled.ul`
  background-color: ${colors.dark};
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row; 
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  height: 10px;
  max-width: 100%;

  @media (${breakpoints.celular}) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 10px;
    height: 450px;
  }

  @media (${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 10px;
    height: 450px;
  }
`

export const TimelineItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
  z-index: 0;

  @media (${breakpoints.celular}) {
    flex-direction: column-reverse;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 0;
  }

  @media (${breakpoints.celular}) {
    flex-direction: column-reverse;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 0;
  }
`

export const TimelineBall = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${colors.dark};
  border: 5px solid ${colors.pink}; 
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  @media (${breakpoints.celular}) {
    top: 2px;
    position: relative;
    left: auto;
    transform: none;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media (${breakpoints.tablet}) {
    top: 2px;
    position: relative;
    left: auto;
    transform: none;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`

export const TimelineYear = styled.div<TimelineYearProps>`
  position: absolute;
  font-size: 23px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${colors.pink};
  border-radius: 10px;
  text-align: ${({ position }) => position === 'top' ? 'bottom' : 'top'};
  width: 120px;
  padding: 2px;
  margin-right: 5px;
  z-index: 5; 

  ${({ position }) => position === 'top' ? `
    top: -30px;
  ` : `
    top: 50px;
  `}

  @media (${breakpoints.celular}) {
    font-size: 18px;
    width: 100px;
    z-index: 5; 

    ${({ index }) => {
      if (index === 0) {
        return 'right: 20px; top: 35px;';
      } else if (index === events.length - 1) {
        return 'right: 20px; top: 35px ; bottom: auto'; 
      } else {
        return 'left: 25px; top: 45px ';
      }
    }}
  }

  @media (${breakpoints.tablet}) {
    font-size: 20px;
    width: 105px;
    z-index: 5; 

    ${({ index }) => {
      if (index === 0) {
        return 'right: 20px; top: 35px;';
      } else if (index === events.length - 1) {
        return 'right: 20px; top: 35px ; bottom: auto'; 
      } else {
        return 'left: 25px; top: 45px ';
      }
    }}
  }
`;

export const TimelineDetails = styled.div<TimelineDetailsProps>`
    display: none;
    background-color: ${colors.white};
    color: ${colors.dark};
    padding: 10px;
    border-radius: 5px;
    border: 3px solid ${colors.pink};
    text-align: left;
    position: absolute;
    top: 60px;
    width: 550px;
    z-index: 10 !important;

    ${({ align }) => align === 'top' ? `
    top: -300px;
    ` : `
    top: 100px;
    `}

    @media (${breakpoints.celular}) {
        width: 300px;
        left: 50%;
        transform: translateX(-50%);
        height: auto;
        z-index: 20 !important;
        top: ${({ align }) => align === 'top' ? '-250px' : '-200px'}; 
    }

    @media (${breakpoints.tablet}) {
        width: 300px;
        left: 50%;
        transform: translateX(-50%);
        height: auto;
        z-index: 20 !important;
        top: ${({ align }) => align === 'top' ? '-250px' : '-200px'}; 
    }

    p {
        font-size: 16px;
        margin-bottom: 5px;
    }

    &:hover {
        display: block;
    }
`;

export const BackButton = styled.a`
  position: absolute;
  bottom: 100px;
  right: 100px;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (${breakpoints.celular}) {
    padding-bottom: 20px;
    bottom: 5px;
    right: 30px;;
    cursor: pointer;

    img {
      width: 40px;
      height: 40px;
      transition: transform 0.3s;
    }

    @media (${breakpoints.tablet}) {
    padding-bottom: 20px;
    right: 30px;;
    cursor: pointer;

    img {
      width: 40px;
      height: 40px;
      transition: transform 0.3s;
    }
`;