import React from "react";
import {NavLink} from 'react-router-dom';

const Pays = (props) => {
    let navlinkSolo = ''
    if(!props.solo){
        navlinkSolo = <NavLink to={`/pays/${props.nom}`} className="nav-link" >Voir la fiche du Pays</NavLink>
    }else{
        navlinkSolo = (
            <>
                <div>Monnaie : {props.currencies[0].name}</div>
                <div>Nombre Habitants : {props.population}</div>
                <div>{
                        props.languages.length > 1 ? <>
                            {props.languages.map((lang, index) => {
                                return <div key={index}>Langues-{index} :{lang.name}</div>
                            })}
                        </> 
                        : <>
                            <div>Langues : {props.languages[0].name}</div>
                        </>
                    }
                </div>
                <div>
                     <NavLink to="/pays" className="nav-link text-right font-italic" >Retour Liste Pays</NavLink>
                </div>
            </>
        )
    }
    return (
        <>
           <div className="row no-gutters border m-2 p-2">
               <div className="col-4">
                   <img src={props.drapeau} width="100%" className="p-2" alt={props.nom} />
               </div>
               <div className="col">
                    <div className="row no-gutters">
                        <div className="col-6">
                            <h3>Nom : {props.nomFrench}</h3>
                            <div>
                                Capital : {props.capital}
                            </div>
                            <div>
                                Région : {props.region}
                            </div>
                        </div>
                        {
                            !props.solo ? 
                            <div>
                                {navlinkSolo}
                            </div> :
                            <div className="col-6">
                                {navlinkSolo}
                            </div>
                        }
                        
                    </div>
               </div>

           </div>
        </>
    )

}
export default Pays;