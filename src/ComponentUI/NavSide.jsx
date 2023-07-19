import React from 'react';
import Accordions from './Accordion';

const NavSide = ({navSideData}) => {
    return (
        <div className='MenuContainer'>
            <Accordions navSideData={navSideData}/>
            <div className='navFooter'>
                &copy; CNPS 2023
            </div>
        </div>
    );
}

export default NavSide;
