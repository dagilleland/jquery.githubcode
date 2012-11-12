// Generated by CoffeeScript 1.4.0

(function($, window) {
  var fetchCode, highlightCode, insertCode;
  $.fn.githubcode = function(options) {
    options = $.extend({}, $.fn.githubcode.options, options);
    return this.each(function() {
      var $this, step1, step2, step3;
      $this = $(this);
      step1 = fetchCode();
      step2 = step1.pipe(function(msg) {
        return highlightCode(msg);
      });
      return step3 = step2.pipe(function(msg) {
        return insertCode(msg);
      });
    });
  };
  $.fn.githubcode.options = {
    'api': 'https://api.github.com/repos',
    'debug': false,
    afterInsert: function() {}
  };
  fetchCode = function(repo, path, ref) {
    var dfd;
    dfd = $.Deferred();
    setTimeout(function() {
      console.log("start", 'fetched');
      return dfd.resolve('fetched');
    }, 1000);
    return dfd;
  };
  highlightCode = function(codeblocks) {
    var dfd;
    dfd = $.Deferred();
    setTimeout(function() {
      console.log("retrieved from " + codeblocks, 'highlighted');
      return dfd.resolve('highlighted');
    }, 1000);
    return dfd;
  };
  return insertCode = function(codeblocks, $target) {
    var dfd;
    dfd = $.Deferred();
    setTimeout(function() {
      console.log("retrieved from " + codeblocks, 'injected');
      return dfd.resolve('injected');
    }, 1000);
    return dfd;
  };
})(jQuery, window);
