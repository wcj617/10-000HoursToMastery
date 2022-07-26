const express = require('express');
const router = express.Router();

const lists = require("../../List");

router.get('', (req, res) => {
    const found = lists.some(list => list.userId === req.query.userId);
    if (found) {
        res.json(lists.filter(list => list.userId === req.query.userId));
    } else {
        res.status(400).json({ msg: `No match information with member of ${req.query.userId}` })

    }
});

module.exports = router;