'use strict';

var libDate = module.exports = {
  today: function(){
    var g = new Date();
    return libDate.show(g);
  },
  show: function(d) {
    return d.getUTCDate() + '-' + d.getUTCMonth() + '-' + d.getUTCFullYear();
  },
  forward: function(how) {
    var g = new Date();
    console.log(g, how);
    g.setTime( g.getTime() + (how * 24 * 60 * 60 * 1000) );
    console.log(g);
    return libDate.show(g);
  },
  backward: function(how) {
    var g = new Date();
    g.setTime( g.getTime() - (how * 24 * 60 * 60 * 1000) );
    return libDate.show(g);
  },
  parse: function(strdate) {
    strdate = String(strdate);
    console.log(strdate);
    var dt;
    if (strdate == 'today' || strdate == 'now' || strdate == '0') {
      return libDate.today();
    }
    else if (strdate == 'tomorrow' || strdate == 't') {
      return libDate.forward(1);
    }
    else if (strdate == 'yesterday' || strdate == 'y') {
      return libDate.backward(1);
    }
    else if (dt = strdate.match(/\+(\d+)/)) {
      return libDate.forward( Number(dt[1]) + 1 );
    }
    else if (dt = strdate.match(/\-(\d+)/)) {
      return libDate.backward( Number(dt[1]) + 1 );
    }
    else {
      throw new Error('I dont know what you want!')
    }
  }
};