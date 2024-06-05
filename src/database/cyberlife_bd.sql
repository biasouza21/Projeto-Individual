drop database if exists cyberlife;
create database if not exists cyberlife;
use cyberlife;

create table usuario(
id int primary key auto_increment,
nome varchar (45),
email varchar (255) unique key,
senha varchar (255)
);

create table quiz(
id_quiz int primary key auto_increment,
nome_quiz varchar (20)
);

create table tentativa_quiz(
id_tentativa int primary key auto_increment,
pontuacao decimal(10,2),
data_tentativa datetime default current_timestamp,
fkUsuario int,
fkQuiz int,
constraint fk_usuario foreign key (fkUsuario) references usuario(id),
constraint fk_quiz foreign key (fkQuiz) references quiz(id_quiz)
);
drop table tentativa_quiz;
drop table quiz;

insert into quiz (nome_quiz) values
('Connor'),
('Kara'),
('Markus');

insert into tentativa_quiz (pontuacao, fkUsuario, fkQuiz) values 
(10.0, 26, 1);	

select * from quiz;
select * from tentativa_quiz;
select * from usuario;

truncate table usuario;

desc usuario;

delete from usuario where id = 2;
truncate table tentativa_quiz;