import React, { useEffect } from 'react'
import { SitebarState, subMenuFocus } from '../../state'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import NavigatorMenu from './Navigator_Menu'
import NavigatorStuffHome from './Navigator_Stuff_home'
import NavigatorStuffSearch from './Navigator_Stuff_search'
import Profile from './Profile'

const Navigator = () => {
    const push = useRecoilValue(SitebarState) // 사이트바 버튼 클릭 상태 확인용
    const setFocus = useSetRecoilState(subMenuFocus) // 열린 목록바 판단용
    useEffect(() => { setFocus(0) }, [push]) // Navigator를 끌 때 초기화용

    return (
        <div className={`${push ? 'Navigator_all_wrap' : 'Navigator_all_wrap_off'}`} >
            <div className="Navigator_stuff_wrap" >
                <NavigatorStuffHome />
                <NavigatorStuffSearch />
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
