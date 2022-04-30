-- las direcciones fueron creadas en este momento para hacer pruebas , la realidad es que en la aplicacion las direcciones se van a crear a medida que cada usuario se vaya registrando        
insert into localidad (nombre) 
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

insert into direccion (calle, numero, localidad_codigo) 
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

insert into clienteusuario(email, password, nombre ,apellido ,direccion_codigo )
values('ecuevas@alumno.unlam.edu.ar','claveusuario', 'eric', 'cuevas',1),
	  ('aborgeat@unlam.edu.ar','1234', 'Andres', 'Borgeat',2);

insert into clientecomercio(email, password, nombre, apellido, direccion_codigo, dinero)
values('nmarmiroli@alumno.unlam.edu.ar','1234','nicolas','marmiroli' ,2, 0.0);


insert into categoria (descripcion) 
values ('carnes'),							 
	   ('lacteos'),
	   ('fiambres'),
	   ('arroz'),
	   ('fideos'),
       ('salsas'),
       ('infusiones'),
       ('jabones'),
       ('desodorantes'),
       ('shampoo'),
       ('desinfectantes'),
       ('limpiadores'),
       ('herramientas de limpieza'),
       ('sodas'),
       ('aguas'),
       ('gaseosas'),
       ('bebidas alcoholicas');       
       
insert into marca (descripcion) 
values ('la serenisima'),
	   ('sancor'),
       ('los calvos'),
       ('la armonia'),
       ('gallo'),
       ('marolio'),
       ('la campañola'),
       ('la virginia'),
       ('cabrales'),
       ('dove'),
       ('rexona'),
       ('axe'),
       ('sedal'),
       ('herbal escenses'),
       ('pantene'),
       ('ayudin'),
       ('vim'),
       ('heroe'),
       ('procenex'),
       ('blem'),
       ('sierra de los padres'),
       ('villavicencio'),
       ('villa del sur'),
       ('manaos'),
       ('coca cola'),
       ('quilmes'),
       ('branca'),
       ('brahma'),
       ('patagonia');
       
insert into producto (descripcion, categoria_codigo, marca_codigo) 
values ('ravioles',2 ,7),
	   ('leche',2 ,1),
       ('yogurt con cereales',2 ,2),
       ('arroz 1kg',4 ,5),
       ('fideos tirabuzon',5 ,6),
       ('salsa de tomate',6 ,7),
       ('cafe en saquitos',7 ,8),
       ('cafe descafeinado',7 ,9),
       ('te verde',7 ,8),
       ('antitranspirante femenino',9 ,11),
       ('antitranspirante masculino',9 ,12),
       ('crema enjuague 200',10 ,13),
       ('crema enjuague 1000',10 ,14),
       ('crema para peinar',10 ,15),
       ('lavandina 1 lts',11 ,16),
       ('limpiador lavanda 1 lts',12 ,19),
       ('lavandina en gel',11 ,17),
       ('desinfectante liquido 1 lts',12 ,18),
       ('agua mineral 1 lts',15 ,21),
       ('agua mineral saborizada 1 lts',15 ,22),
       ('bebida cola 2 lts',16 ,24),
       ('bebida cola lata 330 cc',16 ,25),
       ('cerveza 1 lts',17 ,26),
       ('fernet 750 cc',17 ,27);
 
 -- aca en cada registro se crean unidades de distintos productos por una determinada cantidad .
insert into unidad (producto_codigo, cantidad)
	values (1, 15),
		   (2, 10),
 		   (3, 15),
		   (4, 15),
		   (7, 10);

-- se asignan al stock de un comercio seleccionado
insert into Stock(unidades_codigo ,clienteComercio_codigo) 
values(1, 1),
	  (2, 1),
      (3, 1),
      (4, 1),
      (5, 1);
      
-- hasta aca son registros que deben venir precargados con la aplicacion para poder funcionar, luego en las siguientes tablas los registros se crean dinamicamente a medida que el pedido va pasando sus etapas


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







       
       
	   