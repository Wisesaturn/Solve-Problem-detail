import React, { useEffect } from 'react'
import { SitebarState, subMenuFocus } from '../../state'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Link from 'next/Link'
import NavigatorMenu from './Navigator_Menu'
import NavigatorStuff from './Navigator_Stuff'
import Profile from './Profile'

interface Nprops {
    content : string
}

const Navigator = (props: Nprops) => {
    const push = useRecoilValue(SitebarState)
    const setFocus = useSetRecoilState(subMenuFocus)
    useEffect(() => { setFocus(0) }, [push]) // Navigator를 끌 때 초기화용

    return (
        <div className={`${push ? 'Navigator_all_wrap' : 'Navigator_all_wrap_off'}`} >
            <div className="Navigator_stuff_wrap" >
                <Link href="/"><NavigatorStuff content="Home" Click="Home" /></Link>
                <NavigatorStuff content="Search" Click="Search" />
            </div>
            <div className="Navigator_wrap">
                <Profile />
                <NavigatorMenu content="기록" id="3" />
            </div>
        </div>
    )
}

export default Navigator

/* 보류
                <NavigatorMenu content="코딩테스트" id="1" />
                <NavigatorMenu content="공부" id="2" /> 
*/
