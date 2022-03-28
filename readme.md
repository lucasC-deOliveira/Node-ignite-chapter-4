### Comandos uteis do docker
docker ps : mostra uma lista de todos os containers disponiveis em execução
docker ps -a : mostra uma lista de todos os containers disponiveis inclusive os parados
docker rm <id do container> : remove o container
docker start <id do container> : inicia o container
docker stop <id do container> : para o container

docker-compose up -d : executa os serviços com reload em background
docker-compose down : remove todos os serviços
docker-compose stop : para todos os serviços

docker exec -it exec <nome do container> : acessa o container => pra sair "CTRL D"
docker logs <nome do container> : mostra os logs
docker logs <nome do container> -f : fica observando os logs


### Comandos TypeORM 
yarn typeorm migration:create -n nomeDaMigration            => criar migration
yarn typeorm migration:run                                  => executar migration


## jest Comandos
yarn jest --init  Configurar o jest