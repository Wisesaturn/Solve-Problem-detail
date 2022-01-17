import React from 'react';
import '../../css/Data.scss';
import Title from './title';
import Main_content from './main-content';
import Comment from './comment';
import Search_area from './Search_area';

const Data = () => {
     return (
         <div className="Data">
             <Search_area />
             <Title />
             <Main_content />
             <Comment />
         </div>
     );
}

export default Data;