cd
wget https://download.docker.com/linux/static/stable/x86_64/docker-17.12.0-ce.tgz
tar -xzvf docker-*.tgz
mkdir ~/bin
mv ~/docker/docker ~/bin

#apt
sudo apt-get update && sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-get install docker-ce-cli
