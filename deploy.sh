git pull
export DOMAIN=api.origini.vodapp.com
export NODE_ID=$(docker info -f '{{.Swarm.NodeID}}')
docker node update --label-add origini.api-data=true $NODE_ID
docker stack deploy -c docker-compose.yml origini_origini
docker stack ps origini_origini
docker service logs origini_origini_origini
