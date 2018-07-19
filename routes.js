const express = require('express');
const router = express.Router();
const cards = require('./mock/cards.json');
const find = require('lodash/find');

// Api for getting the list of cards
router.get('/cards', (req, res, next) => {
    res.json(cards)
});

//Api for getting the detail of the card provided the id
router.get('/cards/:cardId', (req, res, next) => {
    const card = find(cards, { cardId: parseInt(req.params.cardId) });
    if(card) {
        res.json(card)
    } else {
        res.json({
            message: 'No card found'
        })
    }
})

router.get('/cards/filter/:filtertype', (req, res, next) => {
    const filteredCards = cards.filter(card => card.cardTechnology.includes(req.params.filtertype))
    res.json(filteredCards)
});

router.get('/cards/search/:searchkey', (req, res, next) => {
    const filteredCards = cards.filter(card => (new RegExp(req.params.searchkey, "i")).test(card.cardTitle) || (new RegExp(req.params.searchkey, "i")).test(card.cardDescription))
    res.json(filteredCards)
});

module.exports = router;