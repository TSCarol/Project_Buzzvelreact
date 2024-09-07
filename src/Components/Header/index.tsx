import React from 'react';
import VideoPlayer from '../Video';
import { Container, Title, TitleText, VideoContainer } from './styles';
import videoFile from '../../Assets/video/Details.mp4';

const Header = () => (
  <Container id="introduction">
    <Title>
      <TitleText>
        <h1>Thaís Carolina</h1>
        <h2>Desenvolvedora Front-end</h2>
        <p>
          Olá! Sou Thaís, formada em Arquitetura e Urbanismo e atualmente em
          transição para a área de desenvolvimento Frontend. Desde jovem, sempre
          fui apaixonada por tecnologia e criatividade, e agora estou unindo
          esses dois mundos ao criar interfaces digitais. Ao longo da minha
          trajetória, sempre busquei desafios que estimulassem minha
          criatividade. Hoje, estou imersa no mundo do Frontend, onde cada
          projeto que realizo reforça minha paixão por criar soluções visuais
          impactantes e funcionais. Estou empolgada para enfrentar novos
          desafios, contribuir com minha experiência e fazer parte de uma equipe
          onde criatividade e tecnologia caminham juntas para alcançar grandes
          resultados.
        </p>
      </TitleText>
    </Title>
    <VideoContainer>
      <h1>Meu Vídeo</h1>
      <VideoPlayer src={videoFile} />
    </VideoContainer>
  </Container>
);

export default Header;
