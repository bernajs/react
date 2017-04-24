import React, {Component} from 'react';
import {connect} from 'react-redux'

class CardDetail extends Component {
    render() {
        if (!this.props.card) {
            return <div>Selecciona una carta para comenzar.</div>
        }
        return (
            <div>
                <h4>
                    Nombre: {this.props.card.title}
                </h4>
                <div>{this.props.card.description}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {card: state.activeCard}
}

export default connect(mapStateToProps)(CardDetail);