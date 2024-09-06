import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 100%;
  position: relative;
  background: radial-gradient(
    circle at top right,
    ${colors.purple} 5%,
    ${colors.dark} 38%
  );

  @media (${breakpoints.celular}) {
    flex-direction: column;
    height: auto;
    padding: 20px 0;
    background: radial-gradient(
    circle at top right,
    ${colors.purple} 5%,
    ${colors.dark} 68%
  );

   @media (${breakpoints.tablet}) {
    flex-direction: row;
    height: 12vh;
    padding: 1px 0;
  );
  }
`;

export const Link = styled.a`
  color: ${colors.pink};
  text-decoration: none;
  margin: 0 25px;
  font-size: 25px;
  font-weight: bold;
  transition:
    transform 0.3s,
    color 0.3s;

  &:hover {
    transform: scale(1.1);
    color: ${colors.yellow};
  }

  @media (${breakpoints.celular}) {
    font-size: 20px;
    margin: 10px 0;
    transition:
      transform 0.3s,
      color 0.3s;

    &:hover {
      transform: scale(1.1);
      color: ${colors.yellow};
    }
  }

  @media (${breakpoints.tablet}) {
    font-size: 22px;
    margin: 0 15px;
  }
`;
