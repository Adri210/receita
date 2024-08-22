

# Sistema de Receitas

Este projeto é um sistema de gerenciamento de receitas, desenvolvido com **React** no frontend e **Express** no backend. Ele permite visualizar, adicionar, excluir e buscar receitas.

## Funcionalidades

- Listar todas as receitas disponíveis.
- Visualizar detalhes de uma receita específica.
- Adicionar uma nova receita ao sistema.
- Excluir uma receita existente.
  
## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Express (Node.js)
- **Banco de Dados:** Array in-memory (não persistente)
- **Estilização:** CSS
- **Comunicação:** API REST utilizando o método `fetch`

## Instalação

### Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (versão 12 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)

### Instruções de Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/sistema-receitas.git
   ```

2. Navegue para o diretório do projeto:

   ```bash
   cd sistema-receitas
   ```

3. Instale as dependências do backend e do frontend:

   - Na pasta *server.js* (para backend):
     ```
    npm install -g json-server
    json-server --watch db.json --port 5004
     ```

   
  - Para o frontend:
     ```
     npm install
     ```


## Estrutura do Projeto

```
/public
   |-- /styles       # Arquivos de estilo CSS
   |-- /images       # Imagens usadas na aplicação
/server               # Código do servidor Express
/src                  # Código fonte do frontend React
   |-- /components    # Componentes React
   |-- App.js         # Componente principal do React
```

## Como Usar

1. Ao iniciar a aplicação, a página principal exibirá a lista de receitas disponíveis.
2. Clique no título de qualquer receita para visualizar seus detalhes.
3. Utilize o botão "Adicionar Nova Receita" para incluir uma nova receita no sistema.
4. No detalhe de uma receita, você pode excluir a mesma clicando no botão "Excluir Receita".


## Contato

- Nome: Adriani Delfino
- E-mail: engs-adrianidelfino@camporeal.edu.br

---

