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

app.get('/albums/:id', (req, res) => {
  models.Album.findOne({
        where: {
            AlbumId: req.params.id
        }
    }).then((album) => {
        res.send(album);
    });
});

app.get('/albums/:id/artist', (req, res) => {
    models.Album.findOne({
        where: {
            AlbumId: req.params.id
        },
        include: {
            model: models.Artist,
            attributes: {exclude: [
                'ArtistId'
            ]}
        }
    }).then((artist) => {
        res.send(artist);
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

app.get('/invoices/:id', (req, res) => {
  models.Invoice.findOne({
        where: {
            InvoiceId: req.params.id
        }
    }).then((invoice) => {
        res.send(invoice);
    });
});

app.get('/invoices/:id/customer', (req, res) => {
  models.Invoice.findOne({
      where: {
        InvoiceId: req.params.id
      }
    })
    .then(invoice => invoice.getCustomer())
    .then(customer => res.send(customer));
});
app.get('/employees', (req, res) => {
    models.Employee.findAll().then((employees) => {
        res.send(employees);
    });
});

app.get('/employees/:id', (req, res) => {
    models.Employee.findOne({
        where: {
            EmployeeId: req.params.id
        },
        include: {
            model: models.Employee,
            as: 'Boss',
            attributes: [
                'FirstName',
                'LastName'
            ]
        }
    }).then((employee) => {

        res.send(employee);
    });
});

app.get('/employees/:id/customers', (req, res) => {
    models.Employee.findOne({
        where: {
            EmployeeId: req.params.id
        },
        include: {
            model: models.Customer,
            as: 'Customers',
            attributes: [
                'FirstName',
                'LastName'
            ]
        }
    }).then((employee) =>{
        res.send(employee);
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
