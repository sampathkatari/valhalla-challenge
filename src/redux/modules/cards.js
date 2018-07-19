/* 
Reducer for storing cards data
*/
import { API_URL } from '../../config';
import fetch from 'isomorphic-fetch';

const initialState = {
    list: [],
    detail: {}
};

export const GET_CARDS = 'GET_CARDS';
export const GET_CARD_DETAIL = 'GET_CARD_DETAIL';

export const getCards = (cards) => ({
    type: GET_CARDS,
    cards
});

export const cardDetail = (card) => ({
    type: GET_CARD_DETAIL,
    card
});

const fetchOptions = {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
}

export const getListOfCards = () => (dispatch, state) => {
    fetch(`${API_URL}/cards`, fetchOptions)
    .then(response => response.json())
    .then(response => {
        dispatch(getCards(response))
    })
}

export const getCardDetail = (cardId) => (dispatch, state) => {
    fetch(`${API_URL}/cards/${cardId}`, fetchOptions)
    .then(response => response.json())
    .then(response => {
        dispatch(cardDetail(response))
    })
}

export const applyFilter = (filterType) => (dispatch, state) => {
    fetch(`${API_URL}/cards/filter/${filterType}`, fetchOptions)
    .then(response => response.json())
    .then(response => {
        dispatch(getCards(response))
    })
}

export const search = (searchKey) => (dispatch, state) => {
    fetch(`${API_URL}/cards/search/${searchKey}`, fetchOptions)
    .then(response => response.json())
    .then(response => {
        dispatch(getCards(response))
    })
}

export const cards = (cards = initialState, action) => {
    switch(action.type) {
        case GET_CARDS:
            return Object.assign({}, cards, { list: action.cards });
        case GET_CARD_DETAIL:
            return Object.assign({}, cards, { detail: action.card });
        default:
            return cards;
    }
}