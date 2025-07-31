# Sinergy Landing Page

Este repositório contém a landing page da Sinergy construída com **Next.js 15** e o novo router/app dir.

O projeto está configurado para ser publicado automaticamente no **GitHub Pages**.

---

## Pré-requisitos

* Node.js ≥ 18 (recomendado 20)
* npm ≥ 9 ou Yarn ≥ 1

---

## Ambiente de desenvolvimento

```bash
# instalar dependências
npm install         # ou yarn

# iniciar servidor de desenvolvimento
npm run dev         # ou yarn dev

# abra o navegador em http://localhost:3000
```

Durante o desenvolvimento, qualquer alteração em arquivos dentro de `src/` recarregará a página automaticamente.

---

## Build para produção (estático)

```bash
npm run build       # ou yarn build
```

* O comando gera uma versão **exportada estaticamente** na pasta `out/`, pronta para ser hospedada em qualquer servidor estático.
* A configuração em `next.config.mjs` define:
  * `output: 'export'` ‑ exportação estática
  * `trailingSlash: true` ‑ URLs terminam com `/`, requisito do GitHub Pages
  * `basePath` / `assetPrefix` dinâmicos via `NEXT_PUBLIC_BASE_PATH` (nome do repositório)

---

## Deploy automático no GitHub Pages

1. Faça _push_ para a branch **main**.
2. O GitHub Actions (`.github/workflows/deploy.yml`) irá:
   * Instalar dependências (`npm install`)
   * Executar `npm run build` (export estático)
   * Publicar o conteúdo da pasta `out/` no branch **gh-pages** utilizando [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages).
3. Acesse as configurações do repositório → **Pages** e selecione:
   * **Source**: Branch `gh-pages`, pasta `/`.
4. O site ficará disponível em `https://<usuário>.github.io/<repositório>/`.

Caso utilize um repositório chamado `<usuário>.github.io` (domínio raiz), basta remover a variável `NEXT_PUBLIC_BASE_PATH` da etapa *Build static site* no workflow ou deixá-la vazia.

---

## Estrutura do projeto

```
sinergy/
 ├─ public/            # imagens, vídeos e ícones
 ├─ src/
 │  ├─ app/            # rotas da aplicação (Next.js App Router)
 │  ├─ components/     # componentes reutilizáveis
 │  └─ sections/       # seções da página
 ├─ .github/workflows/ # CI para deploy
 ├─ next.config.mjs    # config Next.js (export estático)
 └─ package.json
```

---

## Fontes e créditos

Este template foi gerado a partir de [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

* Ícones e imagens estão na pasta `public/`.
* Animações Lottie: `src/assets/`.

---

## License

MIT
