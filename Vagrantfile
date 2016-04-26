# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
    config.vm.provider "virtualbox" do |v|
        v.memory = 2048
        v.cpus = 2
    end

    config.vm.define "docker" do |docker|
        docker.vm.box_url = "https://s3.amazonaws.com/nmvagrant/nmcentos7-nodejs.json"
        docker.vm.box = "nm/centos7-nodejs"

        docker.vm.network "forwarded_port", guest: 80, host: 8080
        docker.vm.network "forwarded_port", guest: 443, host: 8443
        docker.vm.network "forwarded_port", guest: 8080, host: 8081
  end
end
