'use strict';

module.exports = (function(){
  function Record(Parent) {
    this.parent = Parent;
  }

  Record.prototype.money = 0;
  Record.prototype.comment = '';

  /**
   *
   */
  Record.prototype.save = function save() {
    this.parent.saveRec(this);
  };

  /**
   *
   */
  Record.prototype.delete = function delete() {
    this.parent.delete(this);
  }

  Record.prototype.toJson = function() {
    return {
      money: this.prototype.money,
      comment: this.prototype.comment
    };
  }

  return Record;
})();