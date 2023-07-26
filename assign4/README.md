![image](https://github.com/sangyun0904/ictis_ai_web_camp/assets/69445075/d1acd41b-4c5c-431d-8470-e1a651e37f68)

return this.birthday + this.pId; 에서 this를 제거하면 reference Error 가 나는 이유는 birthday와 pId는 속성이고 객체를 통해서만 접근할 수 있기 때문이다.

예를 들어 person.birthday 를 통해서만 person 변수에 저장된 객체의 birthday 속성에 접근할 수 있다.

객체의 내부에서 기능을 정의 할 때도 객체의 속성에는 이와 같은 방식으로 접근해야 하는데 this라는 키워드가 person.birthday의 person을 대체해준다.

즉 this는 객체를 가리킨다.

<img width="749" alt="image" src="https://github.com/sangyun0904/ictis_ai_web_camp/assets/69445075/dddcd5a4-e09c-4dc9-b021-bc102a40b689">
