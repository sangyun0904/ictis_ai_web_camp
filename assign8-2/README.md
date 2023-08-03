![image](https://github.com/sangyun0904/ictis_ai_web_camp/assets/69445075/ccbcfd7f-9594-4422-9e1c-9f2c9afe448c)

Table news {  
&emsp;&emsp;id bigint [primary key]  
&emsp;&emsp;title varchar    
&emsp;&emsp;writer varchar  
&emsp;&emsp;content blob    
&emsp;&emsp;category_id bigint    
&emsp;&emsp;written_date date    
}  
  
id : 인텍스 아이디 , title : 제목 , writer : 글쓴이 , content : 뉴스 내용 , catogory_id : 분류 카태고리 , written_date : 작성된 날짜  
  
Table user {  
&emsp;&emsp;id bigint [primary key]  
&emsp;&emsp;username varchar  
&emsp;&emsp;password varchar  
&emsp;&emsp;email varchar  
&emsp;&emsp;created_date date  
}  
  
id : 인텍스 아이디 , username : 우저 아이디 , password : 유저 패스워드 , email : 유저 이메일 , created_date : 유저 생성된 날짜   

Table category {  
&emsp;&emsp;id bigint [primary key]  
&emsp;&emsp;name varchar  
}  
  
id : 인텍스 아이디 , name : 카테고리 명  
  
Table user_category {  
&emsp;&emsp;id bigint [primary key]  
&emsp;&emsp;user_id bigint  
&emsp;&emsp;category_id bigint  
}  
  
user , category 연결 테이블  
id 인덱스 아이디, user_id : 유저 아이디 , category_id : 카테고리 아이디  
