import React from 'react';
import { darkMode_state } from '../state';
import { useRecoilState } from 'recoil';


const DarkMode_button = () => {
    const [check, setCheck] = useRecoilState(darkMode_state);

    return (
        <>
            <label className="DarkMode_button">
                <input type="checkbox" defaultChecked onClick={() => { setCheck(!check) } }/>
                <span className="Switch_row"/>
            </label>
        </>
    );
}

export default DarkMode_button;