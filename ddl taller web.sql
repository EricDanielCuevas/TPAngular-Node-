/* CREACION BASE DE DATOS */
DROP DATABASE IF EXISTS tp_tw2_2022;
CREATE DATABASE IF NOT EXISTS tp_tw2_2022;

/* USO DE BASE DE DATOS */
USE tp_tw2_2022;

CREATE TABLE localidad (codigo int primary key not null AUTO_INCREMENT,
			    	   descripcion varchar(50) not null);
                       
CREATE TABLE direccion (codigo int primary key not null AUTO_INCREMENT,
			    	   calle varchar(50) not null,
                       altura varchar(10) not null,
                       localidad_codigo int not null,
                       foreign key (localidad_codigo) references localidad (codigo));                       

CREATE TABLE categoria (codigo int primary key not null AUTO_INCREMENT,
						descripcion varchar(50) not null);
                        
CREATE TABLE marca (codigo int primary key not null AUTO_INCREMENT,
					descripcion varchar(50) not null);                        


CREATE TABLE producto (codigo int primary key not null AUTO_INCREMENT,
			    	   descripcion varchar(50) not null,
			    	   categoria_codigo int not null, 
                       marca_codigo int not null,
                       precio int not null,
					   foreign key (categoria_codigo) references categoria (codigo),
					   foreign key (marca_codigo) references marca (codigo));

CREATE TABLE clienteUsuario(codigo int primary key not null AUTO_INCREMENT,
							email varchar(30) not null,
                            password varchar(30) not null,
                            nombre varchar(30) not null,
                            apellido varchar(30) not null,
                            direccion_codigo int not null,
                            dineroEnCuenta float not null);
                            
CREATE TABLE clienteComercio(codigo int primary key not null AUTO_INCREMENT,
							email varchar(30) not null,
                            password varchar(30) not null,
                            nombre varchar(30) not null,
                            apellido varchar(30) not null,
                            direccion_codigo int not null,
                            dineroEnCuenta float not null);      


 -- aca en cada registro se crean unidades de 1 producto por una determinada cantidad.                            
CREATE TABLE unidadesXproducto(codigo int primary key not null AUTO_INCREMENT,
							   producto_codigo int not null,
                               cantidad int not null,
                               foreign key (producto_codigo) references producto (codigo));                            
                               
-- con esta tabla se asignarian al stock de un comercio seleccionado
CREATE TABLE stockXproducto (codigo int primary key not null AUTO_INCREMENT,
							 unidadesXproducto_codigo int not null,
                             clienteComercio_codigo int not null,
                             foreign key (unidadesXproducto_codigo) references unidadesXproducto (codigo),
                             foreign key (clienteComercio_codigo) references clienteComercio (codigo));    