# Usa uma imagem leve do Node.js para a fase de build
FROM node:18-alpine AS build

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos essenciais primeiro para aproveitar o cache do Docker
COPY package.json package-lock.json* ./

# Instala as dependências
RUN npm install --frozen-lockfile

# Copia o restante do código para o container
COPY . .

# Compila o projeto para produção
RUN npm run build

# Usa Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copia os arquivos gerados no build para a pasta padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposição da porta padrão do Nginx
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
