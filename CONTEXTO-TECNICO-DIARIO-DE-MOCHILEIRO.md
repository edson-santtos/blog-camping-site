# Contexto Técnico — Diário de Mochileiro

Documento de contexto técnico para análise por IA consultora.

---

## 1. Visão Geral

**Diário de Mochileiro** é um portal editorial de afiliados focado em equipamentos de camping e mochilão.

### Stack tecnológica

| Tecnologia | Versão | Função |
|---|---|---|
| Astro | ^7.1.3 | Framework estático (SSG) |
| Tailwind CSS | ^4.3.3 | Estilos via utility-first |
| MDX | ^7.0.3 | Conteúdo de artigos com componentes |
| TypeScript | ^5.8.3 | Tipagem estática |
| rehype-slug | ^6.0.0 | Geração de IDs nos headings |

### Dependências principais

- `@astrojs/sitemap` — geração automática de sitemap
- `@tailwindcss/vite` — integração Tailwind com Vite
- `@astrojs/markdown-remark` — processamento de Markdown

### Deploy

- **Plataforma:** Cloudflare Pages
- **Build:** `npm run build` → pasta `dist/`
- **Observação:** `sharp` foi removido das dependências por incompatibilidade com CF Pages

### Idioma

- pt-BR em todo o site
- `siteConfig.language = "pt-BR"`
- `siteConfig.locale = "pt_BR"`

---

## 2. Árvore do Projeto

```
├── AGENTS.md
├── CONTEXTO-TECNICO-DIARIO-DE-MOCHILEIRO.md
├── package.json
├── astro.config.mjs
├── src/
│   ├── components/
│   │   ├── AffiliateDisclaimer.astro
│   │   ├── ComparisonTable.astro      ← Tabela comparativa de produtos
│   │   ├── FaqAccordion.astro         ← Accordion de perguntas frequentes
│   │   ├── Hero.astro
│   │   ├── LocalIcon.astro
│   │   ├── NewsletterSignup.astro
│   │   ├── PostCard.astro             ← Card de artigo
│   │   ├── ProductGrid.astro          ← Grid de produtos em destaque (Home)
│   │   ├── SiteFooter.astro
│   │   ├── SiteHeader.astro
│   │   ├── TopPick.astro              ← Destaque principal (Home)
│   │   ├── TrustBadges.astro
│   │   └── mdx/
│   │       ├── Callout.astro
│   │       ├── CodeGroup.astro
│   │       └── CodeGroupItem.astro
│   ├── config/
│   │   ├── categories.ts              ← Categorias oficiais
│   │   ├── code.ts                    ← Temas de código
│   │   └── site.ts                    ← Configuração do site
│   ├── content/
│   │   └── posts/
│   │       ├── melhores-barracas-de-camping/
│   │       │   └── index.mdx          ← Artigo: 7 barracas
│   │       └── melhores-barracas-para-motocamping/
│   │           └── index.mdx          ← Artigo: 5 barracas motocamping
│   ├── content.config.ts              ← Schema de conteúdo
│   ├── data/
│   │   └── products/
│   │       ├── types.ts               ← Tipos oficiais de produtos
│   │       ├── index.ts               ← Barrel exports
│   │       └── barracas.ts            ← Dados das 7 barracas
│   ├── layouts/
│   │   └── BaseLayout.astro           ← Layout base (HTML, head, theme)
│   ├── lib/
│   │   └── posts.ts                   ← Funções utilitárias de posts
│   ├── pages/
│   │   ├── index.astro                ← HOME
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── search.astro
│   │   ├── categories.astro
│   │   ├── quem-somos.astro
│   │   ├── politica-de-privacidade.astro
│   │   ├── termos-de-uso.astro
│   │   ├── divulgacao-de-afiliados.astro
│   │   ├── post/
│   │   │   └── [slug].astro           ← Layout do artigo
│   │   ├── posts/
│   │   │   └── [...page].astro        ← Arquivo/paginação
│   │   ├── category/
│   │   │   └── [category].astro
│   │   ├── author/
│   │   │   ├── index.astro
│   │   │   └── [author].astro
│   │   ├── robots.txt.ts
│   │   ├── rss.xml.ts
│   │   ├── search-index.json.ts
│   │   └── sitemap.xml.ts
│   ├── styles/
│   │   └── global.css                 ← Estilos globais (1006 linhas)
│   └── icons/
│       └── bootstrap/
├── public/
│   ├── images/
│   │   └── webp/                      ← Imagens de produtos
│   ├── fonts/
│   │   └── geist/                     ← Fontes Geist
│   ├── favicon.svg
│   └── og-image.png
└── dist/                              ← Build output (não versionado)
```

