show databases;

-- 데이터 베이스 생성하는 명령어
CREATE DATABASE db_test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

-- 데이터 베이스 선택하는 명령어
use db_test;

-- table을 생성하는 명령어
create table user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
    age int unsigned
);

-- 만들어진 table에
-- 1. column(속성)을 추가하는 명령어
alter table user add gender enum('여', '남');

-- 2. column을 삭제하는 명령어
alter table user drop column age;

-- 3. column을 수정하는 명령어
alter table user modify gender varchar(3) not null;

-- table을 삭제하는 명령어
drop table user;

select * from user;

-- table을 조회하는 명령어(데이터 베이스가 선택되어 있어야 함.) 
show tables;

-- insert문 (데이터 추가)
insert into user (id, password) values('lily', '1234');
insert into user values ('lily2', '12345', '99', '여자');

-- select문 (데이터 조회)
-- select [속성...] from [테이블 이름] where [조건]
-- user라는 테이블의 모든 값을 조회하겠다.
select * from user;

-- user 테이블의 id, password 속성을 모두 조회하겠다.
select id, password from user;