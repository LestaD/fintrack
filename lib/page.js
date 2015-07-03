'use strict';

var Json = require('jsonsave'),
    Record = require('./record');

module.exports = (function(){
  function Page(catalog, path) {
    this.catalog = catalog;
    this.file = Json.new(path);
  }

  Page.prototype.list = function list() {
    return this.file.list;
  }

  Page.prototype.save = function save() {
    this.file.$$save();
  }

  Page.prototype.saveRec = function(record) {
    // .. search and update
  }

  Page.prototype.insert = function insert(record) {
    this.file.list.push(record);
  }

  page.prototype.create = function create() {
    return new Record(this);
  }

  return Page;
})();