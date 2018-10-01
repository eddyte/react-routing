import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
              <Link to="/"> Retour à l'accueil </Link>
              <p>Bienvenue sur l'accueil</p>
            </div>
        );
    }
}

export default Home;