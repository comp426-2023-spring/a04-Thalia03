import {rps, rpsls}  from './lib/rpsls.js'
import minimist from 'minimist'
import express from 'express'

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

