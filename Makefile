NODE_CONTAINER_WORKDIR :=/home/node
NODE_CONTAINER_NAME := node
BACKEND_DIR := backend
FRONTEND_DIR := frontend
USER_ID := $(shell id -u)
GROUP_ID := $(shell id -g)

cleanall:
	rm -rf ./$(BACKEND_DIR)/node_modules/*
	rm -rf ./$(BACKEND_DIR)/node_modules/.*
	rm -f ./$(BACKEND_DIR)/package-lock.json
	rm -rf ./$(BACKEND_DIR)/.npm

start:
	docker compose up -d

startbuild:
	docker compose up -d --build

logbackend:
	docker logs blog-backend

logdb:
	docker logs blog-db

restart:
	docker compose down
	docker compose up -d

stop:
	docker compose down

stopclean:
	docker compose down -v
	docker rmi blog-backend

shelldb:
	docker exec -it blog-db mongosh

shellbackend:
	docker exec -it blog-backend bash
	find . -type f -name ".bash_history" -exec rm {} \;

shellbackend_fresh:
	docker run \
	-it \
	--rm \
	--volume "./$(BACKEND_DIR):$(NODE_CONTAINER_WORKDIR)" \
	--workdir $(NODE_CONTAINER_WORKDIR) \
	--user $(USER_ID):$(GROUP_ID) \
	$(NODE_CONTAINER_NAME) \
	bash
	find . -type f -name ".bash_history" -exec rm {} \;

shellfrontend:
	docker exec -it blog-frontend bash
	find . -type f -name ".bash_history" -exec rm {} \;

shellfrontend_fresh:
	docker run \
	-it \
	--rm \
	--volume "./$(FRONTEND_DIR):$(NODE_CONTAINER_WORKDIR)" \
	--workdir $(NODE_CONTAINER_WORKDIR) \
	--user $(USER_ID):$(GROUP_ID) \
	$(NODE_CONTAINER_NAME) \
	bash
	find . -type f -name ".bash_history" -exec rm {} \;