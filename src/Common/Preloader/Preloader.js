import React from 'react';
import preloader from '../../Images/preloader.svg';

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'white' } }>
        <img src={preloader} alt='' />
    </div>
};

export default Preloader;