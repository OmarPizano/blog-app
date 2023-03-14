NODE_CONTAINER_WORKDIR :=/home/node
NODE_CONTAINER_NAME := node
NODE_APP_LOCAL_DIR := src
USER_ID := $(shell id -u)
GROUP_ID := $(shell id -g)

npm_init:
	docker run \
        --rm \
        --volume "./$(NODE_APP_LOCAL_DIR):$(NODE_CONTAINER_WORKDIR)" \
        --workdir $(NODE_CONTAINER_WORKDIR) \
        --user $(USER_ID):$(GROUP_ID) \
        $(NODE_CONTAINER_NAME) \
        npm init -y

npm_install:
	docker run \
        --rm \
        --volume "./$(NODE_APP_LOCAL_DIR):$(NODE_CONTAINER_WORKDIR)" \
        --workdir $(NODE_CONTAINER_WORKDIR) \
        --user $(USER_ID):$(GROUP_ID) \
        $(NODE_CONTAINER_NAME) \
        npm install

clean_modules:
	rm -rf ./$(NODE_APP_LOCAL_DIR)/node_modules/*
	rm -f ./$(NODE_APP_LOCAL_DIR)/package-lock.json

start_server:
	docker compose up -d

start_server_build:
	docker compose up -d --build

logs_web:
	docker logs blog_web

logs_db:
	docker logs blog_db

stop_server:
	docker compose down

stop_server_rm_volumes:
	docker compose down -v