---

## 3. AGENTS.md

--- INÍCIO AGENTS.md ---

# Regras do Projeto

## Imagens
- Toda imagem enviada para o site DEVE ser convertida para formato WebP antes de ser publicada
- Usar `<picture>` com `<source type="image/webp">` quando possível
- Manter fallback para JPEG/PNG para navegadores antigos
- Adicionar sempre `width` e `height` nos elementos `<img>` para prevenir layout shift (CLS)
- Usar `loading="lazy"` em imagens abaixo do fold
- Usar `fetchpriority="high"` apenas no hero/LCP

## Acessibilidade
- Textos em português pt-BR
- Alt texts descritivos em todas as imagens
- Contraste adequado (WCAG AA)

## Afiliados
- Links com `target="_blank" rel="sponsored nofollow noopener"`
- Nunca afirmar testes físicos - curadoria editorial baseada em specs + reviews

# PROTOCOLO OFICIAL — DIÁRIO DE MOCHILEIRO

## REGRA PRINCIPAL

A partir de agora, o OpenCode atua como EXECUTOR TÉCNICO do projeto.

As decisões editoriais, estratégicas, de pesquisa, SEO e conteúdo serão definidas externamente e entregues ao OpenCode em instruções específicas.

O OpenCode NÃO deve tomar decisões editoriais por conta própria.

Sua função principal é implementar exatamente o que foi solicitado, preservar o que já funciona e verificar tecnicamente o resultado.

---

# 1. NÃO TOMAR DECISÕES EDITORIAIS POR CONTA PRÓPRIA

Não alterar por iniciativa própria:

- títulos;
- H1/H2/H3;
- textos de artigos;
- argumentos editoriais;
- conclusões;
- recomendações de produtos;
- critérios de comparação;
- especificações de produtos;
- preços;
- avaliações;
- links afiliados;
- imagens;
- estratégia SEO;
- palavras-chave;
- estrutura de conteúdo;
- CTAs;
- posicionamento editorial.

Se perceber um possível problema, NÃO corrija silenciosamente.

Informe o problema e aguarde instrução.

---

# 2. NÃO INVENTAR INFORMAÇÕES

Nunca criar ou completar informações que não tenham sido fornecidas ou autorizadas.

É proibido inventar:

- especificações;
- peso;
- dimensões;
- materiais;
- coluna d'água;
- avaliações;
- preços;
- disponibilidade;
- links;
- URLs;
- experiências de uso;
- opiniões de compradores;
- testes;
- rankings;
- dados de fabricantes.

Se uma informação estiver ausente:

- mantenha vazia quando a estrutura permitir;
- ou informe que o dado não está disponível;
- nunca invente um valor para preencher espaço.

---

# 3. NUNCA AFIRMAR TESTE FÍSICO

O Diário de Mochileiro é um projeto editorial baseado em pesquisa.

Nunca escrever ou sugerir que:

- a equipe testou o produto;
- usamos o produto;
- experimentamos o produto;
- acampamos com o produto;
- verificamos pessoalmente a resistência;
- fizemos testes de chuva;
- fizemos testes de vento;
- fizemos testes de durabilidade.

A menos que uma instrução explícita forneça essa informação.

---

# 4. FONTES E CREDIBILIDADE

Quando uma tarefa envolver pesquisa, seguir as fontes fornecidas na instrução.

Dar preferência a:

1. fabricante;
2. varejista autorizado;
3. documentação oficial;
4. fontes especializadas;
5. experiências/reviews reais de compradores quando solicitadas.

Não transformar interpretação em fato.

Exemplo:

ERRADO:
"Esta barraca é extremamente resistente à chuva."

CORRETO:
"A fabricante informa coluna d'água de 4.000 mm."

---

# 5. NÃO ALTERAR LINKS AFILIADOS

Links afiliados são dados críticos.

Nunca:

- substituir;
- encurtar;
- modificar;
- remover;
- trocar parâmetros;
- criar novo link;
- inventar link.

Links afiliados devem permanecer exatamente como fornecidos.

Quando solicitado a criar links afiliados, utilizar somente os links fornecidos.

Todos os links afiliados devem seguir:

target="_blank"
rel="sponsored nofollow noopener"

---

# 6. NÃO ALTERAR PRODUTOS SEM AUTORIZAÇÃO

Não adicionar produtos ao catálogo.

Não remover produtos.

Não trocar produtos.

Não alterar especificações.

Não alterar nomes.

Não alterar links.

Não alterar imagens.

Não alterar avaliações.

Tudo isso exige instrução explícita.

---

# 7. IMAGENS

Não substituir imagens existentes por iniciativa própria.

Não mover imagens.

