create database node;
use node;
create table node_template
(
    id          int primary key comment 'id',
    name        varchar(100) not null comment 'name',
    description varchar(3000) comment 'description'
);
insert into node_template
values (1, 'Foo', 'Foo desc'),
       (2, 'Gee', 'Goo desc')