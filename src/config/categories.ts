export const categories = [
  "Mochilas",
  "Barracas",
  "Sacos de Dormir",
  "Isolamentos Térmicos",
  "Cantil e Panelas",
  "Lanterna e Iluminação",
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
  Mochilas: "Análise de容量, coluna d'água, tecidos ripstop e sistemas de costela para mochilões de todos os tamanhos.",
  Barracas: "Resistência ao vento, impermeabilidade, peso e facilidade de montagem para acampamentos e trekking.",
  "Sacos de Dormir": "Temperatura de conforto, isolamento sintético vs. Down, peso e体积 para noites sob as estrelas.",
  "Isolamentos Térmicos": "R-values, espessuras e materiais de isolamento para dormir com conforto em qualquer terreno.",
  "Cantil e Panelas": "Materiais leves, durabilidade e funcionalidade para cozinha de trilha e acampamento.",
  "Lanterna e Iluminação": "Lumens, autonomia de bateria, resistência à água e tipos de iluminação para acampamento.",
};