Não renomear imagens sem necessidade.

Não criar imagens automaticamente.

Quando houver uma instrução específica para imagens:

- seguir exatamente o nome solicitado;
- seguir exatamente a localização solicitada;
- respeitar a estrutura do projeto;
- manter WebP quando essa for a exigência do projeto;
- verificar referências quebradas.

Nunca usar uma imagem genérica para substituir uma imagem solicitada.

---

# 8. SEO

O OpenCode implementa SEO definido na instrução.

Não criar uma estratégia SEO diferente por conta própria.

Não adicionar palavras-chave artificialmente.

Não repetir palavras-chave de forma excessiva.

Não modificar títulos ou headings apenas para "melhorar SEO" sem autorização.

Preservar intenção de busca e estrutura editorial fornecidas.

---

# 9. COMPONENTES EXISTENTES

Antes de criar um novo componente, verificar se já existe um componente adequado.

Reutilizar componentes existentes sempre que possível.

Não criar sistemas duplicados.

Não criar novos tipos de dados quando já existir um tipo oficial adequado.

Não duplicar:

- tipos;
- componentes;
- sistemas de produtos;
- tabelas;
- configurações;
- estruturas de afiliados.

---

# 10. PRESERVAR A ARQUITETURA EXISTENTE

Não refatorar o projeto inteiro para realizar uma alteração simples.

Não mudar framework.

Não trocar bibliotecas.

Não alterar a arquitetura.

Não modificar configurações não relacionadas à tarefa.

Não remover funcionalidades existentes sem autorização.

A regra é:

ALTERAÇÃO MÍNIMA NECESSÁRIA.

---

# 11. BUILD

Depois de qualquer alteração relevante:

1. executar o build;
2. verificar erros;
3. corrigir somente erros relacionados à alteração solicitada;
4. executar o build novamente.

Comando principal:

npm run build

Nunca declarar que a tarefa foi concluída sem verificar o resultado quando o build for aplicável.

---

# 12. SE ENCONTRAR UM PROBLEMA NÃO RELACIONADO

Não corrigir automaticamente.

Informar:

"Encontrei um problema não relacionado à tarefa: [problema]. Não alterei porque ele está fora do escopo."

Isso é importante para evitar alterações inesperadas.

---

# 13. ANTES DE ALTERAR ARQUIVOS IMPORTANTES

Arquivos críticos incluem:

