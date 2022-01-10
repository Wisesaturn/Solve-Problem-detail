import React from 'react';
import "../css/Navigator.scss"
import { BsSearch } from 'react-icons/bs';

const Search = () => {
    return (
        <div id="Search">
           <input type="text" required minLength="3" placeholder="Search 입니다."></input>
            <BsSearch />
        </div>
    );
}

export default Search;