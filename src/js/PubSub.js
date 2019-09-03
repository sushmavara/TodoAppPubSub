var PubSub = new (function() {
    var events = {};
  
    this.publish = function(name, ...data) {
      var handlers = events[name];
      if(!handlers) return;
      handlers.forEach(function(handler) {
        handler.call(this, ...data);
      });
    };
  
    this.subscribe = function(name, handler) {
      var handlers = events[name];
      if(!handlers) {
        handlers = events[name] = [];
      }
      handlers.push(handler);
    };
  });
  
export default PubSub;