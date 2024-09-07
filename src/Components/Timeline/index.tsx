import React, { useState } from 'react';
import {
  ContainerTime,
  TimelineContent,
  Title,
  TimeContainer,
  TimelineUl,
  TimelineItem,
  TimelineYear,
  TimelineBall,
  TimelineDetails,
  BackButton,
} from './styles';
import { events } from './Event/data';
import image4 from '../../Assets/images/image4.png';

const Timeline = () => {
  const [activeDetail, setActiveDetail] = useState<number | null>(null);

  const handleBallClick = (
    index: number,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    setActiveDetail(activeDetail === index ? null : index);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (
      !target.closest('.timeline-details') &&
      !target.closest('.timeline-ball')
    ) {
      setActiveDetail(null);
    }
  };

  return (
    <ContainerTime id="timeline" onClick={handleClickOutside}>
      <TimelineContent>
        <Title>Linha do tempo</Title>
        <TimeContainer>
          <TimelineUl>
            {events.map((event, index) => (
              <TimelineItem key={index}>
                <TimelineYear
                  position={index % 2 === 0 ? 'top' : 'bottom'}
                  index={index}
                >
                  {typeof event.year === 'number'
                    ? `Ano: ${event.year}`
                    : `Anos: ${event.year.start} a ${event.year.end}`}
                </TimelineYear>
                <TimelineBall onClick={(e) => handleBallClick(index, e)} />
                <TimelineDetails
                  key={index}
                  align={index % 2 === 0 ? 'top' : 'bottom'}
                  style={{ display: activeDetail === index ? 'block' : 'none' }}
                  className="timeline-details"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p>
                    <strong>{event.title}</strong>
                  </p>
                  <br />
                  <p>{event.descriptionOne}</p>
                  <br />
                  <p>{event.descriptionTwo}</p>
                  <br />
                  <p>{event.descriptionThree}</p>
                </TimelineDetails>
              </TimelineItem>
            ))}
          </TimelineUl>
        </TimeContainer>
      </TimelineContent>
      <BackButton href="#introduction">
        <img src={image4} alt="Voltar para o início" />
      </BackButton>
    </ContainerTime>
  );
};

export default Timeline;
