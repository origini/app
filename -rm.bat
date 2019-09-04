-stop.bat
docker stop presta_docker_prestashop_1
docker stop presta_docker_mariadb_1
docker rm presta_docker_prestashop_1
docker rm presta_docker_mariadb_1
docker system prune -a -f
docker ps