const express = require('express');
const router = express.Router();

const lists = require("../../List");

router.get('/userId', (req, res) => {
    const found = lists.some(list => list.userId === req.params.userId);

    if (found) {
        res.json(lists.filter(list => list.userId === req.params.userId));
    } else {
        res.status(400).json({ msg: `No match information with member of ${req.params.userId}` })
    }
});

module.exports = router;