# Use a imagem oficial do Node.js como base
FROM node:14

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código da aplicação para o contêiner
COPY . .

# Expor a porta 5004 para permitir o acesso externo
EXPOSE 5004

# Comando para rodar a aplicação
CMD ["node", "index.js"]
