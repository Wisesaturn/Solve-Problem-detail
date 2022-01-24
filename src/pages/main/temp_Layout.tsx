import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Modal from '../../components/Modal'
import React from 'react'
import { darkModeState } from '../../components/state'
import { useRecoilValue } from 'recoil'

const Layout = () => {
    const check: boolean = useRecoilValue(darkModeState)

    return (
        <>
            <div id="App" className={`${check ? 'dark' : 'light'}`}>
                <Header />
                <Content />
                <Footer />
            </div>
            <Modal className="Modal" visible={false} />
        </>
    )
}

export default Layout
