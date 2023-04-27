(function(ext) {
  // Extension code will go here
  ext.isMobile = function() {
    return /Mobi/.test(navigator.userAgent);
  };
  
  // Extension initialization function
  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };

  // Register the extension
  ScratchExtensions.register('Mobile Check Extension', descriptor, ext);
})({});
