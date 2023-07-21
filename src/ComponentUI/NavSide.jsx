import React, { useEffect, useState } from 'react';
import Accordions from './Accordion';

const NavSide = ({navSideData}) => {
    const [displayNav,setDisplayNav]= useState(true)
    useEffect(() => {
        setDisplayNav(true)
    }, [navSideData]);
    const handleDisplayNav = ()=>{
        if (displayNav) {
            return (
                <div className='MenuContainer'>
                    <Accordions setDisplayNav={setDisplayNav} navSideData={navSideData}/>
                    <div className='navFooter'>
                        &copy; CNPS 2023
                    </div>
                </div>
            )
        }
    }
    return (
        <>
        {handleDisplayNav()}
        </>
        
    );
}

export default NavSide;
