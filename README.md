## 💻 코딩테스트 문제풀이 모음집 해설
+ 이 곳은 코딩테스트 문제풀이 모음집을 해설용 블로그입니다.
+ ``` Code ``` 내용을 보실려면 ['Solve-Problem'](https://github.com/Wisesaturn/Solve-Problem "재한쓰의 코딩테스트 문제풀이 모음집")을 이용해주세요.
---
### 🤗 Page Update Log (2021-01-03 ~ )
+ 기본 틀 제작 및 HTML 학습 <b>(2021-01-03 ~ 2021-01-04)</b>  
  ✔ <b>HTML, CSS, JS</b>를 다시 복습하는 동안 <b><em>React, Bootstrap, SASS(SCSS)</b></em> 개념을 공부했다. 👀

+ React 환경에서 사이트 제작 <b>(2021-01-05 ~ )</b>  
   🔸 React 환경 제작 (create-react-app 이용)  
   🔸 SCSS 이용 (npm install node-sass 설치)  
   🔸 git 연결 (gh-pages 패키지 설치)
   + npm install gh-pages --save-dev  
   + homepage 및 scripte에 deploy 명령어 추가  
   + npm run deploy를 통해 배포
   <br>
   ✔ 이 <b>3단계</b>를 통해 최종적으로 <b>React 환경 내 Github 연결</b>을 완료하였다.
   <br>
   ✔ 이 과정을 거치는 동안 <b>'branch', 'local'와 'remote' repository</b> 개념을 여러 번 학습하였다. (⊙ˍ⊙)  
   <br>
   <br>
   🔸 상태 관리 라이브러리 'Recoil' 설치<br>
   ✔ 'npm install recoil' 이용 <br>  
   ✔ Header, Content, Footer가 Level에 따라 변화하기 위해선 하나의 전역 변수가 필요한데 이를 'Recoil'통해 구현하였다.<br>  
   ✔ 대부분 변수 및 데이터를 ``` state.jsx ```안에 넣어놓았다.
   <br>
   <br>
   🔸 임시 아이콘 'React-icon' 이용<br>
   ✔ 'npm install react-icons' 이용<br>
   ✔ React-icon을 이용해 간단한 아이콘들을 임시로 사용한다.<br>
   ✔ 차후에 마음 생기면 아이콘도 디자인할 계획!
   <br>
   <br>
   🔸 Typescript처럼 <b>Type을 검사</b>해주는 'PropType' 사용<br>
   ✔ 'npm i prop-types' 이용<br>
   ✔ 나중에 Type이 뒤죽박죽 되는 부분을 방지하기 위해! <br>
   <br>
   <br>
   🔸 ``` styled-component ```를 사용하여 CSS-in-JS 라이브러리를 사용<br>
   ✔ 'npm i styled-components' 이용<br>
   ✔ 요즘 트렌드인 선 Component 분류, 후 한 곳에 섞기를 해보려고 한다.<br>
   ✔ 전역적인 CSS를 사용하지 않으려면 이 방법을 사용하면 좋을 듯하다. <br>
   
## 📎 참고  
+ React SCSS 연동 : https://codingmania.tistory.com/339 [개발자의 개발 블로그]
+ React github 배포 : https://velog.io/@byjihye/react-github-pages
+ 벨로퍼트와 함께하는 모던 리액트 : ['주소'](https://react.vlpt.us/ "벨로퍼트와 함께하는 모던 리액트")
+ 레이아웃 참고 (Flexbox로 만들 수 있는 10가지 레이아웃) : ['주소'](https://d2.naver.com/helloworld/8540176 "flexbox로 만들 수 있는 10가지 레이아웃)
+ React-icons : https://react-icons.github.io/react-icons
+ Prop-types (react) : ['주소'](https://ko.reactjs.org/docs/typechecking-with-proptypes.html "PropTypes와 함께 하는 타입 검사")
+ style-component : https://www.daleseo.com/react-styled-components/
+ Modal 참고 : ['주소'](https://medium.com/@bestseob93/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%AA%A8%EB%8B%AC-react-modal-%EB%A7%8C%EB%93%A4%EA%B8%B0-bd003458e9d "효율적인 리액트 모달(react-modal) 만들기")