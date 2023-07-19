import { useEffect, useState } from "react";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import traitementDoc from "../MenuData/menu1";

const Accordions = ({navSideData}) => {
    const [data,setData]=useState([
        {title: "Nombre ", content: ["Lorem ipsum dolor sit amet."]},
        {title: "Historique", content: ["Lorem ipsum dolor sit amet."]},
        {title: "Statistique", content: ["Lorem ipsum dolor sit amet."]},
    ])
    const [option,setOption]=useState()
    const [optionSelected,setOptionSelected]=useState()
    console.log(traitementDoc.Traitement_des_dossiers)
    console.log('teaimlkj')

    useEffect(() => {
        if (navSideData === 1) {
          console.log(traitementDoc)
          setOption(["Traitement des dossiers","Etats Paiement"])
          setData(traitementDoc.Traitement_des_dossiers)
          if (option===1) {
            
          } else {
            
          }  
        } else if (navSideData === 2){
            
        }else if (navSideData === 3){

        }
        
    }, [navSideData]);
    /*const data = [
        {title: "Nombre ", content: "Lorem ipsum dolor sit amet."},
        {title: "Historique", content: "Lorem ipsum dolor sit amet."},
        {title: "Statistique", content: "Lorem ipsum dolor sit amet."},
    ];*/
    return (
        <Accordion className="accordionContainer">
            {data.map((item, index) => (
                <AccordionItem  key={index}>
                    {({open}) => (
                        <>
                            <AccordionHeader className={`accordionHeader p-2 ${open ? 'accordion-active-head' : ''}`}>
                                <span className={`accordion-title ${open ? 'accordion-active' : ''}`}>{item.title}</span>
                            </AccordionHeader>
                            <AccordionBody className="">
                               
                                    <div className="accordion-body accordionBody">
                                    tfjhg
                                </div>
                               
                            </AccordionBody> 
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
};
export default Accordions;