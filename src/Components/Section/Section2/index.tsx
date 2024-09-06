import React, { useState } from 'react';
import { ContainerHab, CardHab, Wrapper, Title } from './styles';
import html from '../../../Assets/images/HTML.png';
import css from '../../../Assets/images/CSS.png';
import javascript from '../../../Assets/images/JavaScript.png';
import typeScript from '../../../Assets/images/typescript.png';
import jquery from '../../../Assets/images/jQuery.png';
import less from '../../../Assets/images/less.png';
import sass from '../../../Assets/images/sass.png';
import bootstrap from '../../../Assets/images/bootstrap.png';
import react from '../../../Assets/images/react.png';
import gruntjs from '../../../Assets/images/gruntjs.png';
import gulpjs from '../../../Assets/images/gulp.png';
import vuejs from '../../../Assets/images/vuejs.png';
import github from '../../../Assets/images/github.png';

interface Habilidade {
  title: string;
  image: string;
}

const miniCards: { habilidades: Habilidade[] } = {
  habilidades: [
    { title: 'HTML', image: html },
    { title: 'CSS', image: css },
    { title: 'JavaScript', image: javascript },
    { title: 'TypeScript', image: typeScript },
    { title: 'JQuery', image: jquery },
    { title: 'LESS', image: less },
    { title: 'SASS', image: sass },
    { title: 'Bootstrap', image: bootstrap },
    { title: 'React', image: react },
    { title: 'GruntJS', image: gruntjs },
    { title: 'Gulp.js', image: gulpjs },
    { title: 'VueJS', image: vuejs },
    { title: 'GitHub', image: github },
  ],
};

const SectionTwo = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <ContainerHab>
      <Title>Habilidades</Title>
      <Wrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {miniCards.habilidades.map((card, index) => (
          <CardHab
            key={index}
            index={index}
            row={Math.floor(index / 5)}
            visible={isHovered}
          >
            <h2>{card.title}</h2>
            <img src={card.image} alt={card.title} />
          </CardHab>
        ))}
      </Wrapper>
    </ContainerHab>
  );
};

export default SectionTwo;
