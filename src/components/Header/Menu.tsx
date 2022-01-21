import DarkModeButton from './Darkmode'
import React from 'react'

const Menu = () => {
    return (
        <div className='MenuSpace_wrap'>
            <div className="MenuSpace">
                방명록
            </div>
            <div className="MenuSpace">
                <DarkModeButton />
            </div>
        </div>
    )
}

export default Menu
