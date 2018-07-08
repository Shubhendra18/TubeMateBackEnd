var express = require('express');
var router = express.Router();
var VideoSchema = require('../models/VideoSchema');

router.post('/create', (req, res, next) => {
    var VideoObj = new VideoSchema({
        Title: req.body.Title,
        Path: req.body.Path,
        Des: req.body.Des,
    });
    VideoObj.save((err, addedData) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: addedData });
    });
});

router.get('/read', (req, res, next) => {
    VideoSchema.find({}, (err, allData) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: allData });
    });
});

router.put('/update', (req, res, next) => {
    VideoSchema.findById(req.body._id, (err, UpdatedData) => {
        if (err)
            res.status(500).json({ errmsg: err });
            UpdatedData.Title = req.body.Title;
            UpdatedData.Path = req.body.Path;
            UpdatedData.Des = req.body.Des;
            UpdatedData.save((err, UpdatedData) => {
            if (err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ msg: UpdatedData });
        });
    });
});
router.delete('/delete/:id', (req, res, next) => {
    VideoSchema.findOneAndRemove({ _id: req.params.id }, (err, deletedData) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: deletedData });

    });
});
module.exports = router;