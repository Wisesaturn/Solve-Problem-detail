import React, { useEffect } from 'react'
import { SitebarState, subMenuFocus } from '../../state'
import { useRecoilState, useRecoilValue } from 'recoil'
import NavigatorMenu from './Navigator_Menu'
import NavigatorStuff from './Navigator_Stuff'
import Profile from './Profile'

const Navigator = () => {
    const push = useRecoilValue(SitebarState)
    const [focus, setFocus] = useRecoilState(subMenuFocus)
    useEffect(() => { setFocus(0); console.log(focus) }, [push]) // Navigator를 끌 때 초기화용

    return (
        <div className={`${push ? 'Navigator_all_wrap' : 'Navigator_all_wrap_off'}`} >
            <div className="Navigator_stuff_wrap" >
                <NavigatorStuff content="Home" Click="Home" />
                <NavigatorStuff content="Search" Click="Search" />
            </div>
            <div className="Navigator_wrap">
                <Profile />
                <NavigatorMenu content="메뉴1" id="1" />
                <NavigatorMenu content="메뉴2" id="2" />
                <NavigatorMenu content="메뉴3" id="3" />
            </div>
        </div>
    )
}

export default Navigator
