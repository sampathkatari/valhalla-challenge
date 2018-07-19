import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sidebar.css';
import { applyFilter, getListOfCards, search } from '../../../redux/modules';
import autobind from 'react-autobind';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        autobind(this);
        this.state = {
            selectedOption: ''
        }
    }
    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
            selectedOption: value,
            searchKey: ''
        })
        this.props.applyFilter(value);
    }
    clearFilter() {
        this.setState({
            selectedOption: '',
            searchKey: ''
        })
        this.props.getListOfCards();
    }
    onSearch(evt) {
        const value = evt.target.value;
        if(value.length === 0) {
            this.props.getListOfCards();
        }
        else if(value.length >= 2) {
            this.props.search(value)
        }
        this.setState({
            searchKey: value
        })
    }
    render() {
        return (
            <div id="sidebar" className="sidebar">
                <div className="dev-name">
                    <p>DEV NAME</p>
                    <p>DNI XX XXX XXX</p>
                    <p>XX YEARS OLD</p>
                </div>
                {
                    this.props.filterDisplay && 
                    <div>
                        <input 
                            type='text'
                            placeholder="Search in cards"
                            value={this.state.searchKey}
                            onChange={this.onSearch}
                        />
                        <div className="filter-by">
                            <p>Filter By</p>
                            <div>
                                <input 
                                    type="radio"
                                    id="frontend"
                                    name="filterby"
                                    value="Frontend"
                                    checked={this.state.selectedOption === 'Frontend'}
                                    onChange={this.handleChange} />
                                <span> Frontend</span>
                            </div>
                            <div>
                                <input 
                                    type="radio"
                                    id="backend"
                                    name="filterby"
                                    value="Backend"
                                    checked={this.state.selectedOption === 'Backend'}
                                    onChange={this.handleChange}/>
                                <span> Backend</span>
                            </div>
                            <button className='clear-button' onClick={this.clearFilter}>Clear Filters</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filterDisplay: state.context.filterDisplay
})

const mapDispatchToProps = (dispatch) => ({
    applyFilter: (filterType) => dispatch(applyFilter(filterType)),
    getListOfCards: () => dispatch(getListOfCards()),
    search: (searchKey) => dispatch(search(searchKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);