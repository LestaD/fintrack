'use strict';

var Catalog = require('./catalog'),
    libDate = require('./date');

module.exports = (function(){
  function Tracker() {
    this.catalog = new Catalog('~/.financetracker');
    if (this.catalog.isNew()) {
      this.catalog.create();
    }
  }

  /**
   * Recognize arguments and call it
   */
  Tracker.prototype.recognize = function recognize(args) {
    console.log(args);
    if (args.length == 0) {
      this.showStat( libDate.today() );
    }
    else if (args.length == 1) {
      this.newRecord( libDate.today(), args[0] );
    }
    else if (args.length == 2) {
      this.newRecord( libDate.parse(args[0]), args[1] );
    }
    else {
      this.newRecord( libDate.parse(args[0]), args[1], args[2] );
    }
  }

  /**
   * Add new record to files
   */
  Tracker.prototype.newRecord = function newRecord(date, money, comment) {
    var mon = 0;
    if (!!money.match(/\-(\d+)/).length) {
      mon = - Number( money.match(/\-(\d+)/)[1] );
    }
    else {
      mon = Number( money.match(/\+?(\d+)/)[1] );
    }
    
  }

  /**
   *
   */
  Tracker.prototype.showStat = function showStat(date) {
    console.log('stat')
  }

  return Tracker;
})();

