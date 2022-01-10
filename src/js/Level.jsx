import React, { useEffect, useState, useCallback } from 'react';
import '../css/Level.scss';
import { lvData, Levels } from './state';

const Level = () => {

    const [isShow, setIsShow] = useState("-- Level --");
    const [isActive, setIsActive] = useState(false);
    const selectStyle = { display: `${isActive ? 'block' : 'none'}` } // check display
    //set the variable

    const onClick = () => {
        setIsActive(!isActive); // 함수가 다 끝나면 작동하는 듯..?
        if (!isActive) { // Open Event

        } else { // Close Event

        }
    }
    // Dropdown

    const onSelect = () => {
        setIsShow("test");
        setIsActive(false);
    }
    // Select Level

    const levelList = Levels.map((d) =>
        <li
            className="Not_Choosed"
            style={selectStyle}
            onClick={onSelect}
            key={d.id}>
            {d.name}
        </li>
    );
    // make List using map

    return (
        <div>
            <li
                id={`${isActive ? 'Choosed' : 'Not_Choosed'}`}
                className="Choosed"
                onClick={onClick}>
                {isShow}
            </li>
            {levelList}
        </div>
    );
}

export default Level;