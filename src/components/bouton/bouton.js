import React from "react";

const Bouton = (props) => {
    const classNameBouton = `btn ${props.classNameBouton} ${props.styleCss}`;
    return (
        <>
            <button 
                className={classNameBouton} 
                onClick={props.clic}
                style={props.estSelectionner ? {opacity: 1} : {opacity: 0.7}}
            >
                {props.children}
            </button>
        </>
    )

}
export default Bouton;