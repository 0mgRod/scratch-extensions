(function(ext) {
  // Extension code will go here
  ext.PI = function() {
    return Math.PI;
  };
  
  // Extension initialization function
  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };

  // Register the extension
  ScratchExtensions.register('Math', descriptor, ext);
})({});
