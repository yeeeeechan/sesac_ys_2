-- custid가 bunny인 회원
select * from customer where custid='bunny';

-- custid가 bunny가 아닌 회원
select * from customer where custid!='bunny';
select * from customer where not custid='bunny';

-- 2000-01-01 이후에 태어난 회원 조회
select * from customer where birth > '2000-01-01';

-- 2000-01-01과 2005-01-01 사이에 태어난 회원 조회 (양끝 값 포함)
select * from customer where birth between '2000-01-01' and '2005-01-01';

-- addr가 대한민국 서울, 미국 로스앤젤레스 둘 중 하나라면 조회
select * from customer where addr in('대한민국 서울', '미국 로스앤젤레스');

-- like를 이용한 조회
-- 1) addr에 '대한민국'을 포함한 모든 회원을 조회
select * from customer where addr like '%대한민국%';

-- 2) 세 글자 이름이면서 마지막이 '수'로 끝나는 회원 조회(언더바 개수가 한 글자를 의미)
select * from customer where custname like '__수';

-- 3) 뒤에서 두 번째 이름이 '해'인 회원 조회
select * from customer where custname like '%해_';

-- is null 사용 예시
select * from customer where custname is null;

-- AND, OR, NOT
select * from customer where addr like '%대한민국%' and birth <= '2000-05-05';
select * from customer where addr like '%대한민국%' or birth <= '2000-05-05';

-- asc(오름차순 정렬), desc(내림차순 정렬) (기본값은 pk 기준 정렬)
select * from customer order by custname asc;

-- addr에 대한민국을 포함하고 있는 회원 조회. custname 기준으로 내림차순 정렬 (조회가 먼저이므로, where을 order by 앞에 써야 함)
select * from customer
where addr like '%대한민국%'
order by custname desc;

-- limit는 가장 상단에 정렬된 회원 2명만 보겠다. (동시에 쓰일 땐 이 순서를 기준으로 사용)
select * from customer
where addr like '%대한민국%'
order by custname desc
limit 2;

-- update문(where 조건은 pk를 기준으로 사용 가능)
update customer set custname = '강해란' where custid = 'bunny';
select * from customer;

-- delete문(where 조건은 pk를 기준으로 사용 가능)
-- 오류 발생: wow123 값을 참조하고 있는 데이터가 있으므로 삭제할 수 없음 (orders 테이블에 fk로 걸려 있음, oders 테이블에서 삭제하고 나면 삭제 가능)
delete from customer where custid = 'wow123';

delete from orders where custid = 'wow123';
select * from orders;

-- select 심화
select addr from customer;
select distinct addr from customer;

select * from orders;

-- orders 테이블에 존재하는 주문 개수, as ''로 속성명 지정 가능
select count(*) as 'total_orders' from orders;
desc orders;

-- 사람별 주문 건수
-- select에서 group by를 쓸 때, group by 뒤에 쓴 속성과 집계함수로 새로 만든 속성만 출력하도록(다른 속성들은 출력하지 말 것)
select custid, count(*) as 'count' from orders group by custid;

-- 사람별로 구매한 상품의 개수
select custid, sum(amount) as 'total_amount' from orders group by custid;

-- 사람별로 구매한 상품의 개수 조회하는데, 구매한 상품의 개수가 5개보다 많은 경우만 조회
select custid, sum(amount) as 'total_amount' from orders group by custid having sum(amount) > 5;
-- 사람별로 구매한 상품의 개수 조회하는데, 구매한 상품의 개수가 5개보다 많은 경우만 조회(custid가 bunny가 아닌 사람)
select custid, sum(amount) as 'total_amount' from orders where custid != 'bunny' group by custid having sum(amount) > 5;

-- 사람별로 결제한 금액 조회
select custid, sum(amount * price) as 'total_price' from orders group by custid;

-- customer 테이블과 orders 테이블을 inner join (주문별 배송지를 알기 위해)
select customer.addr, orders.* from customer inner join orders on customer.custid = orders.custid;

-- (사람별로 주문 내역 조회)
select customer.custname, orders.* from customer inner join orders on customer.custid = orders.custid;
select * from orders;