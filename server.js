import {rps, rpsls}  from './lib/rpsls.js'
import minimist from 'minimist'
import express from 'express'

const args = minimist(process.argv.slice(2));
const port = args.port || args.p || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/app', (req, res) => {
    res.status(200).send('200 OK');
})

app.get('/app/rps', (req, res) => {
    res.status(200).send(rps());
})

app.get('/app/rpsls', (req, res) => {
    res.status(200).send(rpsls());
})

