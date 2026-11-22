export const WHATSAPP_NUMBER = '5522998841987';

export function buildWhatsAppUrl(message?: string): string {
  if (!message) return `https://wa.me/${WHATSAPP_NUMBER}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE_ASSETS = {
  headerLogo: '/assets/aistudio/Logo-Verde_Escuro_com_bege_d0f0c663.png',
  footerLogo: '/assets/aistudio/Code_Generated_Image_bab81833.png',
  heroImage: '/assets/aistudio/PRIMEIRA_IMAGEM_DO_SITE_a9936d4c.jpg',
  aboutArchImage:
    '/assets/aistudio/equipe_na_ponte_-_editado__falta_aumentar_a_qualidade__32733899.jpeg',
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
  { label: 'Por que a 4EVER?', href: '#por-que-4ever' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
];

export const DIFFERENTIALS = [
  {
    title: 'Planejamento',
    description: 'Cronogramas claros e etapas bem definidas para evitar imprevistos.',
  },
  {
    title: 'Atenção aos Detalhes',
    description: 'Cuidado rigoroso com cada item da cerimônia, cortejo e recepção.',
  },
  {
    title: 'Acompanhamento',
    description: 'Presença ativa dos quatro fundadores em toda a jornada do evento.',
  },
  {
    title: 'Coordenação',
    description: 'Comunicação clara e sintonia entre fornecedores e momentos do evento.',
  },
];

export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
  objectPositionClass?: string;
}

export const FOUNDERS: Founder[] = [
  {
    name: 'Maisa',
    role: 'Sócia Fundadora',
    bio: 'Com olhar analítico e amor por perícia, garante que nenhum detalhe técnico, contratual ou logístico passe despercebido.',
    image: '/assets/aistudio/maisa_809645df.png',
    alt: 'Maisa - Sócia Fundadora da 4EVER Cerimonial',
    objectPositionClass: 'object-[50%_14%]',
  },
  {
    name: 'Alex',
    role: 'Sócio Fundador',
    bio: 'Apaixonado por música, traz sensibilidade rítmica e sincronia perfeita para entradas, cerimônias e momentos emocionantes.',
    image: '/assets/aistudio/alex_b219b8eb.png',
    alt: 'Alex - Sócio Fundador da 4EVER Cerimonial',
    objectPositionClass: 'object-[50%_22%]',
  },
  {
    name: 'Mayara',
    role: 'Sócia Fundadora',
    bio: 'Criativa e sempre pronta para renovar ideias e estilos, contribui com soluções estéticas leves e acolhimento próximo às noivas.',
    image: '/assets/aistudio/mayara_29cd450b.png',
    alt: 'Mayara - Sócia Fundadora da 4EVER Cerimonial',
    objectPositionClass: 'object-[50%_12%]',
  },
  {
    name: 'Cleisson',
    role: 'Sócio Fundador',
    bio: 'Movido pelo prazer em servir e ajudar a todos, coordena o suporte aos convidados, familiares e fornecedores com serenidade.',
    image: '/assets/aistudio/cleisson_19c28c16.png',
    alt: 'Cleisson - Sócio Fundador da 4EVER Cerimonial',
    objectPositionClass: 'object-[50%_20%]',
  },
];

export const WHY_4EVER_PILLARS = [
  {
    title: 'Quatro olhares, um só propósito',
    text: 'Não delegamos o seu sonho a desconhecidos. São os quatro sócios presentes do primeiro encontro ao encerramento, cuidando de cada detalhe como se fosse único.',
  },
  {
    title: 'Bastidores silenciosos, emoção inteira',
    text: 'Enquanto protegemos horários, fornecedores e protocolos nos bastidores, vocês ficam livres para sentir o perfume das flores, o tremor nas mãos e o abraço de quem amam.',
  },
  {
    title: 'Organização com alma e delicadeza',
    text: 'Planilhas e cronogramas sustentam o evento, mas é a sensibilidade humana que transforma uma cerimônia bem-feita em uma memória que aquece o peito para sempre.',
  },
];

export interface WeddingPackage {
  number: string;
  kicker: string;
  name: string;
  description: string;
  includesPreviousLabel?: string;
  features: string[];
  extraFeatures?: string[];
  ctaLabel: string;
  whatsappMessage: string;
  featured?: boolean;
  badge?: string;
}

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    number: '01',
    kicker: 'Assessoria & Cerimonial',
    name: 'Pacote Love',
    description:
      'Ideal para casais que desejam segurança técnica, organização impecável e tranquilidade completa na reta final e durante toda a celebração.',
    features: [
      'Curadoria de fornecedores',
      'Auditoria contratual e operacional',
      'Visita técnica',
      'Reuniões periódicas',
      'Cronograma geral do evento',
      'Concierge premium dos noivos',
      'Pós-evento e encerramento',
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
      'Acompanhamento completo do planejamento ao grande dia. Une todas as entregas do Pacote Love aos nossos diferenciais exclusivos de gestão financeira, logística e experiência.',
    includesPreviousLabel: 'Inclui todas as atividades do Pacote Love:',
    features: [
      'Curadoria de fornecedores',
      'Auditoria contratual e operacional',
      'Visita técnica e reuniões periódicas',
      'Cronograma geral, concierge premium dos noivos e pós-evento',
    ],
    extraFeatures: [
      'Planejamento financeiro',
      'Gestão de contratos e agendamentos',
      'Kit de emergência personalizado',
      'RSVP e logística dos convidados',
      'Gestão da experiência dos convidados',
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
      'A Assessoria Personalizada é criada de forma exclusiva para atender às necessidades do casal, oferecendo suporte sob medida em cada etapa do casamento, com flexibilidade e acompanhamento profissional conforme a demanda dos noivos.',
    features: [
      'Escopo adaptado à rotina e fase do casal',
      'Suporte dedicado para formatos exclusivos',
      'Alinhamento personalizado de entregas',
      'Execução completa pela equipe 4EVER conforme solicitado',
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
  objectPositionClass?: string;
  whatsappMessage: string;
}

export const OTHER_SEGMENTS: EventSegment[] = [
  {
    kicker: '15 Anos',
    title: 'Festas de Debutantes',
    description:
      'Planejamento cuidadoso do cerimonial de 15 anos, protocolos de entrada, valsa, homenagens e coordenação completa da festa junto à família.',
    image: '/assets/aistudio/15_Anos__Christine__667f0dc0.jpeg',
    alt: 'Debutante de 15 anos celebrando ao ar livre entre árvores',
    objectPositionClass: 'object-[50%_38%]',
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
    objectPositionClass: 'object-center',
    whatsappMessage:
      'Olá, equipe 4EVER Cerimonial! Gostaria de solicitar atendimento para um *Evento Corporativo*.',
  },
  {
    kicker: 'Momentos Únicos',
    title: 'Celebrações Especiais',
    description:
      'Bodas, renovação de votos, formaturas e jantares comemorativos conduzidos com a mesma delicadeza e atenção aos detalhes.',
    image: '/assets/aistudio/Eventos_em_geral_5dafede1.jpeg',
    alt: 'Ambiente acolhedor com luminárias artesanais e iluminação quente para celebrações especiais',
    objectPositionClass: 'object-[50%_58%]',
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
  category: 'Cerimônia' | 'Recepção' | 'Detalhes';
  colSpanClass: string;
  heightClass: string;
  paddingClass: string;
  titleSizeClass: string;
  objectPositionClass?: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'recepcao-jardim-luz-natural',
    thumb: '/assets/aistudio/Recep__o_1__Mayara__68ed4aea.jpeg',
    full: '/assets/aistudio/Recep__o_1__Mayara__68ed4aea.jpeg',
    alt: 'Salão de recepção de casamento iluminado naturalmente com mesas postas e flores',
    title: 'Recepção & Luz Natural',
    caption: 'Salão claro com mesas postas em azul suave, taças de cristal e arranjos delicados',
    category: 'Recepção',
    colSpanClass: 'md:col-span-7',
    heightClass: 'h-72 sm:h-96',
    paddingClass: 'p-7',
    titleSizeClass: 'text-xl',
    objectPositionClass: 'object-center',
  },
  {
    id: 'emocao-abraco-luzes',
    thumb: '/assets/aistudio/Guilbert_e_Andressa_abra_ados_95e76089.jpg',
    full: '/assets/aistudio/Guilbert_e_Andressa_abra_ados_95e76089.jpg',
    alt: 'Noivos abraçados sorrindo diante de cortina de luzinhas quentes',
    title: 'Abraço & Emoção',
    caption: 'A leveza e o sorriso cúmplice dos noivos sob a cortina de luzes quentes',
    category: 'Cerimônia',
    colSpanClass: 'md:col-span-5',
    heightClass: 'h-80 sm:h-96',
    paddingClass: 'p-7',
    titleSizeClass: 'text-xl',
    objectPositionClass: 'object-[50%_20%]',
  },
  {
    id: 'altar-pergolado-jardim',
    thumb: '/assets/aistudio/Cerimonia_1__Mayara__4b12a6f6.jpeg',
    full: '/assets/aistudio/Cerimonia_1__Mayara__4b12a6f6.jpeg',
    alt: 'Cerimônia ao ar livre com pergolado em voal branco e corredor de flores',
    title: 'Altar ao Ar Livre',
    caption: 'Pergolado em tecido fluido branco, corredor de flores e iluminação aconchegante',
    category: 'Cerimônia',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-80 sm:h-88',
    paddingClass: 'p-6',
    titleSizeClass: 'text-lg',
    objectPositionClass: 'object-[50%_62%]',
  },
  {
    id: 'detalhes-votos-aliancas',
    thumb: '/assets/aistudio/Detalhes_1__Mayara__a8768772.jpeg',
    full: '/assets/aistudio/Detalhes_1__Mayara__a8768772.jpeg',
    alt: 'Detalhes da noiva com caderno de votos, alianças, perfume e sandália sobre madeira rústica',
    title: 'Votos & Alianças',
    caption: 'Composição afetiva com caderno de votos, alianças, perfume e detalhes da noiva',
    category: 'Detalhes',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-80 sm:h-88',
    paddingClass: 'p-6',
    titleSizeClass: 'text-lg',
    objectPositionClass: 'object-center',
  },
  {
    id: 'noiva-veu-janela',
    thumb: '/assets/aistudio/Noiva_de_costas__Joyce__25aba64b.jpeg',
    full: '/assets/aistudio/Noiva_de_costas__Joyce__25aba64b.jpeg',
    alt: 'Noiva de costas com véu longo rendado voltada para a luz natural',
    title: 'Instantes Antes do Sim',
    caption: 'Silêncio, luz suave e o véu rendado que anuncia o começo de uma nova história',
    category: 'Cerimônia',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-80 sm:h-88',
    paddingClass: 'p-6',
    titleSizeClass: 'text-lg',
    objectPositionClass: 'object-[50%_40%]',
  },
  {
    id: 'cerimonia-portal-jardim',
    thumb: '/assets/aistudio/Cerimonia_2__Mayara__60ba9ea5.jpeg',
    full: '/assets/aistudio/Cerimonia_2__Mayara__60ba9ea5.jpeg',
    alt: 'Entrada de cerimônia no jardim com portas de madeira, voal branco e cruz decorada',
    title: 'Portal da Cerimônia',
    caption: 'Portas rústicas envoltas em voal branco e folhagens recebendo o cortejo no jardim',
    category: 'Cerimônia',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-72 sm:h-80',
    paddingClass: 'p-6',
    titleSizeClass: 'text-lg',
    objectPositionClass: 'object-[50%_55%]',
  },
  {
    id: 'mesa-posta-botanica',
    thumb: '/assets/aistudio/Recep__o_2__Mayara__d5cbb9b3.jpeg',
    full: '/assets/aistudio/Recep__o_2__Mayara__d5cbb9b3.jpeg',
    alt: 'Detalhes da mesa posta com toalha verde-botânico, numeração floral e lembrança em madeira',
    title: 'Mesa Posta Botânica',
    caption: 'Toalha verde-oliva, papelaria floral numerada e lembranças pensadas com carinho',
    category: 'Recepção',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-72 sm:h-80',
    paddingClass: 'p-6',
    titleSizeClass: 'text-lg',
    objectPositionClass: 'object-center',
  },
  {
    id: 'bolo-flores-luzinhas',
    thumb: '/assets/aistudio/Detalhes_5__Mayara__d9ca1055.jpeg',
    full: '/assets/aistudio/Detalhes_5__Mayara__d9ca1055.jpeg',
    alt: 'Mesa do bolo branco de três andares decorado com rosas claras e doces finos',
    title: 'Mesa do Bolo & Doces',
    caption: 'Bolo clássico com rosas suaves, retrato do casal e doces finos sob luzes cintilantes',
    category: 'Detalhes',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-72 sm:h-80',
    paddingClass: 'p-6',
    titleSizeClass: 'text-lg',
    objectPositionClass: 'object-center',
  },
  {
    id: 'retrato-noiva-pb',
    thumb: '/assets/aistudio/Andressa_Posando_-_Preto_e_Branco_e4826377.jpg',
    full: '/assets/aistudio/Andressa_Posando_-_Preto_e_Branco_e4826377.jpg',
    alt: 'Retrato editorial em preto e branco da noiva sorrindo com vestido rendado e buquê',
    title: 'Retrato Atemporal',
    caption: 'Registro em preto e branco celebrando a leveza, o buquê e o sorriso sereno da noiva',
    category: 'Detalhes',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-88 sm:h-96',
    paddingClass: 'p-6',
    titleSizeClass: 'text-lg',
    objectPositionClass: 'object-[50%_20%]',
  },
  {
    id: 'bolo-orquideas-cristal',
    thumb: '/assets/aistudio/Detalhes_2__Mayara__c985e966.jpeg',
    full: '/assets/aistudio/Detalhes_2__Mayara__c985e966.jpeg',
    alt: 'Bolo de casamento de cinco andares com cascata de orquídeas azuis e brancas sob lustres de cristal',
    title: 'Orquídeas & Cristais',
    caption: 'Bolo de cinco andares com cascata de orquídeas sob lustres de cristal e folhagens',
    category: 'Detalhes',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-88 sm:h-96',
    paddingClass: 'p-6',
    titleSizeClass: 'text-lg',
    objectPositionClass: 'object-[50%_46%]',
  },
  {
    id: 'perspectiva-portal-altar',
    thumb: '/assets/aistudio/Cerimonia_3__Mayara__29ff80bc.jpeg',
    full: '/assets/aistudio/Cerimonia_3__Mayara__29ff80bc.jpeg',
    alt: 'Vista artística pelas portas rústicas em direção ao altar ao ar livre cercado por palmeiras',
    title: 'Caminho até o Altar',
    caption: 'Enquadramento poético pelas portas de madeira rumo ao pergolado entre palmeiras',
    category: 'Cerimônia',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-88 sm:h-96',
    paddingClass: 'p-6',
    titleSizeClass: 'text-lg',
    objectPositionClass: 'object-[50%_55%]',
  },
];

export interface TestimonialItem {
  id: string;
  couple: string;
  eventLabel: string;
  quote: string;
  avatar?: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'dep-1',
    couple: 'Mariana & Lucas',
    eventLabel: 'Casamento em Macaé',
    quote:
      'Vocês transformaram nossa ansiedade em calma. Entramos no altar sentindo apenas amor, porque sabíamos que cada detalhe estava em mãos seguras.',
  },
  {
    id: 'dep-2',
    couple: 'Camila & Rafael',
    eventLabel: 'Pacote Forever',
    quote:
      'Ter os quatro sócios presentes do início ao fim fez toda a diferença. Nossos convidados elogiaram o cuidado e o acolhimento a noite inteira.',
  },
  {
    id: 'dep-3',
    couple: 'Beatriz & Thiago',
    eventLabel: 'Cerimônia ao Ar Livre',
    quote:
      'Cada música entrou no segundo exato, cada abraço aconteceu sem pressa. A 4EVER cuidou da nossa história com uma sensibilidade que nunca vamos esquecer.',
  },
  {
    id: 'dep-4',
    couple: 'Juliana & Henrique',
    eventLabel: 'Pacote Love',
    quote:
      'Na reta final eu achava que não ia dar conta de tudo, até vocês assumirem o cronograma. Foi a melhor escolha do nosso casamento, vivemos cada instante!',
  },
  {
    id: 'dep-5',
    couple: 'Fernanda & Pedro',
    eventLabel: 'Casamento Intimista',
    quote:
      'Organização impecável sem perder o carinho. Até nos pequenos imprevistos vocês resolveram tudo em silêncio — nós só soubemos depois, já sorrindo.',
  },
];
