/**
 * Dados reais de barracas de camping para o comparativo.
 *
 * Fontes consultadas (por produto):
 * - Naturehike Cloud Up 2/3: naturehikebrasil.com.br, lojadomochileiro.com.br, lojaam.com.br
 * - Quechua Arpenaz 4.1: decathlon.com.br
 * - Forclaz Trek 900: decathlon.co.uk, tente-trek.fr
 * - Coleman Sundome 4: coleman.com, outdoorgearlab.com
 * - Trilhas & Rumos Super Esquilo 2: vamosacampar.blogspot.com, mochileiros.com
 *
 * Regras:
 * - Sempre usar linkAfiliado: "" (vazio) até que links reais sejam fornecidos
 * - Sempre usar imagem: "" (vazia) até que imagens reais sejam fornecidas
 * - Sempre usar avaliacao: somente quando confirmada por fonte confiável
 * - Nunca inventar especificações, preços ou avaliações
 */

import type { ProdutoComparacao } from "./types";

export const barracas: ProdutoComparacao[] = [
  {
    nome: "Naturehike Cloud Up 2X Ultralight 210T",
    categoria: "Barracas",
    imagem: "",
    descricao:
      "Barraca ultraleve autoportante para 2 pessoas. Estrutura em alumínio 7001 com sistema tripla de varetas. Indicada para trekking, mochilão e cicloturismo.",
    melhorPara: "Trekking e mochilão com foco em leveza",
    colunaDagua: "3000 mm",
    peso: "2,15 kg (total) / 1,89 kg (sem footprint)",
    capacidade: "2 pessoas",
    avaliacao: undefined,
    linkAfiliado: "",
    plataforma: undefined,
    lojas: [],
    especificacoes: {
      material: "Nylon 210T (sobreteto e quarto) / Poliéster Oxford 150D (piso)",
      varetas: "Alumínio 7001",
      dimensoesInterna: "1,20 × 2,10 m",
      dimensoesEmbalada: "40 × 13 cm",
      footprint: "Incluído (230g)",
    },
  },
  {
    nome: "Naturehike Cloud Up 2X Ultralight 20D",
    categoria: "Barracas",
    imagem: "",
    descricao:
      "Versão em tecido 20D ainda mais leve. Autoportante com estrutura em alumínio 7001 e respiro traseiro para ventilação.",
    melhorPara: "Mochilão onde cada grama conta",
    colunaDagua: "3000 mm",
    peso: "1,80 kg (total) / 1,55 kg (sem footprint)",
    capacidade: "2 pessoas",
    avaliacao: undefined,
    linkAfiliado: "",
    plataforma: undefined,
    lojas: [],
    especificacoes: {
      material: "Nylon 20D (sobreteto e quarto) / Poliéster Oxford 150D (piso)",
      varetas: "Alumínio 7001",
      dimensoesInterna: "1,20 × 2,10 m",
      dimensoesEmbalada: "40 × 13 cm",
      footprint: "Incluído (245g)",
    },
  },
  {
    nome: "Naturehike Cloud Up 3 20D",
    categoria: "Barracas",
    imagem: "",
    descricao:
      "Barraca ultraleve para 3 pessoas com estrutura autoportante em alumínio 7001. Vestíbulo amplo de 85 cm para armazenamento.",
    melhorPara: "Casais com espaço extra ou grupos de 3",
    colunaDagua: "4000 mm",
    peso: "1,85 kg (sem footprint)",
    capacidade: "3 pessoas",
    avaliacao: undefined,
    linkAfiliado: "",
    plataforma: undefined,
    lojas: [],
    especificacoes: {
      material: "Nylon Ripstop 20D com revestimento de silicone",
      varetas: "Alumínio 7001",
      dimensoesInterna: "2,15 × 1,80 × 1,10 m",
      dimensoesEmbalada: "51 × 18 cm",
      footprint: "Incluído",
      vestibulo: "85 cm",
    },
  },
  {
    nome: "Quechua Arpenaz 4.1 Fresh & Black",
    categoria: "Barracas",
    imagem: "",
    descricao:
      "Barraca familiar com tecnologia Fresh & Black para redução de calor e luz. Sala de 5 m² com altura de 1,90 m para circular em pé.",
    melhorPara: "Camping em família com conforto",
    colunaDagua: "2000 mm (teto) / 2400 mm (piso)",
    peso: "10,6 kg",
    capacidade: "4 pessoas",
    avaliacao: undefined,
    linkAfiliado: "",
    plataforma: undefined,
    lojas: [],
    especificacoes: {
      material: "Poliéster (teto duplo) / Polietileno 140 g/m² (piso)",
      varetas: "Fibra de vidro",
      dimensoesInterna: "2,40 × 2,10 m (quarto)",
      dimensoesEmbalada: "65 × 30 × 25 cm",
      volumeEmbalada: "48 L",
      sala: "5 m² com 1,90 m de altura",
    },
  },
  {
    nome: "Forclaz Trek 900 Dome 2P",
    categoria: "Barracas",
    imagem: "",
    descricao:
      "Barraca de trekking autoportante com estrutura dupla em Y. Duas entradas, dois absides e 4 bolsos de organização.",
    melhorPara: "Trekking de vários dias com foco em durabilidade",
    colunaDagua: "2000 mm (teto) / 3000 mm (piso)",
    peso: "1,95 kg",
    capacidade: "2 pessoas",
    avaliacao: undefined,
    linkAfiliado: "",
    plataforma: undefined,
    lojas: [],
    especificacoes: {
      material: "Poliéster 20D (teto) / Poliéster 40D (piso)",
      varetas: "Alumínio",
      dimensoesInterna: "2,10 × 1,25 m (cabeça) / 1,05 m (pés)",
      dimensoesEmbalada: "39 × 12 × 12 cm",
      resistenciaVento: "70 km/h (Força 8)",
    },
  },
  {
    nome: "Coleman Sundome 4",
    categoria: "Barracas",
    imagem: "",
    descricao:
      "Barraca de camping tradicional com design dome. Sistema WeatherTec com costuras soldadas e piso tipo banheira.",
    melhorPara: "Camping de carro e acampamentos estruturados",
    colunaDagua: undefined,
    peso: "4,1 kg",
    capacidade: "4 pessoas",
    avaliacao: undefined,
    linkAfiliado: "",
    plataforma: undefined,
    lojas: [],
    especificacoes: {
      material: "Poliéster 75D (teto) / Polietileno 1000D (piso)",
      varetas: "Fibra de vidro 11mm",
      dimensoesInterna: "2,74 × 2,13 m",
      dimensoesEmbalada: "58 × 15 × 15 cm",
      features: "E-port, 2 janelas, ventilação no solo",
    },
  },
  {
    nome: "Trilhas & Rumos Super Esquilo 2",
    categoria: "Barracas",
    imagem: "",
    descricao:
      "Barraca compacta brasileira com avanço de 3 posições. Costuras seladas de fábrica e tratamento UV 50+.",
    melhorPara: "Trekking e camping com marca nacional",
    colunaDagua: "2000 mm",
    peso: "3,8 kg",
    capacidade: "2 pessoas",
    avaliacao: undefined,
    linkAfiliado: "",
    plataforma: undefined,
    lojas: [],
    especificacoes: {
      material: "Não confirmado",
      varetas: "Fibra oca com luvas metálicas",
      features: "Avanço 3 posições, estabilizadores laterais, tratamento UV 50+",
    },
  },
];
