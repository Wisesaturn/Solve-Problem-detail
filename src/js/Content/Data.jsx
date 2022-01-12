import React from 'react';
import '../../css/Data.scss';
import Title from './title';
import Main_content from './main-content';
import Comment from './comment';

const Data = () => {
     return (
         <div className="Data">
             <Title />
             <Main_content />
             <Comment />
         </div>
     );
}

export default Data;