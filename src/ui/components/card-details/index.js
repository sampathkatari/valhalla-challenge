import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCardDetail, hideFilter } from '../../../redux/modules';
import { hashHistory } from 'react-router';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import toUpper from 'lodash/toUpper';

import './card-details.css';

const data = [{name: 'Javascript', value: 400}, {name: 'Python', value: 300},
                  {name: 'Angular', value: 300}, {name: 'Node.js', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class CardDetails extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.hideFilter()
        this.props.getCardDetail(this.props.params.cardId)
    }
    render() {
        const { card } = this.props;
        if(!card.cardPost) {
            return (
                <div>
                </div>
            )
        }
        return (
            <div className="">
                <div className="header">
                    <button className='back-button' onClick={() => hashHistory.push('/')}>Go back</button>
                    <h3>{toUpper(card.cardPost.postTitle)}</h3>
                </div>
                <div className="container">
                    <div className="description">
                        {card.cardPost.postDescription}
                    </div>
                    <div className="graph">
                        <PieChart width={200} height={200}>
                            <Pie
                                data={data} 
                                cx={100} 
                                cy={100} 
                                labelLine={false}
                                outerRadius={80} 
                                fill="#8884d8"
                                >
                                {
                                    data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                                }
                            </Pie>
                        </PieChart>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    card: state.cards.detail
})

const mapDispatchToProps = (dispatch) => ({
    getCardDetail: (cardId) => dispatch(getCardDetail(cardId)),
    hideFilter: () => dispatch(hideFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);