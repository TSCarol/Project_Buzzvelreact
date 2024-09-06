import { Container, Link } from './styles';

const NaveSection = () => {
  return (
    <Container>
      <Link href="#introduction">Quem sou eu</Link>
      <Link href="#aboutMe">Sobre mim</Link>
      <Link href="#projects">Projetos Buzzvel</Link>
      <Link href="#timeline">Linha do tempo</Link>
    </Container>
  );
};

export default NaveSection;
