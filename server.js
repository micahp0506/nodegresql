'use strict';


const express = require('express');
const models = require('./models/')
const app = express();

const PORT = process.env.PORT || 3000;



app.get('/', (req,res) => {
    res.send({
        status: 'Success'
    });
});

app.get('/genres', (req, res) => {
    models.Genre.findAll().then((genres) => {
        res.send(genres);
    });
});


app.get('/mediatypes', (req, res) => {
    models.MediaType.findAll().then((types) => {
        res.send(types);
    });
});

app.get('/artists', (req, res) => {
    models.Artist.findAll().then((artist) => {
        res.send(artist);
    });
});

app.get('/playlists', (req, res) => {
    models.Playlist.findAll().then((playlist) => {
        res.send(playlist);
    });
});



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
