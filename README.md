## 📖 공부용 블로그
+ 이 곳은 저의 **공부 및 문제풀이용 블로그**입니다.
+ 앞으로 여러 가지 내용들을 넣을 예정입니다! 😊  
---
## 💻 코딩테스트 문제풀이 모음집 해설
+ ` Code `  내용을 보실려면 ['문제풀이'](https://github.com/Wisesaturn/Solve-Problem "재한쓰의 코딩테스트 문제풀이 모음집")를 이용해주세요.
---
### 🤗 Page Update Log (2021-01-03 ~ )
+ **기본 틀 제작 및 HTML 학습** *(2022-01-03 ~ 2022-01-04)*   
  + **HTML, CSS, JS**를 다시 복습하는 동안 *React, Bootstrap, SASS(SCSS)* 개념을 공부했다. 👀    
<br>

+ **`React 환경`에서 사이트 제작** *(2022-01-05 ~ )*  
   > React 환경 제작 (create-react-app 이용)  
   > SCSS 이용 (npm install node-sass 설치)  
   > git 연결 (gh-pages 패키지 설치)   
   >
   > > 🔸 **세부사항**   
   > > `npm install gh-pages --save-dev`  
   > > homepage 및 script( `package.json` )에 `deploy 명령어` 추가    
   > > `npm run deploy`를 통해 배포
   <br>

   + 이 **3단계**를 통해 최종적으로 **React 환경 내 Github 연결**을 완료하였다.    
   + 이 과정을 거치는 동안 *'branch', 'local'와 'remote' repository 개념을 여러 번 학습하였다. (⊙ˍ⊙)    
<br>

+ **상태 관리 라이브러리 `'Recoil'`** 설치   
   > `'npm install recoil'` 이용  
   
   + Header, Content, Footer가 Level에 따라 변화하기 위해선 하나의 전역 변수가 필요한데 이를 `'Recoil'`통해 구현하였다.  
   + 대부분 변수 및 데이터를 **`state.jsx`** 안에 넣어놓았다.    
<br>   

+ **임시 아이콘 `'React-icon'`** 이용
   > `'npm install react-icons'` 이용    
   
   + React-icon을 이용해 간단한 아이콘들을 임시로 사용한다.    
   + 차후에 마음 생기면 아이콘도 디자인할 계획!    
<br>

+ `Typescript` 처럼 **Type을 검사**해주는 **`'PropType'`** 사용    
   > `'npm i prop-types'` 이용    

   + 나중에 Type이 뒤죽박죽 되는 부분을 방지하기 위해!    
<br>

+ **`styled-component`** 를 사용하여 **CSS-in-JS 라이브러리**를 사용    
   > `'npm i styled-components'` 이용

   + 요즘 트렌드인 선 Component 분류, 후 한 곳에 섞기를 해보려고 한다.    
   + **전역적인 CSS**를 사용하지 않으려면 이 방법을 사용하면 좋을 듯하다.    
<br>

+ **레이아웃 전면 수정** *(2022-01-12 ~ 13)*     
   + 너무 무턱대고 맨 땅에 헤딩을 하면서 코드를 짜다 보니 **디자인 방향성**이 중구난방이었다.    
   + *(색상, 사이드바 위치, 버튼 디자인 등 난잡 그자체)*    
   + 그래서 디자인 요소를 전부다 수정하기로 결정했다. (다시 처음부터..?)    
   + `100% 꽉채우는 반응형 웹 + 메인 컬러만 설정`해서 간단하게 짰다.    
   + 사이드바는 *초기엔 좌측에서 팝업 느낌*으로 나오게끔 하였으나 너무 부산스러웠다.    
   + 또한, 메인 내용을 가려버리는 인터페이스 디자인이라 그냥    
   + 맨 처음 계획이었던 게시물과 **flex 형태 레이아웃 및 버튼**에 따라 나오게 했다.    
<br>

+ **아이콘 svg 제작 및 분석** *(2022-01-13)*    
   + 아이콘이 CSS에 따라 색을 바꾸기 위해 벡터 기반의 이미지인 **'svg' 파일**을 사용했다.    
   + svg 안에는 이미지 정보, 속성값, `path`값으로 이루어져 있는데 **path값**을 통해 디자인한다.    
   + 일러스트레이터로 svg 파일을 저장해야 `path` 값을 알 수 있다.    
   + 처음에는 `png`을 `svg`로 변환했으나 `path`값이 나오지는 않았다. *(일러 ai 파일 필요)*   
<br>

+ **다크모드 토글 스위치 제작** *(2022-01-13 ~ 14)*    
   + 처음에는 recoil를 활용해 전역 변수로 dark, light로 상황을 구분시킨 후, 그에 따라 `styled-component`를 이용하여 스타일을 주려고 했다.    
   + `'span'`를 이용해 바 모양, 스위치 모양 두 가지 모양을 만들고 디자인을 하는 게 초기 구상이었다.    
   + 그런데 찾아보니 놀라운 방법이 있었다. 바로 **`'input'`** 과 **`'before'`** 를 활용해서 **전역 변수 없이도 css만으로 구현이 가능**했던 것! 😮    
   + **`input`** 은 check 확인용으로 사용하고, **`before`** 를 활용해 bar 앞에 디자인을 하나 더 넣는 작업을 거치는 방법이다.    
   + 초기 구상은 워낙 간단한 방법이라 이 페이지에는 css 만으로 구상해보기로 했다.    
   <br>
   🤔 <b>혹시?</b> : 음악 플레이어<br>
   😓 <b>오류!</b> : 링크 타고 뒤로가기 했을 때 다크모드 오류 발견<br>
   
## 📎 학습자료
<details>
   <summary> 내용 </summary>

+ React SCSS 연동 : https://codingmania.tistory.com/339 [개발자의 개발 블로그]
+ React github 배포 : https://velog.io/@byjihye/react-github-pages
+ 벨로퍼트와 함께하는 모던 리액트 : ['주소'](https://react.vlpt.us/ "벨로퍼트와 함께하는 모던 리액트")
+ React-icons : https://react-icons.github.io/react-icons
+ Prop-types (react) : ['주소'](https://ko.reactjs.org/docs/typechecking-with-proptypes.html "PropTypes와 함께 하는 타입 검사")
+ style-component : https://www.daleseo.com/react-styled-components/
+ Modal 참고 : ['주소'](https://medium.com/@bestseob93/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%AA%A8%EB%8B%AC-react-modal-%EB%A7%8C%EB%93%A4%EA%B8%B0-bd003458e9d "효율적인 리액트 모달(react-modal) 만들기")
+ svg 참고 : ['주소'](https://from2020.tistory.com/32#recentEntries "svg Color 동적으로 변경하기"), ['주소2'](https://ossam5.tistory.com/112 "[HTML기초문법] 13강 SVG태그 및 이미지 활용 - OSSAM강좌")
+ 왜 boolean 값을 읽지를 못하는가!? : ['주소'](https://mygumi.tistory.com/382 "Warning Received `true` for non-boolean attribute :: 마이구미")
+ Toggle Switch CSS로 제작 (라이브러리 이용 X) : ['주소'](https://ordinary-code.tistory.com/53 "css로 만드는 체크박스 ON/OFF 스위치 버튼 디자인 예제"), ['주소2'](https://m.blog.naver.com/coding-/221400113716 "CSS 토글 버튼, Toggle Switch 만들기")
+ position 개념 정리 : https://creamilk88.tistory.com/m/197
</details>

## 📎 참고
<details>
   <summary> 내용 </summary>

+ 레이아웃 참고 (Flexbox로 만들 수 있는 10가지 레이아웃) : ['주소'](https://d2.naver.com/helloworld/8540176 "flexbox로 만들 수 있는 10가지 레이아웃")
+ MUI (React UI Elements) : https://mui.com/
</details>