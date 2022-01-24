import React from 'react'
import { darkModeState } from '../../components/state'
import { useRecoilValue } from 'recoil'

export default ({ children } : any) => {
    const [prevent, setPrevent] = React.useState(false)
    const check = useRecoilValue(darkModeState)

    // useEffect안에서 동작하는 데이터는 SSR되지 않는 점을 이용, 화면 상태 체크
    React.useEffect(() => {
        setPrevent(true)
    }, [])

    const body = <div id="App" className={`${check ? 'dark' : 'light'}`}>{children}</div>

    // prevents ssr flash for mismatched dark mode
    if (!prevent) {
        return <div style={{ visibility: 'hidden' }}>{body}</div>
    }

    return body
}
