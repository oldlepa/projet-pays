import React from "react";

const Accueil = (props) => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-3">Bienvenu dans mon application React</h1>
                <p className="lead">
                    Ce site est fait à 100% avec React. Le code source du projet se trouve là (
                        <a className="btn btn-outline-primary" href="https://github.com/oldlepa/projet-pays" target="_blank" rel="noopener noreferrer">Github</a>                            
                    ).
                    Faites-moi vos recommandations pour des évolutions en ajoutant un commentaire en bas de la page.                </p>
                <hr className="my-4"/>
                <div>
                    <p>
                        Les technologies utilisées pour réaliser cette appplication REACT sont :
                    </p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">React</li>
                        <li class="list-group-item">Axios</li>
                        <li class="list-group-item">Bootstrap</li>
                        <li class="list-group-item">React router dom</li>
                        <li class="list-group-item">API countries (
                            <a className="btn btn-outline-primary" href="https://restcountries.eu/" target="_blank" rel="noopener noreferrer">API</a>                            
                        )</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )

}
export default Accueil;