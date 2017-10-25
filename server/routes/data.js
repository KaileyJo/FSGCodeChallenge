/**
 * Created by kaileycolestock on 10/24/17.
 */
var express = require('express');
var router = express.Router();
var pg = require('pg');

var connectionString = '';

if(process.env.DATABASE_URL !== undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/worldbank';
}

router.get('/', function(req, res) {
    var results = [];

    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM temp_world_bank_chn');

        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

router.get('/topics', function(req, res) {
    var results = [];

    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM world_bank_topics');

        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

router.get('/topicCode/:topic_code', function(req, res) {
    var results = [];

    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM temp_world_bank_chn WHERE substring(indicator_code from 1 for 2) = $1',
                    [req.params.topic_code]);

        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

module.exports = router;

