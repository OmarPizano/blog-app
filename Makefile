USER_ID := $(shell id -u)
GROUP_ID := $(shell id -g)

init:
	docker run \
	-it \
	--rm \
	--volume ".:/home/node" \
	--workdir /home/node \
	--user $(USER_ID):$(GROUP_ID) \
	node \
	bash -c "npm install && npm install --prefix client"
	find . -type f -name ".bash_history" -exec rm {} \;

build_client:
	docker run \
	-it \
	--rm \
	--volume ".:/home/node" \
	--workdir /home/node \
	--user $(USER_ID):$(GROUP_ID) \
	node \
	bash -c "npm run build --prefix client"
	find . -type f -name ".bash_history" -exec rm {} \;

start:
	docker compose up -d

restart:
	docker compose down && docker compose up -d

stop:
	docker compose down

stopclean:
	docker compose down -v && docker rmi blog-server blog-client

cleanall:
	find $(SRC) -depth -type d -name '.npm' -exec rm -rf {} \;
	find $(SRC) -type d -regex '.\/*[a-zA-Z0-9]*\/node_modules' -exec rm -rf {} \;

status:
	docker ps -a

logserver:
	docker logs blog-server

logclient:
	docker logs blog-client

logdb:
	docker logs blog-db

shelldb:
	docker exec -it blog-db mongosh

shellserver:
	docker exec -it blog-server bash
	find . -type f -name ".bash_history" -exec rm {} \;

shellclient:
	docker exec -it blog-client bash
	find . -type f -name ".bash_history" -exec rm {} \;

nodeutils:
	docker run \
	-it \
	--rm \
	--volume ".:/home/node" \
	--workdir /home/node \
	--user $(USER_ID):$(GROUP_ID) \
	node \
	bash
	find . -type f -name ".bash_history" -exec rm {} \;