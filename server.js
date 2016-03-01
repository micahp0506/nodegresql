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

app.get('/albums', (req, res) => {
    models.Album.findAll({
        attributes: ['AlbumId', 'Title'],
        include: {
            model: models.Artist,
            attributes: ['Name']
        }
    }).then((albums) => {
        res.send(albums);
    });
});


app.get('/invoices', (req, res) => {
  models.Invoice.findAll({
      attributes: { exclude: 'CustomerId' },
      include: {
        model: models.Customer,
        attributes: { exclude: [
          'CustomerId',
          'SupportRepId'
        ]}
      }
    }).then((invoices) => {
        res.send(invoices)
    });
});

app.get('/customers/:id', (req, res) => {
    models.Customer.findOne({
        where: {
            CustomerId: req.params.id
        }
    }).then((customer) => {
        res.send(customer);
    });
});

app.get('/customers/:id/invoices', (req, res) => {
    models.Customer.findOne({
        where: {
            CustomerId: req.params.id
        },
        include: models.Invoice
    }).then((invoices) => {
        res.send(invoices);
    });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
