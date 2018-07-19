import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListOfCards, showFilter } from '../../../redux/modules';
import { hashHistory } from 'react-router';

import './cards.css';

class Cards extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.showFilter();
        this.props.getListOfCards();
    }
    render() {
        const { cards } = this.props;
        if(cards.length === 0) {
            return (
                <div>
                    <h3>Sorry, No cards to display !</h3>
                </div>
            )
        }
        return (
            <div className="page-content">
                <h4>LANGUAGES &amp; TECHNOLOGIES</h4>
                <div className="card-columns">
                {
                    cards.map(card => {
                        return (
                            <div className="card" key={card.cardId} onClick={() => hashHistory.push(`/${card.cardId}`)} style={{ cursor: 'pointer', width: '300px', margin: '5px' }}>
                                <img className="card-img-top" src="http://via.placeholder.com/600x400" alt="Card image cap" />
                                <div className="card-body">
                                <h5 className="card-title">{card.cardTitle}</h5>
                                <p className="card-text">{card.cardDescription}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cards: state.cards.list
});

const mapDispatchToProps = (dispatch) => ({
    getListOfCards: () => dispatch(getListOfCards()),
    showFilter: () => dispatch(showFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);