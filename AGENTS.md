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
