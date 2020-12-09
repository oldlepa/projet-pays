import React, {Component} from "react";
import Titre from '../../components/Titre/titre';
import Bouton from '../../components/bouton/bouton';
import axios from 'axios';
import Pays from "./Pays/Pays.js";

class PaysManager extends Component {
    state = {
        listesPays: [],
        loading : false,
        regionSelectionner: null,
        pageSelectionner: 1
    }
    componentDidMount = () => {
       this.handleFilterContinent('all')
    }

    handleFilterContinent = (continent) => {
        let param = '';
        if(continent === 'all') param = 'all';
        else{
            param = `region/${continent}`;
        }
        this.setState({loading : true});
        axios.get(`https://restcountries.eu/rest/v2/${param}`)
            .then(response => {
                const listesPays = response.data.map(pays => {
                    return {
                        nom: pays.name,
                        nomFrench : pays.translations.fr,
                        capital : pays.capital,
                        region : pays.region,
                        drapeau : pays.flag
                    }
                })
                console.log(listesPays)
                this.setState({
                    listesPays : listesPays, 
                    loading : false,
                    regionSelectionner: continent,
                    pageSelectionner: 1
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({loading : false})
            })
    }

    handleFilterPagination = (numpage) => {
        console.log(numpage);
        this.setState({pageSelectionner: numpage})
    }

    render(){
        let pagination = [];
        let listePays = "";
        if(this.state.listesPays){
            let fin = this.state.listesPays.length / 10;
            if(this.state.listesPays.length % 10 !== 0) fin++;
            for(let i = 1; i<= fin; i++) {
                pagination.push(<Bouton key={i}
                    classNameBouton="btn-info" 
                    clic={() => this.handleFilterPagination(i)}
                    estSelectionner={this.state.pageSelectionner === i}
                >{i}</Bouton>);
            }
            let debut = (this.state.pageSelectionner -1) * 10;
            let finListe =this.state.pageSelectionner * 10;
            let listePaysPagination = this.state.listesPays.slice(debut, finListe)
            listePays = listePaysPagination.map((pays,index) => {
                console.log(pays)
                return(
                    <div key={index} className="col-12 col-md-6">
                        <Pays {...pays} {...this.props}/>
                    </div>  
                )
            })
        }
        
        return(
            <>
            <div className="container">
                <Titre>Liste des Pays du Monde</Titre>
                <Bouton 
                    classNameBouton="btn-info" 
                    clic={() =>this.handleFilterContinent("all")}
                    estSelectionner={this.state.regionSelectionner === "all"}
                    >Tous</Bouton>
                <Bouton 
                    classNameBouton="btn-info" 
                    clic={() => this.handleFilterContinent("Africa")}
                    estSelectionner={this.state.regionSelectionner === "Africa"}
                    >Afrique</Bouton>
                <Bouton 
                    classNameBouton="btn-info" 
                    clic={() => this.handleFilterContinent("Americas")}
                    estSelectionner={this.state.regionSelectionner === "Americas"}
                    >Amérique</Bouton>
                <Bouton 
                    classNameBouton="btn-info" 
                    clic={() => this.handleFilterContinent("Asia")}
                    estSelectionner={this.state.regionSelectionner === "Asia"}
                    >Asie</Bouton>
                <Bouton 
                    classNameBouton="btn-info" 
                    clic={() => this.handleFilterContinent("Europe")}
                    estSelectionner={this.state.regionSelectionner === "Europe"}
                    >Europe</Bouton>
                <Bouton 
                    classNameBouton="btn-info" 
                    clic={() => this.handleFilterContinent("Oceania")}
                    estSelectionner={this.state.regionSelectionner === 'Oceania'}
                    >Oceania</Bouton>
                Nombre de Pays : <span className="badge badge-success">{this.state.listesPays.length}</span>
                <div>
                    {this.state.loading ? 
                        <div>Chargement API... </div> 
                        :
                        <div className="row no-gutters">
                            {
                                listePays
                            }
                        </div>
                    
                    }
                    
                </div>
                <div>
                    {
                        pagination
                    }
                </div>
            </div>
            </>
        )
    }
}

export default PaysManager;