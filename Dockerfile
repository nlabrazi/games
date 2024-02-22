# Utiliser l'image Node.js pour le backend
FROM node:16.15.1

# Définir le répertoire de travail
WORKDIR /

# Copier les fichiers nécessaires
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel le serveur backend écoute
EXPOSE 5000

# Commande de démarrage du serveur backend
CMD ["npm", "start"]
