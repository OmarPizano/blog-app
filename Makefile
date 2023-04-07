SRC := src
NODE_CONTAINER_WORKDIR :=/home/node
NODE_CONTAINER_NAME := node
BACKEND_DIR := $(SRC)/backend
FRONTEND_DIR := $(SRC)/frontend
USER_ID := $(shell id -u)
GROUP_ID := $(shell id -g)

init:
	docker run \
	-it \
	--rm \
	--volume "./$(SRC):$(NODE_CONTAINER_WORKDIR)" \
	--workdir $(NODE_CONTAINER_WORKDIR) \
	--user $(USER_ID):$(GROUP_ID) \
	$(NODE_CONTAINER_NAME) \
	scripts/init.sh
	find . -type f -name ".bash_history" -exec rm {} \;

start:
	docker compose up -d

startbuild:
	docker compose up -d --build

restart:
	docker compose down && docker compose up -d

stop:
	docker compose down

stopclean:
	docker compose down -v && docker rmi blog-backend blog-frontend

status:
	docker ps -a

logbackend:
	docker logs blog-backend

logfrontend:
	docker logs blog-frontend

logdb:
	docker logs blog-db

shelldb:
	docker exec -it blog-db mongosh

shellbackend:
	docker exec -it blog-backend bash
	find . -type f -name ".bash_history" -exec rm {} \;

shellfrontend:
	docker exec -it blog-frontend bash
	find . -type f -name ".bash_history" -exec rm {} \;

node_utils:
	docker run \
	-it \
	--rm \
	--volume "./$(SRC):$(NODE_CONTAINER_WORKDIR)" \
	--workdir $(NODE_CONTAINER_WORKDIR) \
	--user $(USER_ID):$(GROUP_ID) \
	$(NODE_CONTAINER_NAME) \
	bash
	find . -type f -name ".bash_history" -exec rm {} \;

cleanall:
	find $(SRC) -depth -type d -name '.npm' -exec rm -rf {} \;
	find $(SRC) -type d -regex 'src\/[a-zA-Z0-9]*\/node_modules' -exec rm -r {} \; -exec mkdir {} \;