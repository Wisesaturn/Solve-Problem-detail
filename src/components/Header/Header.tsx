import { Home, SitebarState } from '../state'
import { HiOutlineViewList } from 'react-icons/hi'
import Menu from './Menu'
import React from 'react'
import { useRecoilState } from 'recoil'

function Header() {
    const [push, setPush] = useRecoilState(SitebarState)

    const Sitebar_button = () => {
        setPush(!push) // 'Sitebar_button' 함수가 다 끝나고 작동
    }

    const Sitebar = () => {
        return (
            <div className="Sitebar">
                <HiOutlineViewList
                    size="34"
                    onClick={Sitebar_button} />
            </div>
        )
    }

    return (
        <div className="Header">
            <Sitebar />
            <a href={Home}>재한's 스터디 블로그</a>
            <Menu />
        </div>
    )
}

export default Header
