build:
	docker-compose build --no-cache

up:
	docker-compose up -d

up-non-daemon:
	docker-compose up

start:
	docker-compose start

stop:
	docker-compose stop

restart:
	docker-compose stop && docker-compose start

shell-web:
	docker exec -ti novel_api /bin/sh

log-web:
	docker-compose logs novel_api