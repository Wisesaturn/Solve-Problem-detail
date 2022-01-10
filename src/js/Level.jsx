import React, { useEffect, useState, useCallback } from 'react';
import '../css/Level.scss';
import { lvData, Levels } from './state';
import { useRecoilState } from 'recoil';
import { IoIosArrowDown } from "react-icons/io";

const Level = () => {
    const [isShow, setIsShow] = useRecoilState(lvData);
    const [isActive, setIsActive] = useState(false);
    const selectStyle = { display: `${isActive ? 'block' : 'none'}` } // check display
    //set the variable

    const onClick = () => {
        setIsActive(!isActive); // 함수가 다 끝나면 작동하는 듯..?
    }
    // Dropdown

    const onSelect = (e) => {
        setIsShow("Level " + e.target.id);
        setIsActive(false);
    }
    // Select Level

    const levelList = Levels.map((d) =>
        <li
            className="Not_Choosed"
            style={selectStyle}
            onClick={onSelect}
            key={d.id}
            id={d.id}>
            {d.name}
        </li>
    );
    // make List using map

    return (
        <div
            className={`${isActive ? 'dropDown' : 'dropDown_off'}`}>
            <li
                id={`${isActive ? 'Choosed' : 'Not_Choosed'}`}
                className="Choosed"
                onMouseOver={onClick}>
                {isShow}
                <IoIosArrowDown id="icon"/>
            </li>
            
            {levelList}
        </div>
    );
}

export default Level;