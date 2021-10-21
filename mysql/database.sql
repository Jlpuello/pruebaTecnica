CREATE DATABASE pruebatecnicaDB;

create table usuarios(ID int not null primary key auto_increment, usuario varchar(50) not null, nombre varchar(50) not null,
                        apellido varchar(50) not null, telefono varchar(10), ID_rol int not null, fecha_creacion date not null, 
                        usuario_creacion varchar(50), fecha_actualizacion date, estado varchar(10) not null);


create table roles(ID int not null, nombre varchar(50) not null);


insert into roles (ID, nombre) values (1,"administrador");


insert into roles (ID, nombre) values (2,"usuario");