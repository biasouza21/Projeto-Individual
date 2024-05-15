drop database if exists cyberlife;
create database if not exists cyberlife;
use cyberlife;

create table usuario(
id int primary key auto_increment,
nome varchar (45),
email varchar (255),
senha varchar (255)
);
	
select * from usuario;
desc usuario;
truncate table usuario;