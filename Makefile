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
	rm -rf ./$(NODE_APP_LOCAL_DIR)/node_modules/.*
	rm -f ./$(NODE_APP_LOCAL_DIR)/package-lock.json
	rm -rf ./$(NODE_APP_LOCAL_DIR)/.npm

start:
	docker compose up -d

startbuild:
	docker compose up -d --build

logs_web:
	docker logs blog_web

logs_db:
	docker logs blog_db

restart:
	docker compose down
	docker compose up -d

stop:
	docker compose down

stop_clean:
	docker compose down -v
	docker rmi blog_web

mongo_shell:
	docker exec -it blog_db mongosh

mongo_init:
	docker cp init_mongo.js blog_db:init_mongo.js
	docker exec -it blog_db mongosh admin init_mongo.js

node_shell:
	docker exec -it blog_web bash