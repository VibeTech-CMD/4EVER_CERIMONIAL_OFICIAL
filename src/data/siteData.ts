export const WHATSAPP_NUMBER = '5522998841987';

export function buildWhatsAppUrl(message?: string): string {
  if (!message) return `https://wa.me/${WHATSAPP_NUMBER}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE_ASSETS = {
  headerLogo: '/assets/aistudio/Logo-Verde_Escuro_com_bege_d0f0c663.png',
  footerLogo: '/assets/aistudio/Code_Generated_Image_bab81833.png',
  heroImage:
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85',
  aboutArchImage:
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
  teamGroupPhoto: '/assets/aistudio/Code_Generated_Image__4__035f9fb1.png',
};

export const CONTACT_INFO = {
  location: 'Macaé & Região – RJ',
  whatsappDisplay: '+55 (22) 99884-1987',
  email: '4everceremonial@gmail.com',
  instagramHandle: '@4ever_cerimonial',
  instagramUrl: 'https://instagram.com/4ever_cerimonial',
  developerName: 'VibeTech|CMD',
  developerUrl: 'https://vibetech-cmd.github.io/VIBETECH/',
};

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
];

export const DIFFERENTIALS = [
  {
    title: 'Planejamento Organizado',
    description: 'Cronogramas claros e etapas bem definidas para evitar imprevistos.',
  },
  {
    title: 'Atenção aos Detalhes',
    description: 'Cuidado rigoroso com cada item da cerimônia, cortejo e recepção.',
  },
  {
    title: 'Acompanhamento Próximo',
    description: 'Presença ativa dos quatro fundadores em toda a jornada do evento.',
  },
  {
    title: 'Coordenação Precisa',
    description: 'Comunicação clara e sintonia entre fornecedores e momentos do evento.',
  },
];

export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
  isProvisional?: boolean;
}

export const FOUNDERS: Founder[] = [
  {
    name: 'Maisa',
    role: 'Sócia Fundadora',
    bio: 'Com olhar analítico e amor por perícia, garante que nenhum detalhe técnico, contratual ou logístico passe despercebido.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    alt: 'Maisa - Sócia Fundadora da 4EVER Cerimonial',
    isProvisional: true,
  },
  {
    name: 'Alex',
    role: 'Sócio Fundador',
    bio: 'Apaixonado por música, traz sensibilidade rítmica e sincronia perfeita para entradas, cerimônias e momentos emocionantes.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
    alt: 'Alex - Sócio Fundador da 4EVER Cerimonial',
    isProvisional: true,
  },
  {
    name: 'Mayara',
    role: 'Sócia Fundadora',
    bio: 'Criativa e sempre pronta para renovar ideias e estilos, contribui com soluções estéticas leves e acolhimento próximo às noivas.',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
    alt: 'Mayara - Sócia Fundadora da 4EVER Cerimonial',
    isProvisional: true,
  },
  {
    name: 'Cleisson',
    role: 'Sócio Fundador',
    bio: 'Movido pelo prazer em servir e ajudar a todos, coordena o suporte aos convidados, familiares e fornecedores com serenidade.',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
    alt: 'Cleisson - Sócio Fundador da 4EVER Cerimonial',
    isProvisional: true,
  },
];

export interface WeddingPackage {
  number: string;
  kicker: string;
  name: string;
  description: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
  featured?: boolean;
  badge?: string;
}

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    number: '01',
    kicker: 'Assessoria Final',
    name: 'Pacote Love',
    description:
      'Ideal para casais que já organizaram as principais contratações e desejam tranquilidade na reta final, alinhamento de fornecedores, ensaio e coordenação completa no grande dia.',
    features: [
      'Revisão minuciosa de contratos e fornecedores',
      'Elaboração do cronograma técnico do evento',
      'Ensaio geral da cerimônia com cortejo',
      'Coordenação integral dos 4 sócios no dia',
    ],
    ctaLabel: 'Consultar Pacote Love',
    whatsappMessage:
      'Olá, equipe 4EVER Cerimonial! Tenho interesse no *Pacote Love* e gostaria de receber mais informações e valores.',
  },
  {
    number: '02',
    kicker: 'Do Início ao Altar',
    name: 'Pacote Forever',
    badge: 'Experiência Completa',
    featured: true,
    description:
      'Acompanhamento integral desde a concepção do casamento. Conduzimos o orçamento, indicação e negociação de fornecedores, reuniões técnicas e execução impecável de cada instante.',
    features: [
      'Planejamento e controle orçamentário completo',
      'Curadoria, visitas técnicas e negociação',
      'Gestão de convidados (RSVP) e protocolos',
      'Direção completa de cerimônia e recepção',
    ],
    ctaLabel: 'Consultar Pacote Forever',
    whatsappMessage:
      'Olá, equipe 4EVER Cerimonial! Tenho interesse no *Pacote Forever* e gostaria de receber mais informações e valores.',
  },
  {
    number: '03',
    kicker: 'Sob Medida',
    name: 'Pacote Personalizado',
    description:
      'Desenhado especialmente para demandas específicas do casal, destination weddings, mini weddings ou formatos exclusivos de celebração.',
    features: [
      'Escopo adaptado à rotina e fase do casal',
      'Suporte dedicado para formatos exclusivos',
      'Alinhamento personalizado de entregas',
      'Execução completa pela equipe 4EVER',
    ],
    ctaLabel: 'Montar Proposta Sob Medida',
    whatsappMessage:
      'Olá, equipe 4EVER Cerimonial! Tenho interesse no *Pacote Personalizado* e gostaria de montar uma proposta sob medida.',
  },
];

export interface EventSegment {
  kicker: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  whatsappMessage: string;
}

export const OTHER_SEGMENTS: EventSegment[] = [
  {
    kicker: '15 Anos',
    title: 'Festas de Debutantes',
    description:
      'Planejamento cuidadoso do cerimonial de 15 anos, protocolos de entrada, valsa, homenagens e coordenação completa da festa junto à família.',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    alt: 'Festa de debutante elegante com flores e velas',
    whatsappMessage:
      'Olá, equipe 4EVER Cerimonial! Gostaria de solicitar atendimento para uma *Festa de Debutante (15 anos)*.',
  },
  {
    kicker: 'Empresarial',
    title: 'Eventos Corporativos',
    description:
      'Organização e recepção para confraternizações, lançamentos, palestras e encontros institucionais com pontualidade e imagem alinhada à sua marca.',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    alt: 'Evento corporativo sofisticado e organizado',
    whatsappMessage:
      'Olá, equipe 4EVER Cerimonial! Gostaria de solicitar atendimento para um *Evento Corporativo*.',
  },
  {
    kicker: 'Momentos Únicos',
    title: 'Celebrações Especiais',
    description:
      'Bodas, renovação de votos, formaturas e jantares comemorativos conduzidos com a mesma delicadeza e atenção aos detalhes.',
    image:
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    alt: 'Celebração especial de bodas e encontros intimistas',
    whatsappMessage:
      'Olá, equipe 4EVER Cerimonial! Gostaria de solicitar atendimento para uma *Celebração Especial*.',
  },
];

export interface PortfolioItem {
  id: string;
  thumb: string;
  full: string;
  alt: string;
  title: string;
  caption: string;
  colSpanClass: string;
  heightClass: string;
  paddingClass: string;
  titleSizeClass: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'cerimonia-luz-natural',
    thumb:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
    full: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85',
    alt: 'Cerimônia de casamento ao ar livre',
    title: 'Cerimônia & Luz Natural',
    caption: 'Cerimônia ao ar livre com iluminação natural e flores delicadas',
    colSpanClass: 'md:col-span-7',
    heightClass: 'h-80 sm:h-96',
    paddingClass: 'p-7',
    titleSizeClass: 'text-xl',
  },
  {
    id: 'detalhes-recepcao',
    thumb:
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=800&q=80',
    full: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85',
    alt: 'Mesa decorada para casamento',
    title: 'Detalhes da Recepção',
    caption: 'Mesa posta e decoração com velas e tons acolhedores',
    colSpanClass: 'md:col-span-5',
    heightClass: 'h-80 sm:h-96',
    paddingClass: 'p-7',
    titleSizeClass: 'text-xl',
  },
  {
    id: 'emocao-cortejo',
    thumb:
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=700&q=80',
    full: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1400&q=85',
    alt: 'Noivos celebrando o casamento',
    title: 'Emoção & Cortejo',
    caption: 'Entrada emocionante dos noivos no altar',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-72 sm:h-80',
    paddingClass: 'p-6',
    titleSizeClass: 'text-lg',
  },
  {
    id: 'atmosfera-acolhedora',
    thumb:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=700&q=80',
    full: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85',
    alt: 'Salão de recepção de casamento elegante',
    title: 'Atmosfera Acolhedora',
    caption: 'Ambiente acolhedor com madeira e arranjos florais clássicos',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-72 sm:h-80',
    paddingClass: 'p-6',
    titleSizeClass: 'text-lg',
  },
  {
    id: 'cada-detalhe-eternizado',
    thumb:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=700&q=80',
    full: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=85',
    alt: 'Alianças e detalhes de casamento',
    title: 'Cada Detalhe Eternizado',
    caption: 'Alianças e símbolos de uma união eterna',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-72 sm:h-80',
    paddingClass: 'p-6',
    titleSizeClass: 'text-lg',
  },
];
