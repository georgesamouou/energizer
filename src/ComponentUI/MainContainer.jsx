import React from 'react';
import NavSide from './NavSide';
import banner from '../assets/cnpsBanner.png'

const MainContainer = ({navSideData}) => {
    return (
        <div className='mainBox'>
            <NavSide navSideData={navSideData}/>
            <div>
                Main Container
                <img src={banner} className='bannerImg' alt="" srcset="" />
            </div>
        </div>
    );
}

export default MainContainer;
