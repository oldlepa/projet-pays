import React, {Component} from "react";
import axios from 'axios';
import Titre from '../../components/Titre/titre';
import Pays from '../PaysManager/Pays/Pays';

class UnPays extends Component {
    state = {
        pays: null,
        loading: false
    }

    componentDidMount = () => {
        this.setState({loading:true})
        axios.get(`https://restcountries.eu/rest/v2/name/${this.props.match.params.id}?fullText=true`)
             .then(response => {
                 console.log(response.data);
                 this.setState({
                    pays : response.data[0],
                    loading:false
                })
             })
             .catch(error  => {
                 console.log(error);
                 this.setState({loading:false})
             });
    }

    render(){
        this.state.pays && console.log(this.state.pays.flag);
        return(
            <>
             <div className="container">
                {
                    this.state.loading ? <h1>Chargement en Cour ...</h1> 
                    :
                    <>
                        {
                            this.state.pays && (<>
                            <Titre>Page du Pays {this.state.pays.translations.fr} </Titre>
                             <Pays
                                drapeau={this.state.pays.flag}
                                capital={this.state.pays.capital}
                                region={this.state.pays.region}
                                nomFrench={this.state.pays.translations.fr}
                                nom={this.state.pays.name}
                                solo={true}
                                {...this.state.pays}
                            /> 
                        </>)}
                    </>
                                 
                }
            </div>
                
            </>
        )
    }
}

export default UnPays;