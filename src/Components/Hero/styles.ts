import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const Title = styled.h1`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  font-weight: bold;
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.purpleOpacity};
  border-radius: 10px;
  padding: 10px;
  font-size: 30px;
  opacity: 0;
  transition: opacity 0.6s ease;
  margin-bottom: 30px;
  width: fit-content;

  @media (${breakpoints.celular}) {
    font-size: 20px;
    padding: 8px;
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  @media (${breakpoints.tablet}) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
  width: 100%;
  background: radial-gradient(
    circle at bottom right,
    ${colors.purple} 5%,
    ${colors.dark} 35%
  );
  position: relative;
  overflow: hidden;

  &:hover ${Title} {
    opacity: 1;
  }

  @media (${breakpoints.celular}) {
    flex-direction: column;
    height: auto;
    justify-content: center;
    height: 90vh;

    
    &:hover ${Title} {
      opacity: 1;
    }
  }

  @media (${breakpoints.tablet}) {
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height: 60hv;

    
    &:hover ${Title} {
      opacity: 1;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 110px;
  
  .img-wrapper {
    padding: 10px;
    border: 5px solid ${colors.purple};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.dark};
  }

  img {
    height: 450px;
    width: auto;
    max-width: 100%;
    display: block;
    border-radius: 10px;
  }

  @media (${breakpoints.celular}) {
    margin-left: 0;
    padding-top: 60px;
    img {
      height: 250px;
    }
  }

  @media (${breakpoints.tablet}) { 
    margin-left: 30px;
    img {
      height: 350px;
    }
  }
`;

export const StyledImage = styled.img`
  height: 80px;
  width: auto;
  margin: 50px;
  padding-left: 150px;
  opacity: 0;
  transition: opacity 0.6s ease;

  ${Container}:hover & {
    opacity: 1;
  }

  @media (${breakpoints.celular}) {
    height: 40px;
    padding-left: 110px;
    margin: 20px;
    opacity: 0;
    transition: opacity 0.6s ease;

    ${Container}:hover & {
      opacity: 1;
    }
  }

  @media (${breakpoints.tablet}) {
    height: 60px;
    padding-left: 50px;
  }
`;

export const StyledImage2 = styled.img`
  height: 80px;
  width: auto;
  margin-top: 10px;
  padding-right: 300px;
  opacity: 0;
  transition: opacity 0.6s ease;

  ${Container}:hover & {
    opacity: 1;
  }

  @media (${breakpoints.celular}) {
    height: 40px;
    padding-right: 152px;
    opacity: 0;
    transition: opacity 0.6s ease;

    ${Container}:hover & {
      opacity: 1;
    }
  }

  @media (${breakpoints.tablet}) {
    height: 60px;
    padding-right: 100px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  width: 800px;
  padding-right: 110px; 

  @media (${breakpoints.celular}) {
    width: 100%;
    padding-right: 0;
  }

  @media (${breakpoints.tablet}) {
    top: 10px;
    margin-left: 130px;
  }
`;