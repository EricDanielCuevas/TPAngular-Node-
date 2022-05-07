-- las direcciones fueron creadas en este momento para hacer pruebas , la realidad es que en la aplicacion las direcciones se van a crear a medida que cada usuario se vaya registrando        
insert into localidad (descripcion) 
values ('devoto'),
	   ('versailles'),
       ('floresta'),
       ('flores'),
       ('villa puyrredon'),
       ('villa del parque'),
       ('soldati'),
       ('mataderos'),
       ('liniers'),
       ('microcentro'),
       ('macrocentro');

insert into direccion (calle, altura, localidad_codigo) 
values ('cervantes',3125,1),  
	   ('desaguadero',3030,1),
       ('ruiz de los llanos',2900,2),
       ('irigoyen',1950,2),
       ('alvarez jonte',3600,3),
       ('mercedes',2002,3),
       ('rivadavia',7001,4),
       ('rivera indarte',185,4),
       ('nazca',4164,5),
       ('griveo',3224,5),
       ('cuenca',3065,6),
       ('helguera',3312,6),
       ('lisandro de la torre',2320,8),
       ('montiel',2020,8),
       ('timoteo gordillo',1978,8);

insert into clienteUsuario(email, password, nombre ,apellido ,direccion_codigo ,dineroEnCuenta )
values('ecuevas@alumno.unlam.edu.ar','claveusuario', 'eric', 'cuevas',1 ,0.0),
	  ('aborgeat@unlam.edu.ar','1234', 'Andres', 'Borgeat',2, 0.0);

insert into clienteComercio(email, password, nombre, apellido, direccion_codigo, dineroEnCuenta)
values('nmarmiroli@alumno.unlam.edu.ar','1234','nicolas','marmiroli' ,2, 0.0);


insert into categoria (descripcion) 
values ('caramelos'),							 
	   ('gomitas'),
	   ('chupetines'),
	   ('pastillas'),
	   ('chicles'),
       ('chocolates'),
       ('bombones'),
       ('bocaditos'),
       ('galletitas'),
       ('alfajores'),
       ('tutucas'),
       ('turrones'),
       ('obleas'),
       ('confites'),
       ('snacks'),
       ('postre mani');
       
insert into marca (descripcion) 
values ('pop´s'),
	   ('butter tofes'),
       ('sugus'),
       ('mogul'),
       ('rhodesia'),
       ('tita'),
       ('mantecol'),
       ('saladix'),
       ('billeken'),
       ('arcor'),
       ('cofler'),
       ('milka'),
       ('nestle'),
       ('cadbury'),
       ('guaymallen'),
       ('bon o bon'),
       ('felfort'),
       ('lays'),
       ('cheetos'),
       ('aguila'),
       ('skitles'),
       ('roclets'),
       ('kit kat'),
       ('cachafaz'),
       ('mantecol'),
       ('kinder'),
       ('oreo'),
       ('babydoll'),
       ('layapa'),
       ('beldent'),
       ('mondelez');
       
insert into producto (descripcion, categoria_codigo, marca_codigo, precio) 
values ('gomitas frutales x 200gr',2 ,4 ,350),
	   ('chupetines surtidos x200',3 ,1 ,290),
       ('tubo pastillitas surtidas frutales',4 ,28 ,130),
       ('pico dulce x10u',3 ,27 ,210),
       ('chicles menta x6',5 ,29 ,300),
       ('chocolate de taza x 200gr',6 ,20 ,290),
       ('chocolate aireado x100gr',6 ,11 ,90),
       ('chocolate blanco aireado x200gr',7 ,11 , 140),
       ('caramelos surtidos frutales x200gr',1 ,3, 300),
       ('caramelos surtidos rellenos x400gr',1 ,2 ,500),
       ('oblea bañada x30gr',13 ,5 , 50),
       ('turron mani clasico x40gr',12 ,10 ,25),
       ('turron mani frutilla x40gr',12 ,10, 25),
       ('huevo kinder sorpresa',6 ,25 ,120),
       ('mantecol x 300gr',16 ,24 ,210),
       ('caja bon o bon blanco x 300gr',7 ,16 ,500),
       ('cadbury yogurt x200gr',6 ,14 ,290),
       ('galletitas sabor pizza x 400gr ',15 ,8 ,110),
       ('caja alfajor blanco x20U',10 ,15 ,400),
       ('caja alfajor negro x20U',10 ,15, 400),
       ('confites chocolate x 100gr',15 ,22 ,150);
 
-- aca en cada registro se crean unidades de 1 producto por una determinada cantidad.
insert into unidadesXproducto (producto_codigo, cantidad)
	values (1, 15),
		   (2, 10),
 		   (3, 15),
		   (4, 15),
		   (7, 10);

-- con esta tabla se asignarian al stock de un comercio seleccionado
insert into stockXproducto (unidadesXproducto_codigo ,clienteComercio_codigo) 
values(1, 1),
	  (2, 1),
      (3, 1),
      (4, 1),
      (5, 1);
      
-- hasta aca son registros que deben venir precargados con la aplicacion para poder funcionar, luego en las siguientes tablas los registros se crean dinamicamente a medida que el pedido va pasando sus etapas


/*
-- ************************************************************************************
-- futuras tablas (en desarrollo)
-- en este punto el ClienteUsuario hizo uso del metodo crearPedido()       
insert into pedido(fecha, horaRealizado, clienteUsuario_codigo, clienteComercio_codigo, clienteRepartidor_codigo )  
values(curdate(), curtime(), 1, 1, 1);


-- en este insert unidad es cuando el ClienteUsuario esta agregando productos a su pedido
insert into unidad (pedido_codigo, producto_codigo) 
values(1, 1),
	  (1, 2),
	  (1, 3);

-- medios de pago existentes (a desarrollar : ya que aqui se intentara acoplar una plataforma de pagos online)
insert into mediodepago(descripcion)
values('efectivo'),
	  ('debito'),
      ('credito'),
      ('mercadopago'),
      ('transferencia bancaria');

insert into pago(pedido_codigo, medioDePago_codigo, importeTotalComercio,importeFinalEnvio)
values(1, 2, 268.4 ,90.0);

-- se deposita el dinero pagado por el cliente usuario en el atributo dinero del clientecomercio
UPDATE pedido pe
JOIN clientecomercio cliC
ON (pe.clienteComercio_codigo=cliC.codigo)
JOIN pago pa
ON (pe.codigo=pa.pedido_codigo)
SET cliC.dinero=cliC.dinero+pa.importeTotalComercio;

*/





       
       
	   