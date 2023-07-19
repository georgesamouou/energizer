import React from 'react';

const Navigation = ({text,active,setActive}) => {
    const handleChangeState = ()=>{
        if (text==="Traitement / Etat") {
            setActive(1)
        } else if(text==="Suivies"){
            setActive(2)
        }else if(text==="Diverses Extraction"){
            setActive(3)
        }
    }
    return (
        <div onClick={handleChangeState} className= {`p-2 navigationBox ${active}`}>
            {text}
        </div>
    );
}

export default Navigation;
