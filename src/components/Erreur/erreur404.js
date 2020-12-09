import React from "react";
import ImageError404 from '../../assets/error404.png';

const Erreur404 = (props) => {
    return (
        <>
            <img src={ImageError404} alt="erreur404" width="500px" />
            <h1>La Page n'existe pas</h1>
        </>
    )

}
export default Erreur404;