export const siteConfig = {
  name: "Diário de Mochileiro",
  tagline: "Guia Prático de Equipamentos e Dicas de Camping",
  title: "Diário de Mochileiro - Guia Prático de Equipamentos e Dicas de Camping",
  description:
    "Curadoria especializada de equipamentos de camping e mochilão. Análise de especificações técnicas e compilação de avaliações de compradores reais para ajudar você a escolher o melhor custo-benefício sem rasgar dinheiro.",
  siteUrl: "https://diariodemochileiro.com.br",
  authorName: "Diário de Mochileiro",
  email: "contato@diariodemochileiro.com.br",
  language: "pt-BR",
  dateLocale: "pt-BR",
  locale: "pt_BR",
  socialImage: "/og-image.png",
  about:
    "O Diário de Mochileiro é um portal dedicado à curadoria especializada de equipamentos de camping e mochilão. Analisamos especificações técnicas, compilamos avaliações de compradores reais e selecionamos as melhores opções de custo-benefício para acampadores iniciantes e experientes.",
  newsletter: {
    enabled: false,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "Receba dicas por email",
    description: "Novidades sobre equipamentos e dicas de camping. Sem spam, cancele quando quiser.",
  },
  contact: {
    enabled: false,
    action: "",
    method: "post",
    responseTime: "Respostas geralmente em até 2 dias úteis.",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com/diariodemochileiro" },
    { label: "YouTube", href: "https://www.youtube.com/@diariodemochileiro" },
    { label: "RSS", href: "/rss.xml" },
  ],
};

export const navigation = [
  { label: "Guia", href: "/#guia-rapido" },
  { label: "Curadoria", href: "/#curadoria" },
  { label: "Blog", href: "/posts/" },
  { label: "Quem Somos", href: "/quem-somos/" },
];

export const footerNavigation = [
  { label: "Quem Somos", href: "/quem-somos/" },
  { label: "Divulgação de Afiliados", href: "/divulgacao-de-afiliados/" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade/" },
  { label: "Termos de Uso", href: "/termos-de-uso/" },
  { label: "RSS", href: "/rss.xml" },
];
