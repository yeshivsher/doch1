const express = require('express');
const router = express.Router();
const Soldier = require('../models/soldiersList');

// get a list of soldiers from the db
router.get('/soldiers', function (req, res, next) {
    Soldier.find({}
    ).then(function (soldiers) {
        res.send(soldiers);
    }).catch(next);
});

// get a specific soldier from the db
router.get('/soldier/:id', function (req, res, next) {
    Soldier.find({ _id: req.params.id }
    ).then(function (soldier) {
        res.send(soldier);
    }).catch(next);
});

// add a new soldier to the db
router.post('/soldiers', function (req, res, next) {
    Soldier.create(req.body
    ).then(function (soldier) {
        res.send(soldier);
    }).catch(next);
});

// update a soldier in the db
router.put('/soldiers/:id', function (req, res, next) {
    Soldier.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Soldier.findOne({ _id: req.params.id }).then(function (soldier) {
            res.send(soldier);
        });
    }).catch(next);
});

// delete a soldier from the db
router.delete('/soldiers/:id', function (req, res, next) {
    Soldier.findByIdAndRemove({ _id: req.params.id }).then(function (soldier) {
        res.send(soldier);
    }).catch(next);
});

module.exports = router;
