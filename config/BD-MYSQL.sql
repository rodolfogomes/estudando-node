--Tabela para construção do portal de notícias.

create table noticias(
    id_noticia int primary key AUTO_INCREMENT ,
    descricao varchar(100) not null

);

-- Carga da tabela noticias
insert into noticias(descricao)values('primeira noticia');
insert into noticias(descricao)values('segunda noticia');
