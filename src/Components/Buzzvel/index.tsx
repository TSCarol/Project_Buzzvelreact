import React, { useEffect, useRef, useState } from 'react';
import {
  BuzzContainer,
  ProjectCard,
  CardImage,
  CardTitle,
  CardDescription,
  TextCard,
  ProjectsContainer,
  ArrowButton,
  Title,
  ArrowContainer,
} from './styles';
import viplant from '../../Assets/images/imageproject1.png';
import traquinices from '../../Assets/images/imageproject2.png';
import dbs from '../../Assets/images/imageproject3.png';
import misscan from '../../Assets/images/imageproject4.png';
import thinkferidas from '../../Assets/images/imageproject5.png';
import comaouleve from '../../Assets/images/imageproject6.png';

type project = {
  title: string;
  image: string;
  description: string;
};

const ProjectsCard: { projects: project[] } = {
  projects: [
    {
      title: 'Viplant',
      image: viplant,
      description:
        'A Buzzvel criou um novo site para a VIPLANT com o objetivo de melhorar a experiência do usuário e levar a qualidade das compras físicas para o digital. Desenvolveram uma plataforma web e móvel, usando WordPress, MySQL e Tailwind CSS, em um projeto de quatro meses. Através de um CMS intuitivo, capacitaram a VIPLANT a personalizar o site e lançar promoções.',
    },
    {
      title: 'Traquinices',
      image: traquinices,
      description:
        'A Buzzvel criou um site moderno e responsivo para a Traquinices, uma empresa portuguesa de produtos premium de puericultura. Utilizando WordPress e MySQL, o projeto de um mês melhorou a presença online da empresa, com funcionalidades como formulário de contato e blog, tornando o site intuitivo e fácil de navegar, fortalecendo a comunicação com o público-alvo',
    },
    {
      title: 'DBS',
      image: dbs,
      description:
        'A Buzzvel desenvolveu uma plataforma e um aplicativo para a PTC que permitem o rastreamento de exames médicos, utilizando ReactJS, React Native, Laravel e Tailwind CSS. Em quatro meses, a solução implementada associou códigos de barras a exames, mapeando-os com hospitais e médicos responsáveis. Além disso, foi criado um CRM para organizar dados detalhados, otimizar processos e aumentar a rentabilidade do negócio, com coleta permanente de informações que podem ser consultadas a qualquer momento.',
    },
    {
      title: 'MissCan',
      image: misscan,
      description:
        'A Buzzvel, em parceria com a COMON, criou uma loja online para uma marca portuguesa da indústria conserveira, visando expandir sua presença internacional. O projeto, desenvolvido em um mês com WordPress e MySQL, inclui versões em português, inglês e francês, além de filtros de pesquisa e uma área premium para vendas de produtos artesanais online e no ponto de venda físico.',
    },
    {
      title: 'ThinkFeridas',
      image: thinkferidas,
      description:
        'A Buzzvel desenvolveu o aplicativo ThinkFeridas para auxiliar profissionais de saúde na tomada de decisões clínicas sobre o tratamento de feridas complexas. Utilizando tecnologias como Flutter, Laravel, MySQL e Twilio, o projeto foi concluído em dois meses. O aplicativo, de design minimalista e intuitivo, permite que os usuários naveguem sem a necessidade de treinamento, acelerando o processo de tratamento.',
    },
    {
      title: 'Coma ou Leve',
      image: comaouleve,
      description:
        'A Buzzvel criou uma plataforma de CRM para a Coma ou Leve, automatizando o processo de pedidos durante períodos de alta demanda. Utilizando Laravel e MySQL, o projeto foi concluído em um mês, simplificando o fluxo de trabalho e economizando tempo no processamento de dados. Agora, a empresa está desenvolvendo uma funcionalidade de gestão de estoque com a Buzzvel.',
    },
  ],
};

const BuzzvelSec = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isFaded, setIsFaded] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const textCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);

    return () => {
      window.removeEventListener('resize', updateCardsPerPage);
    };
  }, []);

  const handlePrevClick = () => {
    setSelectedCardIndex((prevIndex) =>
      prevIndex === 0 ? ProjectsCard.projects.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedCardIndex(
      (prevIndex) => (prevIndex + 1) % ProjectsCard.projects.length
    );
  };

  const startCardIndex =
    Math.floor(selectedCardIndex / cardsPerPage) * cardsPerPage;
  const visibleProjects = ProjectsCard.projects.slice(
    startCardIndex,
    startCardIndex + cardsPerPage
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFaded(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (textCardRef.current) {
      observer.observe(textCardRef.current);
    }

    return () => {
      if (textCardRef.current) {
        observer.unobserve(textCardRef.current);
      }
    };
  }, []);
  return (
    <BuzzContainer id="projects">
      <TextCard ref={textCardRef} className={isFaded ? 'fade-in' : 'fade-out'}>
        <h1>Porque a Buzzvel?</h1>
        <p>
          Estou motivada a ingressar na Buzzvel porque acredito que esta é uma
          empresa onde posso alcançar um crescimento profissional. Estou um
          ambiente desafiador e inovador onde eu possa expandir minhas
          habilidades e aprender com os melhores. Na Buzzvel, vejo uma
          oportunidade única de colaborar com uma equipe de alto desempenho,
          aplicar meus conhecimentos e, ao mesmo tempo, desenvolver novas
          competências. Estou ansiosa para contribuir com minhas habilidades e
          fazer parte de uma empresa que valoriza o desenvolvimento contínuo e o
          trabalho em equipe.
        </p>
      </TextCard>
      <Title>Projetos Buzzvel</Title>
      <ArrowContainer>
        <ArrowButton onClick={handlePrevClick}>{'<'}</ArrowButton>
        <ProjectsContainer>
          {visibleProjects.map((project, index) => {
            const actualIndex = startCardIndex + index;
            const isSelected = selectedCardIndex === actualIndex;
            return (
              <ProjectCard key={index} isSelected={isSelected}>
                <CardImage src={project.image} alt={project.title} />
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </ProjectCard>
            );
          })}
        </ProjectsContainer>
        <ArrowButton onClick={handleNextClick}>{'>'}</ArrowButton>
      </ArrowContainer>
    </BuzzContainer>
  );
};

export default BuzzvelSec;