- src/data/products/*
- src/content/*
- src/components/*
- src/config/*
- astro.config.*
- package.json
- tailwind.config.*
- AGENTS.md
- configurações de deploy.

Antes de fazer uma alteração estrutural nesses arquivos:

- verificar o conteúdo atual;
- entender como ele é utilizado;
- alterar somente o necessário.

---

# 14. RELATÓRIO APÓS A EXECUÇÃO

Ao terminar uma tarefa, responder de forma objetiva:

## Alterado
- arquivo
- arquivo
- arquivo

## Não alterado
- itens importantes preservados

## Build
- passou / falhou

## Observações
- somente problemas relevantes encontrados

Não escrever um relatório longo desnecessariamente.

---

# 15. REGRA DE CONFLITO

Se uma instrução nova entrar em conflito com alguma alteração anterior:

NÃO escolher automaticamente.

Informar o conflito e pedir orientação.

---

# 16. REGRA DE SEGURANÇA EDITORIAL

O objetivo do Diário de Mochileiro é parecer um site editorial confiável.

Portanto, sempre preferir:

FATO CONFIRMADO > INTERPRETAÇÃO

FONTE > SUPOSIÇÃO

TRANSPARÊNCIA > PREENCHER ESPAÇO

DADO AUSENTE > DADO INVENTADO

---

# 17. PAPEL DO OPENCODE

O OpenCode é responsável por:

- editar arquivos;
- implementar componentes;
- implementar conteúdo fornecido;
- organizar arquivos;
- corrigir erros técnicos;
- executar build;
- verificar referências;
- preparar o projeto para publicação.

O OpenCode NÃO é responsável por decidir:

- o que publicar;
- qual produto recomendar;
- qual produto é melhor;
- qual informação é verdadeira;
- qual estratégia SEO usar;
- qual conteúdo escrever;
- quais afirmações editoriais fazer.

Essas decisões devem vir em instruções específicas.

---

# 18. FLUXO OFICIAL

O fluxo do projeto passa a ser:

PESQUISA
↓
ANÁLISE
↓
PLANEJAMENTO EDITORIAL
↓
CONTEÚDO APROVADO
↓
INSTRUÇÃO PARA OPENCODE
↓
IMPLEMENTAÇÃO
↓
BUILD
↓
AUDITORIA
↓
PUBLICAÇÃO

O OpenCode começa sua responsabilidade na etapa de IMPLEMENTAÇÃO.

---

# 19. PRINCÍPIO FINAL

Quando houver dúvida:

NÃO INVENTE.
NÃO ASSUMA.
NÃO "MELHORE" POR CONTA PRÓPRIA.
NÃO ALTERE O QUE NÃO FOI SOLICITADO.

Pergunte ou informe o problema.

A prioridade é preservar a integridade editorial, técnica e SEO do Diário de Mochileiro.

--- FIM AGENTS.md ---

---

## 4. package.json

```json
{
  "name": "monograph-astro-theme",
  "description": "A text-first Astro blog theme with command-palette search and a light/dark reading mode.",
  "type": "module",
  "version": "1.0.0",
  "author": "Andrei Alba",
  "license": "MIT",
  "private": false,
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "check": "astro check",
    "release:check": "npm run check && npm run build && npm run format:check",
    "preview": "astro preview",
    "astro": "astro",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  },
  "dependencies": {
    "@astrojs/markdown-remark": "^7.2.1",
    "@astrojs/mdx": "^7.0.3",
    "@astrojs/sitemap": "^3.7.3",
    "@tailwindcss/vite": "^4.3.3",
    "astro": "^7.1.3",
    "rehype-slug": "^6.0.0",
    "tailwindcss": "^4.3.3"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.9",
    "@types/node": "^22.16.5",
    "prettier": "^3.9.6",
    "typescript": "^5.8.3",
    "vite": "^8.1.5"
  }
}
```

**Nota:** `package-lock.json` existe mas não é incluído integralmente neste documento. `sharp` foi removido das dependências por incompatibilidade com Cloudflare Pages.

---

## 5. Tipos de Produtos

**Arquivo:** `src/data/products/types.ts`

### Tipos principais

```typescript
export type PlataformaAfiliado =
  | "Amazon"
  | "Shopee"
  | "Mercado Livre"
  | "Magalu"
  | "Outro";

export interface LojaAfiliado {
  nome: PlataformaAfiliado;
  url: string;
}

export interface ProdutoBase {
  id?: string;
  nome: string;
  categoria: string;
  imagem: string;
  descricao?: string;
  destaque?: string;
  especificacoes?: {
    peso?: string;
    dimensoes?: string;
    capacidade?: string;
    material?: string;
    temperatura?: string;
    [key: string]: string | undefined;
  };
  avaliacao?: number;
  totalAvaliacoes?: number;
  melhorPara?: string;
  pontosFortes?: string[];
  linkAfiliado?: string;
  plataforma?: PlataformaAfiliado;
  lojas?: LojaAfiliado[];
}

export interface ProdutoEmDestaque extends ProdutoBase {
  nome: string;
  categoria: string;
  imagem: string;
  destaque?: string;
  avaliacao?: number;
  linkAfiliado?: string;
  plataforma?: PlataformaAfiliado;
}

export interface ProdutoTopPick extends ProdutoBase {
  nome: string;
  categoria: string;
  imagem: string;
  descricao: string;
  pontosFortes: string[];
  linkAfiliado: string;
  plataforma: PlataformaAfiliado;
}

export interface ProdutoComparacao extends ProdutoBase {
  nome: string;
  categoria: string;
  imagem: string;
  colunaDagua?: string;
  peso?: string;
  capacidade?: string;
  temperaturaMinima?: string;
  rValue?: string;
  lumens?: string;
  autonomia?: string;
  melhorPara?: string;
  avaliacao?: number;
  lojas?: LojaAfiliado[];
}

export interface PlataformaConfig {
  label: string;
  class: string;
  icon?: string;
}

export const plataformaConfig: Record<PlataformaAfiliado, PlataformaConfig> = {
  Amazon: { label: "Ver Preço na Amazon", class: "btn-amazon", icon: "..." },
  Shopee: { label: "Ver Oferta na Shopee", class: "btn-shopee", icon: "..." },
  "Mercado Livre": { label: "Ver no Mercado Livre", class: "btn-mercadolivre", icon: "..." },
  Magalu: { label: "Ver na Magalu", class: "btn-magalu", icon: "..." },
  Outro: { label: "Ver Oferta", class: "btn-outro", icon: "..." },
};
```

### Onde os tipos são utilizados

| Tipo | Componente | Uso |
|---|---|---|
| `ProdutoEmDestaque` | `ProductGrid.astro` | Cards de produtos na Home |
| `ProdutoTopPick` | `TopPick.astro` | Destaque principal na Home |
| `ProdutoComparacao` | `ComparisonTable.astro` | Tabela comparativa em artigos |
| `PlataformaConfig` | Todos os componentes | Renderização de botões CTA |

---

## 6. Dados de Produtos

### `src/data/products/index.ts`

```typescript
export type {
  ProdutoBase,
  ProdutoEmDestaque,
  ProdutoTopPick,
  ProdutoComparacao,
  PlataformaAfiliado,
  LojaAfiliado,
  PlataformaConfig,
} from "./types";

export { plataformaConfig } from "./types";
export { barracas } from "./barracas";
```

### `src/data/products/barracas.ts`

Arquivo com 7 produtos do tipo `ProdutoComparacao[]`.

**Estrutura de cada objeto:**

```typescript
{
  nome: "Naturehike Cloud Up 2X Ultralight 210T",
  categoria: "Barracas",
  imagem: "",                              // vazio até fornecer imagem real
  descricao: "Barraca ultraleve autoportante...",
  melhorPara: "Trekking e mochilão com foco em leveza",
  colunaDagua: "3000 mm",
  peso: "2,15 kg (total) / 1,89 kg (sem footprint)",
  capacidade: "2 pessoas",
  avaliacao: undefined,                    // só quando confirmada
  linkAfiliado: "",                        // vazio até fornecer link real
  plataforma: undefined,
  lojas: [],
  especificacoes: {
    material: "Nylon 210T...",
    varetas: "Alumínio 7001",
    dimensoesInterna: "1,20 × 2,10 m",
    dimensoesEmbalada: "40 × 13 cm",
    footprint: "Incluído (230g)",
  },
}
```

**Produtos listados:**

1. Naturehike Cloud Up 2X Ultralight 210T — 2,15 kg, 3000 mm, 2 pessoas
2. Naturehike Cloud Up 2X Ultralight 20D — 1,80 kg, 3000 mm, 2 pessoas
3. Naturehike Cloud Up 3 20D — 1,85 kg, 4000 mm, 3 pessoas
4. Quechua Arpenaz 4.1 Fresh & Black — 10,6 kg, 2000/2400 mm, 4 pessoas
5. Forclaz Trek 900 Dome 2P — 1,95 kg, 2000/3000 mm, 2 pessoas
6. Coleman Sundome 4 — 4,1 kg, sem coluna d'água confirmada, 4 pessoas
7. Trilhas & Rumos Super Esquilo 2 — 3,8 kg, 2000 mm, 2 pessoas

**Regras dos dados:**
- `linkAfiliado: ""` até que links reais sejam fornecidos
- `imagem: ""` até que imagens reais sejam fornecidas
- `avaliacao: undefined` até que seja confirmada por fonte confiável
- Nunca inventar especificações, preços ou avaliações

---

## 7. Componentes Importantes

### ComparisonTable.astro

**Localização:** `src/components/ComparisonTable.astro`

**Props:**
```typescript
interface Props {
  titulo?: string;
  produtos: ProdutoComparacao[];
}
```

**Funcionamento:**
- Renderiza tabela HTML com colunas dinâmicas (só aparece se algum produto tiver o campo)
- Colunas possíveis: #, Produto, Melhor para, Coluna d'água, Peso, Capacidade, Temperatura, R-Value, Lumens, Avaliação, Loja
- Mobile: scroll horizontal com dica "arraste →"
- CTA: botão com link afiliado e `target="_blank" rel="sponsored nofollow noopener"`
- Avaliação: estrelas SVG (preenchida, meia, vazia)
- Badge numérico no índice (#1, #2, etc.)

**Uso em MDX:**
```mdx
import ComparisonTable from "@/components/ComparisonTable.astro";
import { barracas } from "@/data/products";

<ComparisonTable titulo="Barracas — Comparativo" produtos={barracas} />
```

### ProductGrid.astro

**Localização:** `src/components/ProductGrid.astro`

**Props:**
```typescript
interface Props {
  titulo: string;
  subtitulo?: string;
  produtos: ProdutoEmDestaque[];
}
```

**Funcionamento:**
- Grid responsivo: `repeat(auto-fill, minmax(min(100%, 18rem), 1fr))`
- Cada card: imagem, categoria (badge), nome, destaque, avaliação (opcional), botão afiliado
- Avaliação é condicional: `{produto.avaliacao != null && (...)`
- Botão usa `plataformaConfig` para label e classe CSS (Amazon=amarelo, Shopee=laranja, ML=amarelo, Magalu=azul)
- Todos os botões têm `target="_blank" rel="sponsored nofollow noopener"`

### TopPick.astro

**Localização:** `src/components/TopPick.astro`

**Props:**
```typescript
interface Props {
  produto: ProdutoTopPick;
}
```

**Funcionamento:**
- Card destaque com badge "Melhor Custo-Benefício"
- Layout: imagem à esquerda, conteúdo à direita (grid 1fr 1.5fr em desktop)
- Lista de pontos fortes com ícones de check verde
- Botão CTA afiliado
- Borda accentada (2px com cor accent)

### FaqAccordion.astro

**Localização:** `src/components/FaqAccordion.astro`

**Props:**
```typescript
interface FaqItem {
  pergunta: string;
  resposta: string;
}

interface Props {
  titulo?: string;  // default: "Perguntas Frequentes"
  itens: FaqItem[];
}
```

**Funcionamento:**
- Usa `<details>` HTML nativo (sem JS)
- Primeiro item abre por padrão
- Chevron SVG que gira 180° ao abrir
- Max-width: 48rem

---

## 8. Home

**Arquivo:** `src/pages/index.astro`

### Estrutura da Home

```
1. Hero limpo (título + subtítulo + CTA âncora)
2. Categorias (grid de 7 categorias com ícones SVG)
3. ProductGrid — "Equipamentos em destaque" (6 cards)
4. TopPick — "Melhor Custo-Benefício" (1 destaque)
5. TrustBadges — "Como Selecionamos"
6. Guia Rápido de Materiais (4 cards)
7. Últimos Artigos (grid de PostCards)
8. FaqAccordion (5 perguntas)
```

### "Equipamentos em destaque"

**Dados:** Definidos inline no `index.astro` como `const produtosDestaque = [...]`

**Estrutura de cada produto:**
```typescript
{
  nome: "Barraca Joyfox J-288",
  categoria: "Barracas",
  imagem: "/images/webp/Barraca Joyfox Para 2 Pessoas, Impermeável _3500mm e Ultraleve_motocicletas.webp",
  destaque: "2,6 kg | 3500 mm | Até 3 pessoas",
  linkAfiliado: "https://meli.la/2286N2G",
  plataforma: "Mercado Livre" as const,
}
```

**Observações:**
- A Joyfox J-288 NÃO tem campo `avaliacao` → estrelas não são renderizadas
- Imagem: caminho local em `/images/webp/`
- Link de afiliado: URL encurtada Mercado Livre
- CTA: "Ver no Mercado Livre" (amarelo ML)
- Os outros 5 produtos são genéricos com imagens Unsplash e links de exemplo

### Categorias

Definidas inline no `index.astro`:
```typescript
const categorias = [
  { nome: "Barracas", slug: "barracas", icon: "M3 21V7l9-4 9 4v14M9 21V11h6v10" },
  { nome: "Mochilas", slug: "mochilas", icon: "..." },
  { nome: "Fogareiros", slug: "fogareiros", icon: "..." },
  { nome: "Iluminação", slug: "iluminacao", icon: "..." },
  { nome: "Cozinha de Camping", slug: "cozinha-de-camping", icon: "..." },
  { nome: "Sacos de Dormir", slug: "sacos-de-dormir", icon: "..." },
  { nome: "Isolantes Térmicos", slug: "isolantes-termicos", icon: "..." },
];
```

### Últimos Artigos

Vem de `getCollection("posts")` → filtrado por `visiblePosts()` → pegos os 6 mais recentes.

---

## 9. Artigos

### Sistema de conteúdo

**Arquivo:** `src/content.config.ts`

```typescript
const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      category: z.enum(categories),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.object({
        name: z.string(),
        role: z.string(),
      }),
      cover: z.object({
        src: image(),
        alt: z.string(),
        creditName: z.string().optional(),
        creditUrl: z.url().optional(),
      }).optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});
```

### Frontmatter de um artigo

```yaml
---
title: "Melhores Barracas de Camping: 7 Opções Reais para Cada Tipo de Aventura"
excerpt: "Comparativo de 7 barracas de camping com especificações reais pesquisadas."
category: "Barracas"          # deve existir em categories.ts
date: 2026-09-14
author:
  name: "Equipe Diário de Mochileiro"
  role: "Curadoria e Análise Técnica"
featured: true                 # aparece na Home
---
```

### Estrutura de um artigo MDX

```mdx
import ComparisonTable from "@/components/ComparisonTable.astro";
import { barracas } from "@/data/products";
import FaqAccordion from "@/components/FaqAccordion.astro";

[texto do artigo]

<ComparisonTable titulo="..." produtos={barracas} />

[mais texto]

<FaqAccordion
  titulo="Dúvidas sobre..."
  itens={[
    { pergunta: "...", resposta: "..." },
  ]}
/>
```

### Componentes disponíveis em MDX

- `ComparisonTable` — tabela comparativa
- `FaqAccordion` — accordion de perguntas
- `Callout` — notas/dicas/avisos (Nota, Dica, Aviso, Importante)
- `CodeGroup` — abas de código
- `CodeGroupItem` — item de código dentro do CodeGroup

### Imagens

- Cover image: usa `image()` helper do Astro, deve estar em `src/assets/`
- Imagens inline: caminhos em `public/images/webp/`
- Formato: WebP obrigatório
- Sempre com `width`, `height`, `loading="lazy"`

### Links de afiliado em artigos

```html
<a href="https://meli.la/2286N2G" target="_blank" rel="sponsored nofollow noopener">
  Ver no Mercado Livre
</a>
```

---

## 10. Artigo das 7 Barracas

**Arquivo:** `src/content/posts/melhores-barracas-de-camping/index.mdx`

Este artigo é o primeiro teste para futura nova arquitetura.

### Estrutura

1. Frontmatter (título, excerpt, category, date, author, featured)
2. Imports (ComparisonTable, barracas, FaqAccordion)
3. Introdução editorial
4. Comparativo Rápido → `<ComparisonTable>`
5. Como Escolhemos (3 critérios)
6. Análise das 7 barracas (seções H3)
7. Qual Barraca Escolher para Cada Tipo
8. O que Saber Antes de Comprar (5 seções H3)
9. Perguntas Frequentes → `<FaqAccordion>` (8 perguntas)
10. Conclusão

### Componentes utilizados

- `ComparisonTable` com `produtos={barracas}` (dados de `src/data/products/barracas.ts`)
- `FaqAccordion` com 8 perguntas inline

### Dados

Usa o array `barracas` importado de `@/data/products`. Todos os 7 produtos têm `linkAfiliado: ""` e `imagem: ""`.

---

## 11. Artigo de Motocamping

**Arquivo:** `src/content/posts/melhores-barracas-para-motocamping/index.mdx`

### Estrutura

1. Frontmatter (similar ao anterior, featured: false)
2. Imports (ComparisonTable, FaqAccordion)
3. Introdução editorial
4. Nota editorial (não realizou testes físicos)
5. Comparativo Rápido → `<ComparisonTable>` com dados inline
6. Análise das 5 barracas (seções H3 com imagens inline)
7. Qual Barraca Escolher
8. Perguntas Frequentes → `<FaqAccordion>`
9. Conclusão

### Diferenças do artigo das 7 barracas

- **Dados inline:** A ComparisonTable recebe os 5 produtos como array inline no MDX (não importa de `barracas.ts`)
- **Imagens inline:** Cada análise tem imagem `<img>` com caminho em `/images/webp/`
- **Cover image:** Usa `src/assets/images/barraca-joyfox-j288-motocamping.webp`
- **CTAs amarelos:** Botões com estilo `bg-yellow-400 text-black`
- **5 links de afiliado Mercado Livre**

### Imagens

- 5 imagens de produtos em `public/images/webp/`
- 1 cover image em `src/assets/images/`
- Estilo inline: `max-height:28rem; object-fit:contain; margin:0 auto`

---

## 12. Layout do Post

**Arquivo:** `src/pages/post/[slug].astro`

### Funcionamento

- `getStaticPaths()` gera uma página para cada post visível
- Renderiza o conteúdo MDX com `<Content components={mdxComponents} />`
- Componentes MDX disponíveis: `Callout`, `CodeGroup`, `CodeGroupItem`

### Estrutura da página

```
1. Header do artigo
   - Byline: "Por [autor] em [categoria]"
   - Data + tempo de leitura
   - Título (H1)
   - Excerpt
   - Data de atualização (se houver)
   - Botões de compartilhar (X, Facebook, LinkedIn, Copiar link)
2. Cover image (se houver)
3. Conteúdo MDX (prose)
4. Navegação: Anterior / Próximo
5. Artigos relacionados ("Continue lendo")
```

### Funções utilitárias (posts.ts)

- `readingLabel(post)` → "X min de leitura"
- `formatDate(date, "long")` → "14 de set. de 2026"
- `postSlug(post)` → slug da URL
- `postHref(post)` → "/post/slug/"
- `getAdjacent(posts, post)` → { newer, older }
- `getRelated(posts, post)` → até 3 posts da mesma categoria
- `visiblePosts(posts)` → filtra drafts e ordena por data

---

## 13. CSS / Estilos

**Arquivo:** `src/styles/global.css` (1006 linhas)

### Sistema de estilos

- Tailwind CSS 4 via Vite plugin
- CSS customizado com variáveis (tokens de design)
- Tema claro/escuro via `data-theme`
- Fonte principal: Geist (sans-serif)

### Breakpoints

| Breakpoint | Uso |
|---|---|
| `640px` | Grid de categorias (3→4 colunas) |
| `768px` | Layout desktop geral, grid de artigos |
| `40rem` (640px) | Meta dates em artigos |

### Larguras

| Variável | Valor |
|---|---|
| `--layout-wide` | 75rem |
| `--layout-content` | 45rem |
| `--gutter` | 1.5rem (mobile) / 2.5rem (desktop) |

### Tokens de cor (modo claro)

```css
--background: #ffffff;
--card: #ffffff;
--muted: #f4f4f5;
--foreground: #17171a;
--muted-foreground: #6b6b73;
--accent: #1a4fa0;
--border: #e6e6e8;
--tip: #0f7a52;
--warning: #8a5b06;
--danger: #b42318;
```

### Estilos de cards (ProductGrid)

- Grid: `repeat(auto-fill, minmax(min(100%, 18rem), 1fr))`
- Border: `1px solid var(--border)`
- Hover: border accent + shadow
- Imagem: `object-fit: contain` (mobile) / `object-fit: cover` (desktop 4:3)
- Rating: estrelas condicionais

### Estilos de artigo (prose)

- Fonte display: `clamp(2.25rem, 6.5vw, 4rem)` para H1
- Excerpt: `clamp(1.125rem, 2.4vw, 1.4rem)`
- Cover image: `max-height: 32rem`
- Share buttons: ícones circulares 2.5rem

### Estilos de ComparisonTable

- Min-width: 600px (480px mobile)
- Scroll horizontal com `-webkit-overflow-scrolling: touch`
- CTA: `font-size: 0.75rem`, fundo `var(--foreground)`
- Mobile: dica "arraste →"

### Comportamento mobile

- Cards de produto: grid responsivo
- Tabela comparativa: scroll horizontal
- Meta dates: flex-basis 100% em mobile
- Hero: padding reduzido em mobile

---

## 14. Arquitetura Atual

### HOME

```
src/pages/index.astro
├── SiteHeader (navegação)
├── Hero (título + CTA âncora)
├── Categorias (grid inline)
├── ProductGrid (produtos inline em produtosDestaque)
├── TopPick (destaque inline em melhorCustoBeneficio)
├── TrustBadges
├── Guia Rápido (inline)
├── Últimos Artigos (getCollection → PostCard)
├── FaqAccordion (itens inline)
└── SiteFooter
```

**Dados dos produtos:** Inline no `index.astro` (não vindos de `src/data/products/`)

### ARTIGO

```
src/content/posts/[slug]/index.mdx
├── Frontmatter (title, excerpt, category, date, author, cover)
├── Imports (ComparisonTable, dados, FaqAccordion)
├── Conteúdo MDX
│   ├── Texto editorial
│   ├── <ComparisonTable produtos={...} />
│   ├── Análises (H3 com imagens)
│   └── <FaqAccordion itens={[...]} />
└── Navegação (Anterior/Próximo + Relacionados)
```

**Renderização:** `src/pages/post/[slug].astro` → `<Content components={mdxComponents} />`

**Dados dos produtos para tabelas:**
- Artigo das 7 barracas: importa `barracas` de `@/data/products`
- Artigo de motocamping: array inline no MDX

### FLUXO DE DADOS

```
src/data/products/barracas.ts (dados)
    ↓
src/content/posts/*/index.mdx (importa dados)
    ↓
