/**
 * Tipos reutilizáveis para produtos de camping e mochilão.
 *
 * Estes tipos são genéricos e funcionam para qualquer categoria:
 * - Barracas
 * - Mochilas
 * - Fogareiros
 * - Lanternas
 * - Sacos de dormir
 * - Isolantes térmicos
 * - Cantis e panelas
 * - Qualquer outro equipamento
 *
 * A quantidade de produtos NÃO é fixa.
 * Cada artigo define sua própria lista.
 */

export type PlataformaAfiliado =
  | "Amazon"
  | "Shopee"
  | "Mercado Livre"
  | "Magalu"
  | "Outro";

/**
 * Informações de uma loja para afiliado.
 * Cada produto pode ter vínculo com múltiplas lojas.
 */
export interface LojaAfiliado {
  nome: PlataformaAfiliado;
  url: string;
}

/**
 * Estrutura base de um produto.
 * Todos os campos opcionais exceto nome e categoria.
 */
export interface ProdutoBase {
  /** Identificador único do produto (slug) */
  id?: string;

  /** Nome completo do produto */
  nome: string;

  /** Categoria do produto (deve existir em categories.ts) */
  categoria: string;

  /** URL da imagem do produto */
  imagem: string;

  /** Descrição curta do produto (1-2 frases) */
  descricao?: string;

  /** Resumo das especificações principais (ex: "Coluna d'água: 3000mm | Peso: 1.5kg") */
  destaque?: string;

  /** Especificações detalhadas do produto */
  especificacoes?: {
    peso?: string;
    dimensoes?: string;
    capacidade?: string;
    material?: string;
    temperatura?: string;
    [key: string]: string | undefined;
  };

  /** Avaliação média (0-5) */
  avaliacao?: number;

  /** Número de avaliações (se disponível) */
  totalAvaliacoes?: number;

  /** Melhor para qual perfil de uso */
  melhorPara?: string;

  /** Pontos fortes do produto */
  pontosFortes?: string[];

  /** Link de afiliado principal */
  linkAfiliado?: string;

  /** Plataforma do link principal */
  plataforma?: PlataformaAfiliado;

  /** Múltiplas lojas com afiliado */
  lojas?: LojaAfiliado[];
}

/**
 * Produto para exibição em grid (ProductGrid).
 * Compatível com a interface Product existente.
 */
export interface ProdutoEmDestaque extends ProdutoBase {
  nome: string;
  categoria: string;
  imagem: string;
  destaque?: string;
  avaliacao?: number;
  linkAfiliado?: string;
  plataforma?: PlataformaAfiliado;
}

/**
 * Produto para destaque principal (TopPick).
 * Compatível com a interface TopPickProps existente.
 */
export interface ProdutoTopPick extends ProdutoBase {
  nome: string;
  categoria: string;
  imagem: string;
  descricao: string;
  pontosFortes: string[];
  linkAfiliado: string;
  plataforma: PlataformaAfiliado;
}

/**
 * Produto para tabela comparativa (futuro componente).
 * Inclui campos extras para comparação lado a lado.
 */
export interface ProdutoComparacao extends ProdutoBase {
  nome: string;
  categoria: string;
  imagem: string;

  /** Coluna d'água em mm (para barracas, capas) */
  colunaDagua?: string;

  /** Peso em gramas ou kg */
  peso?: string;

  /** Capacidade em litros (mochilas) ou pessoas (barracas) */
  capacidade?: string;

  /** Temperatura mínima (sacos de dormir) */
  temperaturaMinima?: string;

  /** R-Value (isolantes térmicos) */
  rValue?: string;

  /** Lumens (lanternas) */
  lumens?: string;

  /** Autonomia da bateria */
  autonomia?: string;

  /** Melhor perfil de uso */
  melhorPara?: string;

  /** Avaliação geral */
  avaliacao?: number;

  /** Lojas disponíveis */
  lojas?: LojaAfiliado[];
}

/**
 * Configuração de plataforma de afiliado.
 * Usada por componentes para renderizar botões e labels.
 */
export interface PlataformaConfig {
  label: string;
  class: string;
  icon?: string;
}

export const plataformaConfig: Record<PlataformaAfiliado, PlataformaConfig> = {
  Amazon: {
    label: "Ver Preço na Amazon",
    class: "btn-amazon",
    icon: "M18.15 15.45c-.45.45-1.05.68-1.8.68-1.1 0-1.95-.35-2.55-1.05l1.35-1.05c.3.35.7.5 1.2.5.5 0 .9-.15 1.2-.45.3-.3.45-.7.45-1.2 0-.5-.15-.9-.5-1.2-.3-.3-.75-.5-1.35-.5-.6 0-1.1.2-1.5.55L12 8.85c.55-.5 1.3-.75 2.2-.75 1.05 0 1.85.3 2.4.9.55.6.85 1.4.85 2.4 0 .75-.2 1.35-.6 1.75-.25.25-.45.4-.7.55zM5.65 10.5h2.1v5.4H9.3v-5.4h2.1V9.3H5.65v1.2z",
  },
  Shopee: {
    label: "Ver Oferta na Shopee",
    class: "btn-shopee",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  "Mercado Livre": {
    label: "Ver no Mercado Livre",
    class: "btn-mercadolivre",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  Magalu: {
    label: "Ver na Magalu",
    class: "btn-magalu",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  Outro: {
    label: "Ver Oferta",
    class: "btn-outro",
    icon: "M18 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z",
  },
};
