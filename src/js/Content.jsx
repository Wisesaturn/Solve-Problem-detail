import React from 'react';
import Navigator from './Navigator';
import Data from './Data';
import '../css/Content.scss';

function Content() {
    return (
        <div className="Content">
            <Navigator />
            <Data />
        </div>
    );
}

export default Content;