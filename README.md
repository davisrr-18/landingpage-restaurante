# Restaurante Fictício

Landing page de um restaurante fictício de cozinha contemporânea brasileira, feita com **React**, **HTML semântico** e **CSS Modules**. É um projeto de portfólio: o restaurante, o cardápio e as reservas não existem de verdade.

## Demonstração

- **Live demo:** _em breve — adicione aqui o link do deploy (Vercel, Netlify ou GitHub Pages)_

| Desktop | Mobile |
|---|---|
| _adicione `docs/desktop.png`_ | _adicione `docs/mobile.png`_ |

## Stack

| Tecnologia | Uso |
|---|---|
| React 19 | Componentes funcionais e hooks |
| Vite 6 | Servidor de desenvolvimento e build de produção |
| CSS Modules | Estilos com escopo por componente |
| JavaScript (ES Modules) | Sem TypeScript e sem bibliotecas de UI |

## Seções da página

Cabeçalho fixo com menu mobile, abertura com chamada para reserva, sobre a casa, destaques do cardápio, galeria, depoimentos, formulário de reserva, contato com horários e rodapé.

## Decisões de engenharia

### Arquitetura modular

- `features/` guarda cada seção da landing como uma unidade independente (componente + estilo).
- `components/ui/` tem peças reutilizáveis (`Button`, `Section`); `components/layout/` tem a estrutura fixa (`Header`, `Footer`).
- `data/` concentra o conteúdo estático, separado da apresentação. Trocar o cardápio ou os horários não exige mexer em componentes.
- `hooks/` isola comportamento compartilhado, como a rolagem suave entre seções.

### CSS sem framework

- CSS Modules evitam colisão de classes sem depender de Tailwind, Bootstrap ou bibliotecas de componentes.
- Tokens de design em variáveis CSS (`--color-accent`, `--header-height`, `--max-width`).
- Tipografia fluida com `clamp()` e grids que se ajustam sozinhos com `minmax()` e `auto-fit`.
- Layout testado de 320px a 1440px, sem rolagem horizontal.

### Validação defensiva no formulário de reserva

- Data digitada no padrão brasileiro (`dd/mm/aaaa`) com máscara automática, independente do idioma do navegador.
- Rejeita datas inexistentes (como 31/02) e datas no passado, respeitando anos bissextos.
- Nome e e-mail compostos só de espaços são recusados, com mensagem de erro visível.
- Limite de caracteres nos campos (`maxLength`) e número de pessoas restrito a 1–8.

> O formulário é apenas demonstrativo: não há backend e nenhum dado sai do navegador.

### Acessibilidade e usabilidade

- Marcação semântica: `header`, `nav`, `main`, `section`, `article`, `figure`, `footer`.
- Link "Ir para o conteúdo" para quem navega pelo teclado.
- `scroll-margin-top` nas seções, para o cabeçalho fixo não cobrir os títulos ao navegar pelo menu.
- Mensagens do formulário anunciadas a leitores de tela (`role="status"` e `role="alert"`).

## Estrutura de pastas

```
.
├── index.html
├── public/
│   ├── favicon.svg
│   └── images/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── layout/
    │   │   ├── Header/
    │   │   └── Footer/
    │   └── ui/
    │       ├── Button/
    │       └── Section/
    ├── features/
    │   ├── Hero/
    │   ├── About/
    │   ├── Menu/
    │   ├── Gallery/
    │   ├── Testimonials/
    │   ├── Reservations/
    │   └── Contact/
    ├── pages/
    │   └── Home/
    ├── hooks/
    │   └── useScrollToSection.js
    ├── data/
    │   ├── restaurant.js
    │   ├── menu.js
    │   ├── gallery.js
    │   └── testimonials.js
    ├── assets/
    └── styles/
        └── global.css
```

## Como rodar

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

A página abre em `http://localhost:5173/`.

Build de produção:

```bash
npm run build
npm run preview
```

## Créditos

Fotos do [Unsplash](https://unsplash.com), carregadas por link externo. Fontes Cormorant Garamond e Outfit, do [Google Fonts](https://fonts.google.com).
