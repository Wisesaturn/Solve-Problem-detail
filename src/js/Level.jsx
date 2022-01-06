import React, { useEffect, useState, useCallback } from 'react';
import '../css/Level.scss';

const Level = () => {

    const Levels = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"]; 
    const [isActive, setIsActive] = useState(false);

    const onClick = () => setIsActive(!isActive);

    const levelList = Levels.map((d) =>
        <li className={`${isActive ? 'Choosed' : 'Not_Choosed'}`} onclick={onClick}>
            {d}
        </li>
    );

    return (
        <div>
            {levelList}
        </div>
    );
}

export default Level;