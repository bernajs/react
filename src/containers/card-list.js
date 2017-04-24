import React, {Component} from 'react';
import {connect} from 'react-redux'
import {selectCard} from '../actions/index'
import {bindActionCreators} from 'redux'

class CardList extends Component {
    renderList() {
        return this
            .props
            .cards
            .map((card) => {
                return (
                    <li key={card.title} onClick= {(()=>this.props.selectCard(card))}>{card.title}</li>
                )
            });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {cards: state.cards}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectCard: selectCard
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
