Mini projet Projet Docker et 	docker-compose

1-Installer Docker
2-Cree nouveau projet node , appelé ‘new_project_docker

npm init –y
npm install express sequelize pg pg-hstore

3-Cree un fichier app.js

4-Configurer la base de données PostgreSQL
npx sequelize-cli init

5-Cree fichier docker ‘Dockerfile’

6-Créer image Docker
docker build -t my-node-app .

7-Executer conteneur Docker
docker run -p 3000:3000 my-node-app

8-Cree docker-compose.yml

9-Executer avec docker compoe
docker-compose up –build