ComparisonTable.astro (renderiza tabela)
    ↓
post/[slug].astro (renderiza artigo)
    ↓
dist/post/[slug]/index.html (build estático)
```

---

## 15. Tamanho do Documento

Este documento tem aproximadamente 800 linhas.

**Prioridade de informação:**
1. Arquitetura e fluxo de dados
2. Tipos e interfaces
3. Componentes principais
4. Dados de produtos
5. Estrutura de artigos
6. Estilos relevantes

**Não incluído:**
- package-lock.json
- node_modules
- dist/
- .git/
- Arquivos de ícones (bootstrap)
- CSS completo (1006 linhas — apenas trechos relevantes)
- Páginas secundárias (404, about, contact, etc.)

---

## 16. Segurança

Nenhuma credencial, token ou chave de API foi encontrada nos arquivos analisados.

- `siteConfig.email`: `contato@diariodemochileiro.com.br` (email público)
- `siteConfig.siteUrl`: `https://diariodemochileiro.com.br` (URL pública)
- Links de afiliado: URLs encurtadas Mercado Livre (públicas)

**[CREDENCIAL OMITIDA]** — Nenhuma encontrada.

---

## 17. Validação

Build do projeto (última verificação):

```
17 page(s) built in 3.88s — sem erros
```

Nenhum arquivo existente foi modificado durante a criação deste documento.
