var Beacon = require('../Beacon');

var assert = require('assert');

describe("Beacon should respond to events.", function(){
  var myBeacon = null;

  before(function(){
    myBeacon = new Beacon("hello");

    myBeacon.on('help', function(msg){
      this.lastMsg = msg;
    });

    myBeacon.on('goodbye', function(msg){
      this.lastMsg = msg;
    })
  });

  it("init correctly", function(){
    assert.equal(myBeacon.lastMsg, "hello");
  });

  it('help event', function(){
    var msg = "I've fallen love!";

    myBeacon.emit('help', msg);

    assert.equal(myBeacon.lastMsg, msg);
  });

  it('goodbye event', function(){
    var msg = 'Love never lasts!';

    myBeacon.emit('goodbye', msg);

    assert.equal(myBeacon.lastMsg, msg);
  });

  it('none event', function(){
    var msg = 'Love never lasts!';
    var newMsg = 'You never know!';

    myBeacon.emit('none', newMsg);

    assert.notEqual(myBeacon.lastMsg, newMsg)
  });

  it('multiple on/off should work', function(){
    function annoyanceCB(msg){
      this.lastMsg = msg;
    };
    
    var msg = "I'm back! honey~~~";
    myBeacon
      .on('annoyance', annoyanceCB)
      .emit('annoyance', msg);
    assert.equal(myBeacon.lastMsg, msg);

    myBeacon.off('annoyance', annoyanceCB);
    msg = "kiss~";
    myBeacon.emit('annoyance', msg);
    myBeacon.emit('annoyance', msg);
    assert.notEqual(myBeacon.lastMsg, msg);
    
    myBeacon.on('annoyance', annoyanceCB);
    myBeacon.emit('annoyance', msg);
    assert.equal(myBeacon.lastMsg, msg);    
  })
})
