# Desafio Técnico - iForth

Este repositório contém a minha solução para o desafio técnico frontend proposto pela iForth.

## Demo

Você pode acessar a versão publicada aqui:  
[https://iforth-test.vercel.app](https://iforth-test.vercel.app)

## Funcionalidades Implementadas

### Autenticação
- [x] Login com nome de usuário e senha
- [x] Rotas protegidas com `AuthGuard`
- [x] Persistência do usuário via Zustand

### Produtos
- [x] Listagem de produtos com filtro por situação (ativo/inativo/todos)
- [x] Criação de produto com validação e modal de confirmação
- [x] Alteração de status de produto (ativo/inativo)
- [x] Tabela com paginação utilizando `shadcn/ui`

### Apontamentos de Produção
- [x] Listagem de apontamentos com filtros por situação e produto
- [x] Destaque visual para produções fora do padrão de produção
- [x] Visualização da justificativa quando aplicável
- [x] Criação de apontamento com autocomplete de produto
- [x] Modal obrigatório para justificativa de produções fora do padrão
- [x] Modal de confirmação

## Tecnologias Utilizadas

- Next.js 15
- TypeScript
- Zustand (gerenciamento de estado)
- React Hook Form (validação e controle de formulários)
- TailwindCSS (estilização)
- shadcn/ui (componentes de UI)

## Estrutura do Projeto (Feature-based)

```
src
├── app
│ ├── api
│ ├── login
│ ├── products
│ └── production
├── components
│ └── ui # Componentes genéricos de UI (tabela, select, etc.)
├── features
│ ├── auth # Fluxo de autenticação
│ ├── products # Funcionalidade de produtos
│ └── production # Funcionalidade de apontamentos de produção
├── lib
│ ├── mockDb.ts # Banco em memória (mock)
└── shared # Sidebar, modal, botões, etc.
```

## Credenciais para Teste
Usuário: iforth.development.test
Senha: famosaSenha123

## Executar localmente

```
npm install
npm run dev
```
