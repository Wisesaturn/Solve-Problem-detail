import 'prismjs/themes/prism-okaidia.css'
import '../../public/App.scss'
import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Footer from '../components/Footer/Footer'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Loading from '../components/Loading'
import Provider from './provider'
import { RecoilRoot } from 'recoil'
import { useRouter } from 'next/router'

function App({ Component, pageProps }: AppProps) {
    // 로딩 페이지 만들기용 --------------
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    const handleStart = (url : string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false)
      // useEffect로 변화가 생길 때, url 값이 변할 경우 Loading State를 true로 반환, 그렇지 않으면 false 반환
    }
    const handleComplete = (url : string) => setLoading(false)
     // useEffect로 변화가 생길 때, url 값과 상관 없이 Loading State를 false로 반환

    router.events.on('routeChangeStart', handleStart) // routeChange가 시작할 때 handleStart 함수를 통해 url 체크 (true/false)
    router.events.on('routeChangeComplete', handleComplete) // routeChange가 완료될 때 handleComplete 함수를 통해 false 반환
    router.events.on('routeChangeError', handleComplete) // routeChange가 오류가 났을 때 handleComplete 함수를 통해 false 반환
  }, [router])
  // 참고 : https://www.bhagyamudgal.me/blog/how-to-make-custom-loading-screen-in-nextjs-project

    return (
        <RecoilRoot>
            <Provider>
                <Head>
                    <title>재한쓰의 공부용 블로그 😊</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <Loading loading={loading}/>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </RecoilRoot>
    )
}

export default App
