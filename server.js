const express = require('express');
let Message = require('./models/message');


let app = express()
const port = 8000

// use module json express.
app.use(express.json());

// parser the data.
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.json({ message: 'OK' })
});

app.get('/index', (req, res) => {

    Message.all( function(messages) {
        res.json({ message: messages })
    })
});
app.post('/index', (req, res) => {

    Message.create(req.body.content, (err, data) => {
        if (err)
        res.status(500).send({
          message: 
            err.message || "Some error occurred while creating the Message."
        });
        else res.send(data);
      })
});

app.put('/index/:id', (req, res) => {

    Message.update( req.body.content, req.params.id, (err, data) => {
        if (err) {
            return res.status(500).send({ errors: { global: "Something went wrong" } });
        }
        return res.status(200).send(data)
    });
});

app.delete('/:id', (req, res) => {

    Message.delete( req.params.id, (error, data) => {
        if (error) {
            return res.status(500).send({ errors: { global: "Something went wrong" } });
        }
        return res.status(200).send(data)
    });
})

app.get('/:id', (req, res) => {

    Message.find(req.params.id, function (message) {
        res.json({ message: message });
    })

});

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))