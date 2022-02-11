import React from 'react'
import { darkModeState } from './state'
import { useRecoilState } from 'recoil'

export default ({ children } : any) => {
    const [prevent, setPrevent] = React.useState(false)
    const [check, setCheck] = useRecoilState(darkModeState)

    // useEffect안에서 동작하는 데이터는 SSR되지 않는 점을 이용, 화면 상태 체크
    React.useEffect(() => {
        setPrevent(true)
        setCheck(localStorage.getItem('Darkmode') === 'true' ? true : false)
        // HTML 렌더링 때 Darkmode 상태 불러오기
    }, [])

    const body = <div id="App" className={`${check ? 'dark' : 'light'}`}>{children}</div>

    // prevents ssr flash for mismatched dark mode
    if (!prevent) {
        return <div style={{ visibility: 'hidden' }}>{body}</div>
    }

    return body
}
