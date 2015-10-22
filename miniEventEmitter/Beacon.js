var EventEmitter = require('./EventEmitter');

function Beacon(msg){
  this.lastMsg = msg;
}

Beacon.prototype = new EventEmitter();

module.exports = Beacon;
