export const categories = [
  "Barracas",
  "Cozinha de Camping",
  "Dormir",
  "Mochilas e Transporte",
  "Energia e Iluminação",
] as const;

export type Category = (typeof categories)[number];

export const categorySlug = (category: string) =>
  category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const categoryDescriptions: Record<Category, string> = {
  Barracas: "Resistência ao vento, impermeabilidade, peso e facilidade de montagem para acampamentos e trekking.",
  "Cozinha de Camping": "Geladeiras portáteis, fogareiros, utensílios e tudo para comer e beber bem no acampamento ou na estrada.",
  Dormir: "Sacos de dormir, isolantes térmicos e conforto para a noite no acampamento.",
  "Mochilas e Transporte": "Mochilas, cargueiras, sacos estanques e tudo para levar sua carga.",
  "Energia e Iluminação": "Lanternas, lanternas de cabeça, estações de energia e energia solar para acampar fora da rede.",
};
