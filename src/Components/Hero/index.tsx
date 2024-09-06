import { Container, Image, ContentWrapper, Title, StyledImage, StyledImage2 } from './styles';
import image from '../../Assets/images/image.jpg';
import image1 from '../../Assets/images/image1.png'
import image2 from '../../Assets/images/image2.png'
import image3 from '../../Assets/images/image3.png'

const Hero = () => (
  <Container>
    <Image>
      <div className="img-wrapper">
        <img src={image} alt="Foto Thaís" />
      </div>
    </Image>
    <ContentWrapper>
      <StyledImage src={image1} alt='Animação'/>
      <Title>
        "Com grandes códigos, <br />
        vem grandes responsabilidades"
      </Title>
      <StyledImage2 src={image2} alt='Animação'/> 
      <StyledImage src={image3} alt='Animação'/> 
    </ContentWrapper>
  </Container>
);

export default Hero;
