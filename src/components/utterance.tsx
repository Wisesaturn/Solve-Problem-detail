import React, { useEffect, useRef } from 'react'
import { darkModeState } from './state'
import { useRecoilValue } from 'recoil'

const Utterances = () => {
    const containerRef = useRef(null) // Ref 초기화
    const theme = useRecoilValue(darkModeState) // darkmode 상태값을 불러옵니다 (recoil)
    const themeMode = theme ? 'github-dark' : 'github-light'

    useEffect(() => { // SSR은 window나 document를 바로 쓸 수는 없다
        const createUtterance = () => { // 댓글 창 생성 (utterance)
            const script = document.createElement('script') // <script> 생성

            script.src = 'https://utteranc.es/client.js'
            script.async = true
            script.setAttribute('repo', 'Wisesaturn/study-blog')
            script.setAttribute('issue-term', 'title')
            script.setAttribute('label', '💬 코멘트')
            // utterance 세팅값 (깃허브에 utterances를 설치해야 함)
            script.setAttribute('theme', themeMode)
            script.crossOrigin = 'anonymous'
            containerRef.current.appendChild(script)
        }

     const postThemeMessage = () => { // darkmode 상태에 따라 다르게 하도록 유도
      const message = {
        type: 'set-theme',
        theme: themeMode,
      }
      utterancesEl.contentWindow.postMessage(message, 'https://utteranc.es') // iframe 상태 변경
    }

    const utterancesEl = containerRef.current.querySelector('iframe.utterances-frame')
    // iframe 속 utterance element 갖고오기
    // utterance 댓글 창의 class 이름은 'utterances-frame'
    utterancesEl ? postThemeMessage() : createUtterance() // iframe이 있다면 darkmode 확인, 없다면 댓글 창 생성

}, [themeMode])

    return (
        <div ref={containerRef} />
    )
}
// 4. useRef를 이용해 ref를 직접 수정하는 방식

export default Utterances

/* React.FC로 만든 Component (참고)
const Utterances: React.FC = () => (
  <div
    className='post-comment'
    ref={(element) => {
      if (!element) {
        return;
      }
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://utteranc.es/client.js';
      scriptElement.async = true;
      scriptElement.setAttribute('repo', 'Wisesaturn/study-blog');
      scriptElement.setAttribute('issue-term', 'title');
      scriptElement.setAttribute('theme', 'preferred-color-scheme');
      scriptElement.setAttribute('label', '💬 코멘트');
      scriptElement.crossOrigin = 'anonymous';
      element.appendChild(scriptElement);
    }}
  />
);
// 1. FunctionComponent 형식

const Utterances = () => {
    useEffect(() => { // SSR은 window나 document를 바로 쓸 수는 없다
    const anchor = document.getElementById('post-comment')
    const script = document.createElement('script')
    const value = localStorage.getItem('darkmode')

    if (!anchor) { return }
    script.src = 'https://utteranc.es/client.js'
    script.async = true
    script.setAttribute('repo', 'Wisesaturn/study-blog')
    script.setAttribute('issue-term', 'title')
    script.setAttribute('label', '💬 코멘트')
    // utterance 세팅값 (깃허브에 utterances를 설치해야 함)
    script.setAttribute('theme', 'github-dark') // dark 모드일 때 테마
    //  script.setAttribute('theme', 'preferred-color-scheme') // light 모드일 때 테마
    script.crossOrigin = 'anonymous'
    anchor.appendChild(script)
}, [])

    return (
        <div id='post-comment'/>
    )
}
// 2. Default Component 형식 (JSX, ID를 가져와 anchor로 연결)

const Utterances = () => {
    useEffect(() => { // SSR은 window나 document를 바로 쓸 수는 없다
    const anchor = document.getElementById('post-comment')
    const script = document.createElement('script')
    const value = localStorage.getItem('darkmode')

    if (!anchor) { return }
     const attributes = {
      src: 'https://utteranc.es/client.js',
      repo : 'Wisesaturn/study-blog',
      'issue-term': 'title',
      label: 'comment',
      theme: themeMode, 
      crossOrigin: 'anonymous',
      async: 'true',
    }
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value)
    })
    anchor.appendChild(script)
}, [])

    return (
        <div id='post-comment'/>
    )
}
// 3. forEach를 이용한 setAttribute 동시 적용
*/
