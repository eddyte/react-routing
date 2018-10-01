import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class History extends Component {
    render() {
        return (
            <div>
              <Link to="/"> Retour à l'accueil </Link>
              <div className="red"> <p>Notre histoire</p></div>
            </div>
        );
    }
}

export default History;