(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function(_) {
    var output;
    var boxes;

    document.querySelector('.ToggleJS').addEventListener('click', function(e) {
      e.preventDefault();
      var i;
      var cl;

      if (output === void 0) {
        var output = document.querySelector('.Output');

        var boxes = new Array(output.childNodes.length);
        for (i = 0; i < output.childNodes.length; i++) {
          boxes[i] = output.childNodes[i];
        }
      }

      var time = window.performance.now();

      var oldClass = output.getAttribute('data-class');

      switch (oldClass) {
        case 'red':
          output.setAttribute('data-class', 'green');
          for (i = 0; i < boxes.length; i++) {
            cl = boxes[i].classList;
            cl.remove('red');
            cl.add('green');
          }
          break;
        case 'green':
          output.setAttribute('data-class', 'red');
          for (i = 0; i < boxes.length; i++) {
            cl = boxes[i].classList;
            cl.remove('green');
            cl.add('red');
          }
          break;
      }

      window.console.log('JS: ' + (window.performance.now() - time).toString());
    });
  });
}());
