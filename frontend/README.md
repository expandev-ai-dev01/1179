# Cadastro de Bancos 2

Sistema para cadastrar os dados básicos dos bancos do sistema financeiro brasileiro (apenas código e nome).

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/       # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── types/            # Tipos globais
│   └── utils/            # Funções utilitárias
├── domain/               # Domínios de negócio
├── pages/                # Páginas da aplicação
│   └── layouts/         # Layouts compartilhados
└── main.tsx             # Ponto de entrada
```

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente:
```
VITE_API_URL=http://localhost:4000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Funcionalidades

- Cadastro de Bancos
- Consulta de Bancos
- Edição de Bancos
- Exclusão de Bancos
- Validação de Dados
- Exportação de Dados

## Padrões de Código

- TypeScript estrito
- Componentes funcionais com hooks
- Separação de responsabilidades
- Documentação JSDoc
- Nomenclatura consistente

## Licença

Private