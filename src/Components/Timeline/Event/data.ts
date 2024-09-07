import { Event, YearRange } from './event';

export const events: Event[] = [
  {
    year: 1,
    title: 'Integração e Contribuições Iniciais',
    descriptionOne:
      'Integração: Familiarizar-se com os processos, ferramentas, cultura da empresa e a equipe da Buzzvel.',
    descriptionTwo:
      'Mentoria: Colaborar com a equipe e receber orientação de desenvolvedores sêniores, aproveitando suas experiências para guiar seu crescimento.',
    descriptionThree:
      'Contribuições Iniciais: Assumir pequenas tarefas, participar de reuniões para compreender a dinâmica dos projetos, e aprender os padrões de codificação e melhores práticas utilizadas pela Buzzvel.',
  },
  {
    year: { start: 2, end: 3 } as YearRange,
    title: 'Desenvolvimento e Expansão de Responsabilidades',
    descriptionOne: 'Continue aprimorando suas habilidades e conhecimentos.',
    descriptionTwo:
      'Lidere pequenos projetos e comece a orientar novos membros da equipe.',
    descriptionThree:
      'Assuma tarefas maiores e mais complexas, contribuindo significativamente para projetos.',
  },
  {
    year: { start: 4, end: 5 } as YearRange,
    title: 'Liderança e Inovação Estratégica',
    descriptionOne:
      'Assuma papéis de liderança e contribua para a direção estratégica da empresa.',
    descriptionTwo:
      'Impulsione a inovação e proponha novas ideias para o desenvolvimento da empresa.',
    descriptionThree:
      'Mantenha-se atualizado com as tecnologias emergentes para trazer novas ideias e soluções.',
  },
];
