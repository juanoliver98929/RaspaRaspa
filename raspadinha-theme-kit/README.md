# Raspadinha Theme Kit (Front + Painel)

Este kit serve para **padronizar tema/branding e layout** do seu projeto existente **sem alterar o backend**.
Você pode:
1. **Copiar as pastas** `src/styles`, `src/lib` e as páginas/rotas desejadas para o seu projeto.
2. Ajustar as **cores/variáveis** em `src/styles/theme.css`.
3. Definir a URL da API em `.env.local` com `NEXT_PUBLIC_API_URL`.

> Stack sugerida: Next.js (App Router) + Tailwind. Se o seu projeto usa outra stack, ainda dá para **reaproveitar `theme.css` e `apiClient.ts`**.

## Passos rápidos
1. Copie o conteúdo deste kit para o seu projeto (ou use-o como base).
2. Crie um arquivo `.env.local` e configure:
   ```
   NEXT_PUBLIC_API_URL=https://api.seudominio.com
   ```
3. Troque o logo em `public/logo.svg` e `public/favicon.ico` (opcional).
4. Ajuste as cores/raios/sombras em `src/styles/theme.css`.
5. Execute seu projeto normalmente (ex.: `npm run dev`).

## Estrutura
- `src/styles/theme.css` — **tokens de design** (cores, radius, sombras)
- `src/lib/apiClient.ts` — client de API com `baseURL` + interceptor para JWT
- `src/app/(dashboard)/*` — layout e páginas do **painel**
- `src/app/jogar/page.tsx` — página do **jogo** (com estados prontos)
- `src/app/page.tsx` — home/landing

## Integração com seu backend
- Substitua os endpoints nos lugares marcados com comentários `// TODO: ajuste endpoint`.
- Garanta que o backend aceite CORS dos seus domínios (painel e jogo).
- Autenticação: por padrão, usa header `Authorization: Bearer <token>` se existir em `localStorage`.

## Observações
- Este kit **não inclui** regras de negócio. É só o layout/tema + ligações de front com backend.
- Se você já tem tabelas/rotas, substitua as páginas e componentes gradualmente.
