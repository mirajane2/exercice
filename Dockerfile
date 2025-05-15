# Étape 1 : Construire l'application Angular
FROM node:18-alpine AS build

# Crée un répertoire de travail dans le conteneur
WORKDIR /app

# Copie le fichier package.json et package-lock.json (ou yarn.lock)
COPY package*.json ./

# Installe les dépendances de l'application
RUN npm install

# Copie tout le code source dans le conteneur
COPY . .

# Compile l'application Angular pour la production
RUN npm run build --prod

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine

# Copie les fichiers construits par Angular dans le dossier Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose le port 80 pour servir l'application
EXPOSE 80

# Démarre Nginx pour servir l'application
CMD ["nginx", "-g", "daemon off;"]
