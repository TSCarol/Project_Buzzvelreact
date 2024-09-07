import React from 'react';
import { useEffect, useState, useRef } from 'react';
import {
  Container,
  Card,
  CardContainer,
  CloseIcon,
  MiniCard,
  NavigationCard,
  ArrowButton,
} from './styles';
import closeIcon from '../../../Assets/images/closet.jpeg';

type CardData = {
  title: string;
  subtitle: string;
  description: string;
};

const Section = () => {
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardType, setCardType] = useState<'profissional' | 'academica'>(
    'profissional'
  );
  const [isVisible, setIsVisible] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (cardContainerRef.current) {
      observer.observe(cardContainerRef.current);
    }

    return () => {
      if (cardContainerRef.current) {
        observer.unobserve(cardContainerRef.current);
      }
    };
  }, []);

  const handleLinkClick =
    (type: 'profissional' | 'academica') =>
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      setCardType(type);
      setShowAdditionalCards(true);
    };

  const handleCloseClick = () => {
    setShowAdditionalCards(false);
    setCardType('profissional');
  };

  const miniCards: Record<'profissional' | 'academica', CardData[]> = {
    profissional: [
      {
        title: 'Profissional Autônomo',
        subtitle: 'Tatuadora',
        description:
          'Responsável pela criação de arte corporal personalizada e atendimento ao cliente.',
      },
      {
        title: 'Grupo Services',
        subtitle: 'Supervisora de Cobrança Receptivo',
        description:
          'Análise dos dados de produtividade dos colaboradores, gerando maior eficiência no setor Receptivo. Responsável pela liderança da equipe. Responsável por atualizações de dados.',
      },
      {
        title: 'Grupo Services',
        subtitle: 'Colaboradora de Cobrança Receptivo',
        description:
          'Responsável pelas negociações com clientes. Responsável pelo atendimento ao cliente, desde negociações até atualização de dados no sistema da empresa.',
      },
      {
        title: 'Profissional Autônoma',
        subtitle: 'Ilustradora',
        description:
          'Responsável pela criação de ilustrações para a empresa Alpha Ultrapress.',
      },
    ],
    academica: [
      {
        title: 'Arquitetura e urbanismo',
        subtitle: 'UNIP-Universidade Paulista',
        description:
          'Bacharel / Início em Fevereiro de 2013- Dezembro de 2017.',
      },
      {
        title: 'Engenheiro Front-End',
        subtitle: 'EBAC-Escola Britânica de Artes Criativas e Tecnologia',
        description:
          'Profissionalizante / Início em Setembro de 2023- previsão de conclusão Setembro de 2024.',
      },
      {
        title: 'Desenvolvimento Frontend com Angular',
        subtitle: 'DIO',
        description: 'Curso / Início Outubro de 2023- Março de 2024.',
      },
    ],
  };

  const currentCards = miniCards[cardType] || [];

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % currentCards.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? currentCards.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container id="aboutMe">
      <CardContainer
        ref={cardContainerRef}
        className={isVisible ? 'visible' : ''}
      >
        {showAdditionalCards && (
          <CloseIcon src={closeIcon} alt="Close" onClick={handleCloseClick} />
        )}
        {!showAdditionalCards ? (
          <>
            <Card>
              <a href="#" onClick={handleLinkClick('profissional')}>
                Experiência Profissional
              </a>
            </Card>
            <Card>
              <a href="#" onClick={handleLinkClick('academica')}>
                Experiência Acadêmica
              </a>
            </Card>
          </>
        ) : (
          <NavigationCard>
            <ArrowButton onClick={prevCard} direction="prev" />
            {currentCards.map((card: CardData, index: number) => (
              <MiniCard
                key={index}
                isSelected={index === currentCardIndex}
                cardType={cardType}
              >
                <h2>{card.title}</h2>
                <h3>{card.subtitle}</h3>
                <p>{card.description}</p>
              </MiniCard>
            ))}
            <ArrowButton onClick={nextCard} direction="next" />
          </NavigationCard>
        )}
      </CardContainer>
    </Container>
  );
};

export default Section;
