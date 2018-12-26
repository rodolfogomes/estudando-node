--Tabela para construção do portal de notícias.

create table noticias(
id_noticia int primary key AUTO_INCREMENT ,
titulo varchar(100) not null,
noticia varchar(500) not null

);

-- Carga da tabela noticias
insert into noticias(titulo,noticia)values('primeira noticia','estudando node');
insert into noticias(titulo,noticia)values('segunda noticia','fullstack javascrit');

-- Tratar erro de conexão com o mysql.
    --ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql'

