'use strict';

var Path = require('path'),
    Page = require('./page'),
    Record = require('./record'),
    Fs = require('fs'),
    Json = require('jsonsave');


module.exports = (function(){
  /**
   *
   */
  function Catalog(path) {
    this.directory = Path.resolve(path);
    this.new = true;
    this.settings = Json.new(this.directory + '/settings.json');
  }

  /**
   *
   */
  Catalog.prototype.isNew = function isNew() {
    return !!this.new;
  }

  /**
   *
   */
  Catalog.prototype.create = function create() {
    if (!Fs.existsSync(this.directory)) {
      Fs.mkdirSync(this.directory, 0775);
    }
  }

  /**
   *
   */
  Catalog.prototype.new = function new(date, money) {
    var rec = new Page(this, Path.resolve(this.directory, date + '.jsrec'));
    return rec;
  }

  Catalog.prototype.resolve = function resolve(dt) {
    return ;
  }

  Catalog.prototype.save = function save() {
    this.settings.$$save();
  }

  return Catalog;
})();