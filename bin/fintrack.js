#!/usr/bin/env node

'use strict';

var minimist = require('minimist'),
    conlog = require('conlog')('Finance Tracker'),
    json = require('jsonsave'),
    Tracker = require('../lib/tracker.js');

var fintrack = new Tracker();
fintrack.recognize(process.argv.splice(2));