# Dockerfile
FROM node:18 AS build

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar la configuración de nginx personalizada
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar los archivos construidos
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 3001
EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]