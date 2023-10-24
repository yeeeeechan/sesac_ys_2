use db_practice;

CREATE TABLE user_prac (
id varchar(10) not null primary key,
pw varchar(20) not null,
name varchar(5) not null,
gender enum('F', 'M', '') default '',
birthday date not null,
age int(3) not null default 0
);

insert into user_prac values('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
insert into user_prac values('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
insert into user_prac values('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
insert into user_prac values('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
insert into user_prac values('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
insert into user_prac values('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
insert into user_prac values('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

select * from user_prac;

select * from user_prac order by birthday asc;
select * from user_prac where gender like 'M' order by name desc;
select id, name from user_prac where birthday between '1970-01-01' and '1980-01-01';
select * from user_prac where birthday like '%-06-%' order by birthday asc;
select * from user_prac where gender like 'M' and birthday like '1970-%-%';
select * from user_prac order by age desc limit 3;
select * from user_prac where age between 25 and 50;

update user_prac set pw = '12345678' where id = 'hong1234';
delete from user_prac where id = 'jungkrat';

select * from user_prac;

