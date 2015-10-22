// * Minimalistic EventEmitter
// TODO a proof-of-concept, migrate to Backbone in a later stage
function EventEmitter(){
  this.cbStore = {};

  this.on = function(evt, cb){
    this.cbStore[evt] = this.cbStore[evt] || [];
    this.cbStore[evt].push(cb);

    return this;
  };

  this.off = function(evt, cb){
    var evtQueue = this.cbStore[evt];

    delete evtQueue[ evtQueue.indexOf(cb) ];

    return this;
  };

  this.emit = function(evt){
    if (!this.cbStore[evt])
      return;

    var self = this;
    var args = [].slice.call(arguments, 1);
    this.cbStore[evt].forEach(function(cb){
      cb.apply(self, args);
    });
  }
}

module.exports = EventEmitter;
