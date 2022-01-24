import React from 'react'
import { darkModeState } from '../state'
import { useRecoilState } from 'recoil'

const DarkMode_button = () => {
    const [check, setCheck] = useRecoilState(darkModeState)

    return (
        <>
            <label className="DarkMode_button">
                <input type="checkbox" defaultChecked onClick={() => { setCheck(!check) }} />
                <span className="Switch_row" />
            </label>
        </>
    )
}

export default DarkMode_button
